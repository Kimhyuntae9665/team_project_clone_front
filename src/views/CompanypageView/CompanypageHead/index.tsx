import { Avatar, Box, Grid, Typography } from "@mui/material"
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { GetCompanyListResponseDto, GetCompanyPageResponseDto, PatchCompanyProfileResponseDto } from "src/apis/response/company";
import { GET_COMPANY_URL } from "src/contants/api";
import { Company } from "src/interfaces";
import CompanyStore from "src/stores/companystores/company.store";

export default function CompanyPageHead(){
    // Hook //

    const navigator = useNavigate()
    const {company, setCompany,resetCompany} = CompanyStore();
    const {phoneNumber} = useParams()

    const [companyList, setCompanyList] = useState<(Company | null)>(null);

    let isLoad = false;
    

    //   event handler   //
    const getCompany = () => {
        axios.get(GET_COMPANY_URL(phoneNumber as string))
            .then((response) => getCompanyResponseHandler(response))
            .catch((error) => getCompanyErrorHandler(error))
    }

    //   response handler   //
    const getCompanyResponseHandler = (response: AxiosResponse<any, any>) => {
        const {result, message, data} = response.data as ResponseDto<GetCompanyPageResponseDto>
        if(!result || !data) {
            alert(message)
            navigator('/');
            return;
        }
        setCompanyResponse(data);
    }

    //   error handler   //
    const getCompanyErrorHandler = (error: any) => {
        console.log(error.message)
    }

    //   function   //
    const setCompanyResponse = (data: GetCompanyPageResponseDto) => {
        setCompanyList(data)
    }

    //   use effect   //

    useEffect(() => {
        if(isLoad) return;
        if(!phoneNumber){
            navigator('/')
            return;
        }
        isLoad = true;
        getCompany();
    }, [])

    return(
        <Box>
        <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Avatar sx={{width:'150px', height:'150px'}} alt={companyList?.companyEmail} src={companyList?.companyProfileUrl ? companyList.companyProfileUrl: ''}/>
                    <Typography sx={{textAlign:'center', fontSize:'30px', fontWeight:'600'}}>{'(주)'}{companyList?.companyName}</Typography>
                </Grid>
                <Grid item xs={4} sx={{ p: '40px 40px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', height: '150px', marginRight: '10px' }}></Box>
                    <Grid container direction="column">
                        <Typography sx={{ fontSize: '20px' }}>연락처 {companyList?.companyTelNumber}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>이메일 {companyList?.companyEmail}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>주소 {companyList?.companyAddress}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>업종 {companyList?.companyCategory}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4} sx={{ p: '40px 10px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', height: '150px', marginRight: '10px' }}></Box>
                    <Grid container direction="column">
                        <Typography sx={{ fontSize: '20px' }}>초봉 {companyList?.companyStartingSalary}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>회사 매출액 {companyList?.companyAnnualSales}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>홈페이지 주소 <a href={`https://www.${companyList?.companyHomePage}/`}>{companyList?.companyHomePage}</a></Typography>
                    </Grid>
                </Grid>
        </Grid>
            <Box sx = {{ pt: '20px', pb: '30px', ml:'50px', mr:'50px' }}>
                <Box sx={{ pt: '15px', pr: '15px', pl:'15px',pb:'15px', border: '2px solid rgba(0, 0, 0, 0.2)'}}>
                    <Box sx={{display:'flex', flexDirection: 'column'}}>
                        <Typography sx={{fontSize:'15px', fontWeight:100, color:'rgba(0, 0, 0, 0.5)'}}>회사 소개글</Typography>
                        <Typography sx={{fontSize:'20px', fontWeight:400}}>{companyList?.companyContents}</Typography>
                    </Box>
                </Box>
                
            </Box>
        </Box>
    )
}