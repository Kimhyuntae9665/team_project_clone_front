import { Box, Grid, Pagination, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { GetSearchListResponseDto } from "src/apis/response/company";
import { GET_SEARCH_LIST_URL } from "src/contants/api";
import useCompanyPagingHook from "src/hooks/paging.hook";
import { getPageCount } from "src/utils";
import CompanyListItem from "src/components/companyListCard";
import { GetCompanyListResponseDto } from "src/apis/response/company";

export default function SearchView() {

    const {content} = useParams();
    const { viewList,pageNumber, companyList,setCompanyList,onPageHandler,COUNT } = useCompanyPagingHook(6);
    const [previousSearchWord, setPreviousSearchWord] = useState<string>('');

    let loadflag = true;

    //   Event Handler   //
    const getSearchList = () => {
        axios.get(GET_SEARCH_LIST_URL(content as string, previousSearchWord))
            .then((response) => getSearchListResponseHandler(response))
            .catch((error) => getSearchListErrorHandler(error))
    }

    

    //   Response Handler   //
    const getSearchListResponseHandler = (response : AxiosResponse<any, any>) => {
        const {result,message,data} = response.data as ResponseDto<GetSearchListResponseDto[]>;
        if(!result || !data) return;
        setCompanyList(data);
    }

    //   Error Handler   //
    const getSearchListErrorHandler = (error: any) => {
        console.log(error.message)
    }

    //   use Effect   //
    useEffect(() => {
        if(loadflag) {
            loadflag = false;
            getSearchList()
            setPreviousSearchWord(content as string);
        }
    }, [content])


    return(
        <Box sx={{p:'40px 70px'}}>

            <Box sx={{pb:'60px',pl:'30px',pr: '30px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
                <Box sx={{ justifyContent: 'center', alignItems:'center', p: '10px', fontSize:'24px'}}>
                    <Box component='strong'>"{content}" </Box>
                    <Typography component='span' sx={{ fontSize: '24px', fontWeight: 500, opacity: 0.7 }}>에 대한 검색결과가 <Box component='strong'>{companyList.length}</Box>개 있습니다. </Typography>
                </Box>
                <Box>
                    <Box sx={{ p:'15px' ,border: '3px solid black', textAlign:'center', alignItems:'flex-start'}}>
                        <Grid container spacing={3}> 
                            {companyList.length === 0 ? (<Grid item sm={12} md={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Typography sx={{fontSize:'24px', fontWeight: 500, color:'rgba(0, 0, 0, 0.4)', mb:'263px'}}>검색 결과가 없습니다.</Typography></Grid>) : companyList.map((company) => (<Grid item sm={12} md={2}><CompanyListItem companyListItem={company as GetCompanyListResponseDto} /></Grid>))}
                        </Grid>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                    <Pagination page={pageNumber} count={getPageCount(companyList,COUNT)} onChange={(event, value) => onPageHandler(value)} />
                </Box>
            </Box>
        </Box>
    )
}