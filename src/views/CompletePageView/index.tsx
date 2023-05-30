import { Avatar, Box, Button, Checkbox, Grid, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { SelectUniversityResponseDto } from "src/apis/response/company";
import { GET_PERCENTILE } from "src/contants/api";
import CompanyInformationMain from "../CompanypageView/CompanyInformation";


export default function CompletePage(){

    const { percentile } = useParams();
    const navigator = useNavigate();

    const [ companyScoreInfo, setCompanyScoreInfo ] = useState<SelectUniversityResponseDto | null>(null);
    const {phoneNumber} = useParams();

    let isLoad = true;

    const getCompanyScore = () => {
        axios.get(GET_PERCENTILE(phoneNumber as string))
            .then((response) => getCompanyScoreInfoResponseHandler(response))
            .catch((error) => getCompanyScoreInfoErrorHandler(error))
    }

    const getCompanyScoreInfoResponseHandler = (response: AxiosResponse<any, any>) => {
        const {result, message, data} = response.data as ResponseDto<SelectUniversityResponseDto>
        if(!result || !data) {
            alert(message)
            navigator('/');
            return;
        }
        setCompanyScoreInfo(data);
    }

    const getCompanyScoreInfoErrorHandler = (error: any) => {
        console.log(error.message);
    }
    
    useEffect(() => {
        if(isLoad) return;
        if(!phoneNumber){
            navigator('/')
            return;
        }
        isLoad = true;
        getCompanyScore();
    }, [])

    return(
<Grid container xs={11.2} sx={{pt: '20px', pb: '50px', ml:'50px', mr:'50px', mb:'50px', border:'2px solid black'}}>
                <Grid item xs={7} sx={{pl:'30px', pt:'10px'}}>
                    <Typography sx={{fontSize:'30px', fontWeight:'400'}}>내 합격률</Typography>
                    <Typography sx={{fontSize:'30px', fontWeight:'400', textAlign:'center'}}>	{" "}</Typography>
                    <Typography sx={{fontSize:'50px', fontWeight:'800', textAlign:'center'}}>{percentile}%</Typography>
                </Grid>
                <Grid item xs={4} sx={{ml: "80px", pt:'80px '}}>
                    <Button sx={{ mx: 'auto' }} variant="contained" color="secondary" onClick={() => navigator(`/complete/company/${phoneNumber}`)}>회사가 설정한 상세 점수 보기</Button>
                </Grid>
                {/* <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}>{companyScoreInfo?.first_grade_score}</Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}>{companyScoreInfo?.second_grade_score}</Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}>{companyScoreInfo?.third_grade_score}</Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}>{companyScoreInfo?.etc_grade_score}</Box>
                        </Grid>
                    </Grid> */}
            </Grid>
                

    )

}