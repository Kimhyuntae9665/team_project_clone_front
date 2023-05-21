import { Autocomplete, Box ,Button,Grid, IconButton, TextField } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import {useState} from "react";
import { USER_SELECT_COMPONENT, authorizationHeader } from "src/contants/api";
import {useUserStore} from "src/stores/userstores";
import { useCookies } from "react-cookie";
import ResponseDto from "src/apis/response";
import { UpLoadUserSelectComponentResponseDto } from "src/apis/response/user";


export default function MyInterfaceView() {

    // Hook //
    const [user_final_education,setUser_final_education] = useState<string|undefined>('');
    const [user_carrer,setUser_carrer] = useState<string|undefined>('');
    const [user_license,setUser_license]= useState<string|undefined>('');
    const {user,setUser} = useUserStore();
    const [cookies] = useCookies();
    const accessToken = cookies.accessToken;


    //      Event Handler   //
    const My_info_upload = ()=>{
        if(!user_final_education || !user_carrer || !user_license){
            alert("모든 사항을 선택해 주세요");
        }

        upload_user_select_component();
        
        
    }

    const upload_user_select_component = () =>{
        const send_data = {userEmail:user?.userEmail,
                           user_final_education,
                           user_carrer,
                           user_license}


        axios.post(USER_SELECT_COMPONENT,send_data,authorizationHeader(accessToken))
            .then((response)=>upload_user_select_componentResponseHandler(response))
            .catch((error)=>upload_user_select_componentErrorHandler(error))
    }


    // Response Handler //
    const upload_user_select_componentResponseHandler =(response:AxiosResponse<any,any>)=>{
        const { result, message, data } = response.data as ResponseDto<UpLoadUserSelectComponentResponseDto>;

        if (!result || !data) {
            alert(message);
            return;
        }

    }

    // Error Handler //
    const upload_user_select_componentErrorHandler = (error:any)=>{
        console.log(error.message);
    }
    








    return(
        <Box> 
        <Grid container sx={{  pt:'40px', pb:'20px',pl:'50px',pr: '50px'}}>
                <Grid item sx={{ p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'50px'}}>
                    <Grid item sx={{display:'flex', alignItems:'center'}}>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userfinalEducation} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력" />}
                        onChange={(event,value)=>setUser_final_education(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userCarrer} disablePortal 
                        renderInput={(params) => <TextField {...params} label="경력" />}
                        onChange={(event,value)=>setUser_carrer(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userLicense} disablePortal 
                        renderInput={(params) => <TextField {...params} label="자격증" />}
                        onChange={(event,value)=>setUser_license(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6} sx={{display:'flex', flexDirection: 'column'}}>
                        <TextField 
                        sx={{width:'200px', ml:'55px' }}
                        multiline
                        label="기타 입력사항"
                        placeholder="자유롭게 입력해주세요."
                        />
                        
                    </Grid>
                    </Grid>
                    <Box sx={{ display:'flex', alignItems:'center',justifyContent:'right',pr:'80px'}}>
                        <Button variant="contained" color="secondary" onClick={My_info_upload}>내 정보 저장</Button>
                    </Box>
                </Grid>
                
            </Grid>
                
            </Box>
    )
}

const userfinalEducation = [
    {label:'서울대학교 졸업'},
    {label:'연세대학교 졸업'},
    {label:'고려대학교 졸업'},
    {label:'한양대학교 졸업'},
    {label:'성균관대학교 졸업'},
    {label:'중앙대학교 졸업'},
    {label:'경희대학교 졸업'},
    {label:'부산대학교 졸업'}
]

const userCarrer = [
    {label:'제조업 20년 이상'},
    {label:'제조업 15년 이상'},
    {label:'제조업 10년 이상'},
    {label:'서비스업 20년 이상'},
    {label:'서비스업 15년 이상'},
    {label:'서비스업 10년 이상'},
]

const userLicense  = [
    {label:'AWS 자격증'},
    {label:'SQLD 자격증'},
    {label:'컴퓨터활용능력 자격증'},
    {label:'기타'}
]
