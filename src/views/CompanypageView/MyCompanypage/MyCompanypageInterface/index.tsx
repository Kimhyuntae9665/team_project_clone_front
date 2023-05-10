import { Autocomplete, Grid, TextField } from "@mui/material";
import { useState, } from "react";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { useNavigate } from "react-router-dom";
import { COMPANY_SELECT_CARRER, COMPANY_SELECT_LICENSE, COMPANY_SELECT_UNIVERSITY, authorizationHeader } from "src/contants/api";
import { useCookies } from "react-cookie";




//      HOOK        //
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
            .then((response)=>company_Select_Component_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const comapny_Select_Component_Carrer = () =>{
    const send_Data = {Carrer};

    axios.post(COMPANY_SELECT_CARRER,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_Component_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))

}

const company_Select_Component_License = () =>{
    const send_Data = {License};

    axios.post(COMPANY_SELECT_LICENSE,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_Component_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))
}


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
const company_Select_Component_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<>
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




export default function MyCompanypageInterfaceView() {
    return (
        <Grid container sx={{ p:'20px 20px',mt:'50px'}}>
                <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation1} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력" /> }
                        onChange={(event,value)=>setGrade_One_University(value?.label)}
                        />
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
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation4} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력4" />}
                        />
                    </Grid>
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