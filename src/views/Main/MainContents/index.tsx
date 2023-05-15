import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Box, Grid, Pagination,  Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetCompanyListResponseDto } from "src/apis/response/company";
import CompanyListItem from "src/components/companyListCard";
import { getPageCount } from "src/utils";
import companyPagingHook from "src/hooks/paging.hook";
import { GET_LIST_COMPANY } from "src/contants/api";
import ResponseDto from "src/apis/response";
import { COMPANYLISTTOP6 } from "src/mock";

export default function MainContents(){
   const { viewList,pageNumber, companyList,setCompanyList,onPageHandler,COUNT } = companyPagingHook(6);
   const navigator = useNavigate();

   const getList = () => {
    axios.get(GET_LIST_COMPANY)
    .then((response) => getListCompanyResponseHandler(response))
    .catch((error) => getListCompanyErrorHandler(error));
   }

   const getListCompanyResponseHandler = (response: AxiosResponse<any, any>) => {
    const {result, message, data} = response.data as ResponseDto<GetCompanyListResponseDto[]>
    if (!result || data === null) return;
    setCompanyList(data);
   }

   const getListCompanyErrorHandler = (error:any) => {
    console.log(error.message);
   }

   useEffect(() => {
    getList();
    // setCompanyList(COMPANYLISTTOP6);
   },[]);

  
  return(
    <Box sx={{ pt:'40px', pb:'120px',pl:'50px',pr: '50px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Box sx={{ justifyContent: 'center', alignItems:'center', p: '10px'}}>
            <Typography sx={{ fontSize:'20px', fontWeight:'400', textAlign:'center'  }}>회사 목록</Typography>
        </Box>
        <Box>
        <Box sx={{ p:'15px' ,border: '3px solid black', textAlign:'center', alignItems:'flex-start'}}>
          <Grid container spacing={3}> 
                    {viewList.map((companyList) => (<Grid item sm={12} md={2}  ><CompanyListItem companyListItem={companyList as GetCompanyListResponseDto} /></Grid>))}
            </Grid>
        </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
           <Pagination page={pageNumber} count={getPageCount(companyList,COUNT)} onChange={(event, value) => onPageHandler(value)} />
        </Box>
    </Box>
  );
    
}