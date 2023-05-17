import { Autocomplete, Grid, TextField,Box,Typography,Input, Button } from "@mui/material";
import { useState, } from "react";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { useNavigate } from "react-router-dom";
import { COMPANY_SELECT_CARRER, COMPANY_SELECT_LICENSE, COMPANY_SELECT_UNIVERSITY, authorizationHeader } from "src/contants/api";
import { useCookies } from "react-cookie";
import { UpLoadCompanySelectComponentResponseDto } from "src/apis/response/company";







export default function MyCompanypageInterfaceView() {
    
//      HOOK        //
const navigator = useNavigate();
// ? undefined, 랑 null이랑 다르다 
const [Grade_One_University,setGrade_One_University] = useState<string | undefined>('');
const [Grade_One_University_score,setGrade_One_University_score] = useState<Number| undefined>(0);

const [Carrer,setCarrer] = useState<string| undefined>('');
const [Carrer_year,setCarrer_year] = useState<string| undefined>('');
const [Carrer_score,setCarrer_score] = useState<Number| undefined>(0);

const [License,setLicense]= useState<string| undefined>('');
const [License_score,setLicense_score]= useState<Number| undefined>(0);

const [cookies] = useCookies();
const accessToken = cookies.accessToken;




//     Event Handler       //



const company_Select_Component_University = () =>{
    const send_Data = {Grade_One_University,Grade_One_University_score};

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const comapny_Select_Component_Carrer = () =>{
    const send_Data = {Carrer,Carrer_year,Carrer_score};

    axios.post(COMPANY_SELECT_CARRER,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_Carrer_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))

}

const company_Select_Component_License = () =>{
    const send_Data = {License,License_score};

    axios.post(COMPANY_SELECT_LICENSE,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_License_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))
}

// ! 가장 먼저 불리는 함수
const UpLoad_company_select_component_Handler = () =>{

    if(!Grade_One_University?.trim() || !Carrer?.trim() || !License?.trim() ){
        alert('모든 사항을 선택해 주세요');
        return;
      }

      company_Select_Component_University();
      comapny_Select_Component_Carrer();
      company_Select_Component_License();



}




//      Response Handler   //
const company_Select_University_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    

}

const company_Select_Carrer_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    

}


const company_Select_License_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    

}



//      Error Handler       //

const company_Select_ComponentError =(error:any)=>{
    console.log(error.message);
}
    return (
        <Grid container spacing={4} sx={{mt:'32px'}}>
                <Grid item sx={{display:'flex', alignItems:'center',width:'100%', height: '100%', border:'2px solid black', pb:'100px', mr:'20px', ml:'55px'}}>
                    <Grid item xs={5}>
                        <Grid container>
                            <Grid item xs={7}>
                                <Autocomplete
                                sx={{width:'150px', ml:'30px' }} 
                                options={company_first_grade_university} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1등급 학교" /> }
                                onChange={(event,value)=>setGrade_One_University(value?.label)}
                                />
                            </Grid>
                            <Grid>
                                <Autocomplete
                                sx={{width:'150px', ml:'30px' }} 
                                options={company_first_grade_university_score} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1등급 학교 점수" /> }
                                onChange={(event,value)=>setGrade_One_University_score(value?.label)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Autocomplete
                                sx={{width:'200px', ml:'45px' }} 
                                options={company_carrer} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1급 경력" /> }
                                onChange={(event,value)=>setCarrer(value?.label)}
                                />
                            </Grid>
                            <Grid>
                                <Autocomplete
                                sx={{width:'200px', ml:'45px' }} 
                                options={company_carrer_year} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1급 경력 연차" /> }
                                onChange={(event,value)=>setCarrer_year(value?.label)}
                                />
                            </Grid>
                            <Grid>
                                <Autocomplete
                                sx={{width:'200px', ml:'45px' }} 
                                options={company_carrer_score} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1급 경력 점수" /> }
                                onChange={(event,value)=>setCarrer_score(value?.label)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid container>
                            <Grid item xs={6}>
                                <Autocomplete
                                sx={{width:'200px', ml:'55px' }} 
                                options={company_license} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1급 자격증" /> }
                                onChange={(event,value)=>setLicense(value?.label)}
                                />
                            </Grid>
                            <Grid>
                                <Autocomplete
                                sx={{width:'200px', ml:'55px' }} 
                                options={company_license_score} disablePortal 
                                renderInput={(params) => <TextField {...params} label="1급 자격증 점수" /> }
                                onChange={(event,value)=>setLicense_score(value?.label)}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button variant="contained" color="secondary" onClick={UpLoad_company_select_component_Handler} sx={{mr:'30px'}}>등록하기</Button>
                </Grid>
            </Grid>
    )
}
const company_first_grade_university = [
    {label:'서울대학교'},
    {label:'연세대학교'},
    {label:'고려대학교'}
]
const company_first_grade_university_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
    
    
]
const company_carrer = [
    {label:'제조업 근무 경력'},
    {label:'IT업 근무 경력'},
    {label:'연구직 근무 경력'},
    {label:'판매직 근무 경력'},
    {label:'경영직 근무 경력'},
    {label:'비서직 근무 경력'},
    {label:'과학직 근무 경력'},
    {label:'스포츠직 근무 경력'},
    {label:'예술직 근무 경력'}
]

const company_carrer_year = [
    {label:'20년 이상'},
    {label:'15년 이상'},
    {label:'10년 이상'},
    {label:'5년 이상'},
    {label:'3년 이상'}
    
]
const company_carrer_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
]
const company_license = [
    {label:'SQLD 자격증'},
    {label:'AWS 자격증'},
    {label:'컴퓨터 활용능력'}
]
const company_license_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
]

