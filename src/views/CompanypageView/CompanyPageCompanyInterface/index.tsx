import { Box, Grid, Typography } from "@mui/material"
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { SelectUniversityResponseDto } from "src/apis/response/company";
import { GetSelectInformationResponseDto } from "src/apis/response/company";
import { GET_SELECT_INFORMATION_URL } from "src/contants/api";

export default function CompanyPageCompanyInterface() {
    
    const [companySelectInfo, setCompanySelectInfo] = useState<GetSelectInformationResponseDto | null>(null);
    
    const {phoneNumber} = useParams()
    const navigator = useNavigate()

    const getCompanyInformation = () => {
        axios.get(GET_SELECT_INFORMATION_URL(phoneNumber as string))
            .then((response) => getSelectInformationResponseHandler(response))
            .catch((error) => getSelectInformationErrorHandler(error))
    }
    const getSelectInformationResponseHandler = (response: AxiosResponse<any, any>) => {
        const {result, message, data} = response.data as ResponseDto<GetSelectInformationResponseDto>
        if(!result || !data) {
            alert(message)
            navigator('/');
            return;
        }
        setCompanySelectInfo(data);
    }

    const getSelectInformationErrorHandler = (error: any) => {
        console.log(error.message)
    }

        getCompanyInformation();

    return(
        <>
        <Grid item xs={6} sx={{ p: '40px 40px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', height: '150px', marginRight: '10px' }}></Box>
                    <Grid container direction="column">
                        <Typography sx={{ fontSize: '20px' }}>1등급 대학 {companySelectInfo?.first_grade_university}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>2등급 대학 {companySelectInfo?.second_grade_university}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>3등급 대학 {companySelectInfo?.third_grade_university}</Typography>
                        <Typography sx={{ fontSize: '20px' }}>기타 등급 대학 {companySelectInfo?.etc_grade_university}</Typography>
                    </Grid>
                </Grid></>
    )
}