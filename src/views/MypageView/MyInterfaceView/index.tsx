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
    const [userFinalEducation_str,setUserFinalEducation_str] = useState<string|undefined>('');
    const [userCarrer_str,setUserCarrer_str] = useState<string|undefined>('');
    const [userLicense_str,setUserLicense_str]= useState<string|undefined>('');

    // const [userFinalEducation,setUserFinalEducation]= useState<string[]>([]);
    // const [userCarrer,setUserCarrer]= useState<string[]>([]);
    // const [userLicense,setUserLicense]= useState<string[]>([]);

    const {user,setUser} = useUserStore();
    const [cookies] = useCookies();
    const accessToken = cookies.accessToken;


    //      Event Handler   //
    const My_info_upload = ()=>{
        console.log("여기: "+userFinalEducation_str);
        console.log(userCarrer_str);
        console.log(userLicense_str);
        if(!userFinalEducation_str || !userCarrer_str || !userLicense_str){
            alert("모든 사항을 선택해 주세요");
            return;
        }

        //? string을 string[]로 먼저 바꾼다  
        str_to_strArr();

        // upload_user_select_component();
        
        
    }

    const str_to_strArr = ()=>{
        console.log("시작 : ");
        
        const userFinalEducation : string[] = [userFinalEducation_str] as string[];
        const userCarrer : string[] = [userCarrer_str] as string[];
        const userLicense : string[] = [userLicense_str] as string[];
        console.log("여기2 : :"+user?.userEmail);
        console.log(userFinalEducation);
        console.log(userCarrer);
        console.log(userLicense);

        // setUserFinalEducation((previousArray)=>[...previousArray,userFinalEducation_str||'']);
        // setUserCarrer((previousArray)=>[...previousArray,userCarrer_str||'']);
        // setUserLicense((previousArray)=>[...previousArray,userLicense_str||'']);

        
            
            const send_data = {userEmail:user?.userEmail,
                               userFinalEducation,
                               userCarrer,
                               userLicense}
    
    
            axios.post(USER_SELECT_COMPONENT,send_data,authorizationHeader(accessToken))
                .then((response)=>upload_user_select_componentResponseHandler(response))
                .catch((error)=>upload_user_select_componentErrorHandler(error))
        


    }

    // const upload_user_select_component = () =>{
    //     console.log(user?.userEmail);
    //     console.log(userFinalEducation);
    //     console.log(userCarrer);
    //     console.log(userLicense);
    //     const send_data = {userEmail:user?.userEmail,
    //                        userFinalEducation,
    //                        userCarrer,
    //                        userLicense}


    //     axios.post(USER_SELECT_COMPONENT,send_data,authorizationHeader(accessToken))
    //         .then((response)=>upload_user_select_componentResponseHandler(response))
    //         .catch((error)=>upload_user_select_componentErrorHandler(error))
    // }


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
                        onChange={(event,value)=>setUserFinalEducation_str(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={usercarrer} disablePortal 
                        renderInput={(params) => <TextField {...params} label="업무 경력" />}
                        onChange={(event,value)=>setUserCarrer_str(value?.label)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userlicense} disablePortal 
                        renderInput={(params) => <TextField {...params} label="자격증" />}
                        onChange={(event,value)=>setUserLicense_str(value?.label)}
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
    {label:'서울대학교'},
    {label:'연세대학교'},
    {label:'고려대학교'},
    {label:'성균관대학교'},
    {label:'한양대학교'},
    {label:'서강대학교'},
    {label:'경희대학교'},
    {label:'중앙대학교'},
    {label:'이화여자대학교'},
    {label:'건국대학교'},
    {label:'동국대학교'},
    {label:'부산대학교'},
    {label:'부경대학교'},
    {label:'울산대학교'},
    {label:'단국대학교'},
    {label:'전북대학교'},
    {label:'전남대학교'},
    {label:'경남대학교'}
]

const usercarrer = [
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

const userlicense  = [
    {label:'SQLD 자격증'},
    {label:'AWS 자격증'},
    {label:'컴퓨터 활용능력'}
]
