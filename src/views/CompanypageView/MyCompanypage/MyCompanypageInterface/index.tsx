import { Autocomplete, Grid, TextField,Box,Typography,Input, Button } from "@mui/material";
import { useState, } from "react";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { useNavigate } from "react-router-dom";
import { COMPANY_SELECT_CARRER, COMPANY_SELECT_LICENSE, COMPANY_SELECT_UNIVERSITY, authorizationHeader } from "src/contants/api";
import { useCookies } from "react-cookie";
import { UpLoadCompanySelectComponentResponseDto } from "src/apis/response/company";







<<<<<<< HEAD
export default function MyCompanypageInterfaceView() {
    
//      HOOK        //
=======


export default function MyCompanypageInterfaceView() {
    //      HOOK        //
>>>>>>> 6a16541c3361a0796eb72f59c3b11fbb7d054ba7
const navigator = useNavigate();
// ? undefined, 랑 null이랑 다르다 
const [Grade_One_University,setGrade_One_University] = useState<string | undefined>('');
const [Carrer,setCarrer] = useState<string| undefined>('');
const [License,setLicense]= useState<string| undefined>('');
const [cookies] = useCookies();
const accessToken = cookies.accessToken;




//     Event Handler       //
const company_Select_Component_University = () =>{
    const send_Data = {Grade_One_University};

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const comapny_Select_Component_Carrer = () =>{
    const send_Data = {Carrer};

    axios.post(COMPANY_SELECT_CARRER,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_Carrer_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))

}

const company_Select_Component_License = () =>{
    const send_Data = {License};

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

    // ? data의 타입이 뭔지 모르면 data 위에 커서 가져다 노으면 변수의 타입을 알 수 있다 
const Display_Select_Component = (data : UpLoadCompanySelectComponentResponseDto) =>{

}


//      Response Handler   //
const company_Select_University_ResponseHandler = (response : AxiosResponse<any,any>)=>{

<<<<<<< HEAD
    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }
=======
    // const {result,message,data} = response.data as ResponseDto<>
    // if(!result || !data){
    //     alert(message);
    //     return;
    //   }
>>>>>>> 6a16541c3361a0796eb72f59c3b11fbb7d054ba7

    navigator('/myCompanyPage');
    Display_Select_Component(data)

}

const company_Select_Carrer_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    Display_Select_Component(data)

}


const company_Select_License_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    Display_Select_Component(data)

}



//      Error Handler       //

const company_Select_ComponentError =(error:any)=>{
    console.log(error.message);
}
<<<<<<< HEAD

=======
>>>>>>> 6a16541c3361a0796eb72f59c3b11fbb7d054ba7
    return (
        <Grid container spacing={4} sx={{p:'20px 20px', mr:'20px' }}>
                <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                    <Grid item xs={6}>
<<<<<<< HEAD
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation1} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력" /> }
        // ?                                            value값이 없으면 undefined  있으면 정상적으로 value.label을 set함수에 넣는다
                        onChange={(event,value)=>setGrade_One_University(value?.label)}
                        />
=======
                        <Grid container>
                            <Grid item xs={6}>
                                <Autocomplete
                                sx={{width:'200px', ml:'55px' }} 
                                options={companyfinalEducation1} disablePortal 
                                renderInput={(params) => <TextField {...params} label="최종학력" /> }
                                onChange={(event,value)=>setGrade_One_University(value?.label)}
                                />
                            </Grid>
                            <Grid>
                                <Box sx={{alignItems:'center',p:'10px'}}  >
                                    <Typography sx={{fontSize:'20px'}}>월매출: <Input placeholder="매출액를 입력하세요" /></Typography>
                                </Box>
                            </Grid>
                        </Grid>
>>>>>>> 6a16541c3361a0796eb72f59c3b11fbb7d054ba7
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation2} disablePortal 
                        renderInput={(params) => <TextField {...params} label="희망 경력" />}
                        onChange={(event,value)=>setCarrer(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation3} disablePortal 
                        renderInput={(params) => <TextField {...params} label="선호 자격증" />}
                        onChange={(event,value)=>setLicense(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{alignItems:'center',justifyContent:'center',p:'10px'}}>
                            <Autocomplete 
                            options={companyfinalEducation4} disablePortal 
                            renderInput={(params) => <TextField {...params} label="최종학력4" />}
                            />
                        </Box>
                    </Grid>
                    <Button variant="contained" color="secondary">버튼</Button>
                </Grid>
            </Grid>
    )
}
const companyfinalEducation1 = [
    {label:'고등학교 졸업 +5'},
    {label:'대학교 졸업 +10'},
    {label:'대학원 졸업 +15'},
]
const companyfinalEducation2 = [
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
]
const companyfinalEducation3 = [
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
]
const companyfinalEducation4 = [
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
]

