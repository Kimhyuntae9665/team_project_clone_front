import { Box, Grid, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { ApplyToCompanyResponseDto } from "src/apis/response/applicant";
import { APPLICANT_SCORE_PER_COMPANY, authorizationHeader } from "src/contants/api";
import { useUserStore } from "src/stores/userstores";

export default function CompanyPageMySuccessRate(){
    //Hook  //
    const [cookies] = useCookies();
    const accessToken = cookies.accessToken;
    const {user,setUser} = useUserStore();
    const navigator = useNavigate();


    const [applicant_FinalEducation,setApplicant_FinalEducation] = useState<string|undefined|null>('');
    const [applicant_Carrer,setApplicant_Carrer]=  useState<string|undefined|null>('');
    const [applicant_License,setApplicant_License] = useState<string|undefined|null>('');

    // Event Handler //


    const ApplyToCompany = () =>{

        setApplicant_FinalEducation(user?.applicantFinalEducation);
        setApplicant_Carrer(user?.applicantCarrer);
        setApplicant_License(user?.applicantLicense);

        console.log("여기 :"+ applicant_FinalEducation);
        console.log("여기 2:"+ applicant_Carrer);
        console.log("여기 2:"+applicant_License);
        console.log("여기 2:"+user?.userEmail);


        const send_data = {applicantEmail:user?.userEmail,
            applicant_FinalEducation,
            applicant_Carrer,
            applicant_License}
        axios.post(APPLICANT_SCORE_PER_COMPANY,send_data,authorizationHeader(accessToken))
             .then((response)=>ApplyToCompanyResponseHandler(response))
             .catch((error)=>ApplyToCompanyErrorHandler(error))
    }






    //  Response Handler //

    const ApplyToCompanyResponseHandler = (response:AxiosResponse<any,any>)=>{
        const {result,message,data} = response.data as ResponseDto<ApplyToCompanyResponseDto>

        if (!result || !data) {
            alert(message);
            return;
        }


        navigator("/Company/{phoneNumber}");







    }






    //  Error Handler  //

    const ApplyToCompanyErrorHandler = (error:any) =>{
        console.log(error.message);

    }








    return(
        <Grid container sx={{mt:'50px', border:'2px solid black'}}>
                <Grid item xs={6} sx={{p:'10px 20px 20px 20px'}}>
                    <Typography sx={{fontSize:'30px', fontWeight:'400'}}>내 합격률</Typography>
                </Grid>
                <Grid item xs={6} sx={{p:'30px 30px'}}>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>

        
            
    )
}