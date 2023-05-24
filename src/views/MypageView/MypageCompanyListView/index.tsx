import { useEffect} from "react";
import {Box, Typography,Pagination,Grid} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { GetCompanyListResponseDto, GetMyCompanyListResponseDto } from "src/apis/response/company";
import CompanyListItem from "src/components/companyListCard";
import {  GET_MY_COMPANY_LIST_URL, authorizationHeader } from "src/contants/api";
import useCompanyPagingHook from "src/hooks/paging.hook";
import { getPageCount } from "src/utils";
import { useUserStore } from "src/stores/userstores";
import { useCookies } from "react-cookie";
import companyStore from "src/stores/companystores/company.store";

export default function MyPageCompanyListView (){
    
    // Hook //

    

    const navigator = useNavigate();

    const { viewList,pageNumber, companyList,setCompanyList,onPageHandler,COUNT } = useCompanyPagingHook(6);
   
    const {user} = useUserStore();
    const [cookies] = useCookies();

    //  Event Handler //

    const getMyList = (accessToken:string) => {
        const send_Data = {applicantEmail:user?.userEmail}
        axios.post (GET_MY_COMPANY_LIST_URL,send_Data,authorizationHeader(accessToken))
        .then((response) => getMyListResponseHandler(response))
        .catch((error) => getMyListErrorHandler(error))
    }

    // Response Handler //

    const getMyListResponseHandler =(response: AxiosResponse<any,any>) =>{
        console.log("여기까지는 완료_List 앞에 :");
        const {result,message,data} = response.data as ResponseDto<GetMyCompanyListResponseDto[]>
        if (!result || !data) {
            alert(message);
            return;
        }
        console.log("여기까지는 완료_List: "+data[0]);
        setCompanyList(data);
    }

    // Error Handler //

    const getMyListErrorHandler = (error:any) => {
        console.log(error.message);
    }

    useEffect(() => {
        const accessToken = cookies.accessToken;
        //? 로그인이 되어있지 않으면 로그인 페이지로 이동
        if ( !accessToken) {
            alert('로그인이 필요한 작업입니다.');
            navigator('/');
        }
        getMyList(accessToken);
    },[]);

    return (

        <Box sx={{ pt:'40px', pb:'120px',pl:'50px',pr: '50px', backgroundColor: 'rgba(0,0,0,0.1)' }}>
            <Box sx={{ justifyContent: 'center', alignItems:'center', p: '10px'}}>
                <Typography sx={{ fontSize: '24px', fontWeight: 500   }}>내가 지원한 회사{companyList.length}</Typography>
            </Box>
            <Box>
                <Box sx={{ p:'15px' ,border: '3px solid black', textAlign:'center', alignItems:'flex-start'}}>
                    <Grid container spacing={3}> 
                        {companyList.map((company) => (<Grid item sm={12} md={2}  ><CompanyListItem companyListItem={company as GetCompanyListResponseDto} /></Grid>))}
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center'}}>
                <Pagination page={pageNumber} count={getPageCount(companyList,COUNT)} onChange={(event, value) => onPageHandler(value)} />
            </Box>
    </Box>
    )
}