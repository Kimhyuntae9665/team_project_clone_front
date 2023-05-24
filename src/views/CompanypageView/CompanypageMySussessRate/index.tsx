import { Box, Button, FormHelperText, Grid, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { ApplyToCompanyResponseDto, GetApplicantDataResponseDto } from "src/apis/response/applicant";
import { APPLICANT_SCORE_PER_COMPANY, authorizationHeader } from "src/contants/api";
import { useUserStore } from "src/stores/userstores";
import { GET_APPLICANT_DATA } from "../../../contants/api";
import { stringToArray } from "src/utils";

export default function CompanyPageMySuccessRate(){
    //Hook  //
    const [cookies] = useCookies();
    const accessToken = cookies.accessToken;
    // ? UserStore는 setUser를 통해 user에 데이터를 저장하면 다른 ts파일에 가서도 그 데이터를 사용할 수 있다 
    const {user,setUser} = useUserStore();
    const navigator = useNavigate();
    const { phoneNumber } = useParams();


    const [applicant_FinalEducation_str,setApplicant_FinalEducation_str] = useState<string|undefined|null>('');
    const [applicant_Carrer_str,setApplicant_Carrer_str] = useState<string|undefined|null>('');
    const [applicant_License_str,setApplicant_License_str] =useState<string|undefined|null>('');


    // const [applicant_FinalEducation,setApplicant_FinalEducation] = useState<string[]|undefined|null>([]);
    // const [applicant_Carrer,setApplicant_Carrer]=  useState<string[]|undefined|null>([]);
    // const [applicant_License,setApplicant_License] = useState<string[]|undefined|null>([]);
    const [applySign, setApplySign] = useState<Boolean>(false)

    // Event Handler //


    const ApplyToCompany = () =>{

        axios.get(GET_APPLICANT_DATA,authorizationHeader(accessToken))
             .then((response)=>get_applicant_data(response))
             .catch((error)=>getApplicantDataErrorHandler(error))
        

        // ? 1. axios.get()을 사용해서 데이터 베이스의 데이터를 먼저 가져온다 
        // ? 2. 가져온 데이터를 사용해서 다시 백으로 데이터를 보낸다 


        // const applicant_FinalEducation:string[] = [applicant_FinalEducation_str] as string[];
        // const applicant_Carrer:string[] = [applicant_Carrer_str] as string[];
        // const applicant_License:string[] = [applicant_License_str] as string[];



        // const send_data = {applicantEmail:user?.userEmail,
        //     applicant_FinalEducation,
        //     applicant_Carrer,
        //     applicant_License}
        // axios.post(APPLICANT_SCORE_PER_COMPANY,send_data,authorizationHeader(accessToken))
        //      .then((response)=>applyToCompanyResponseHandler(response))
        //      .catch((error)=>applyToCompanyErrorHandler(error))
    }


    const ApplyToCompany_number2 = () =>{

        console.log(stringToArray(applicant_FinalEducation_str as string));

        const applicant_FinalEducation:string[] = stringToArray(applicant_FinalEducation_str as string);
        const applicant_Carrer:string[] = stringToArray(applicant_Carrer_str as string);
        const applicant_License:string[] = stringToArray(applicant_License_str as string);

        console.log("이거2: "+applicant_FinalEducation);
        console.log("이거3: "+applicant_Carrer);
        console.log("이거4: "+applicant_License);
        console.log("dddddddd: "+ phoneNumber as string);



        const send_data = {applicantEmail:user?.userEmail,
            applicant_FinalEducation,
            applicant_Carrer,
            applicant_License}
        axios.post(APPLICANT_SCORE_PER_COMPANY(phoneNumber as string),send_data,authorizationHeader(accessToken))
             .then((response)=>applyToCompanyResponseHandler(response))
             .catch((error)=>applyToCompanyErrorHandler(error))

    }


    const applyCheckHandler = () => {
        setApplySign(true)
    }






    //  Response Handler //

    const applyToCompanyResponseHandler = (response:AxiosResponse<any,any>)=>{
        const {result,message,data} = response.data as ResponseDto<ApplyToCompanyResponseDto>

        if (!result || !data) {
            alert(message);
            return;
        }


        navigator(`/Company/${phoneNumber}`);







    }



    const get_applicant_data = (response:AxiosResponse<any,any>)=>{
        const {result,message,data} = response.data as ResponseDto<GetApplicantDataResponseDto>

        if (!result || !data) {
            alert(message);
            return;
        }
        // ? set함수는  set함수를 포함하고 있는 더 큰 함수가 끝나야지 효과 적용이 끝난다 
        setApplicant_FinalEducation_str(data?.applicant_FinalEducation);
        setApplicant_Carrer_str(data?.applicant_Carrer);
        setApplicant_License_str(data?.applicant_License);



        console.log("드디어 들어오나? : "+data?.applicant_FinalEducation);
        console.log("드디어 들어오나2:"+data?.applicant_Carrer);
        console.log("드디어 들어오나2:"+data?.applicant_License);

        ApplyToCompany_number2();




    }





    //  Error Handler  //

    const applyToCompanyErrorHandler = (error:any) =>{
        console.log(error.message);

    }

    const getApplicantDataErrorHandler = (error:any) =>{
         console.log(error.message);
    }








    return(
        <Grid container xs={11.2} sx={{pt: '20px', pb: '50px', ml:'50px', mr:'50px', mb:'50px', border:'2px solid black'}}>
                <Grid item xs={7} sx={{pl:'30px', pt:'10px'}}>
                    <Typography sx={{fontSize:'30px', fontWeight:'400'}}>내 합격률</Typography>
                </Grid>
                <Grid item xs={4} sx={{ml: "80px", pt:'10px '}}>
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
                <Grid container xs={12} sx={{mt:'20px'}}>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2} container justifyContent="flex-end" alignItems="center">
                        {
                            applySign ? (
                                <>
                                    <Button sx={{ mx: 'auto' }} variant="contained" color="secondary" onClick={ApplyToCompany}>
                                        예
                                    </Button>
                                    <Button sx={{ mx: 'auto' }} variant="contained" color="secondary">
                                        아니요
                                    </Button>
                                    <FormHelperText sx={{color:'red', textAlign:'center', mr:'10px'}}>정말로 지원하시겠습니까?</FormHelperText>
                                </>
                            ) : (
                                <Button sx={{ mx: 'auto' }} variant="contained" color="secondary" onClick={applyCheckHandler}>지원하기</Button>
                            )
                        }

                    </Grid>
                </Grid>
            </Grid>
    )
}