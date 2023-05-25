import { Avatar, Box,  Grid, Typography,IconButton } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { ChangeEvent, useEffect, useRef } from "react";
import {  useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { PatchUserProfileDto } from "src/apis/request/user";
import ResponseDto from "src/apis/response";
import { PatchUserProfileResponseDto } from "src/apis/response/user";
import {  FILE_USER_UPLOAD_URL, PATCH_USER_PROFILE_URL, authorizationHeader, mutipartHeadler } from "src/contants/api";
import { useUserStore } from "src/stores/userstores";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function MyPageHead() {

    //          Hook          //

    const navigator = useNavigate();
    const imageRef = useRef<HTMLInputElement | null>(null);

    const {user,setUser} = useUserStore();
    const [ cookies, setCookies ] = useCookies();

    const accessToken = cookies.accessToken;

    //          Event Handler          //
    const onProfileUploadButtonHandler = () => {
        if (!imageRef.current) return;
        imageRef.current.click();
    }
    const onProfileUploadChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_USER_UPLOAD_URL, data, mutipartHeadler())
            .then((response) => imageUploadResponseHandler(response))
            .catch((error) => imageUploadErrorHandler(error));
    }
     //          Response Handler          //
     const imageUploadResponseHandler = (response: AxiosResponse<any,any>) => {
        const userProfileUrl = response.data as string;
        const data =  { userProfileUrl }; //? 보낼때 객체로 보내야 되는데 문자열로 보내져서 안되는거였음 {}를 꼭 해서 보내야됨

        axios.patch(PATCH_USER_PROFILE_URL, data, authorizationHeader(accessToken))
            .then((response) => patchProfileResponseHandler(response))
            .catch((error) => patchProfileErrorHandler(error));
    }
    const patchProfileResponseHandler = (response: AxiosResponse<any,any>) => {
        const { result, message, data } = response.data as ResponseDto<PatchUserProfileResponseDto>;
        if (!result || !data) {
            alert(message);
            return;
        }
        setUser(data);
    }

    //          Error Handler          //
    const imageUploadErrorHandler = (error: any) => {
        console.log(error.message);
    }
    const patchProfileErrorHandler = (error: any) => {
        console.log(error.message);
    }
    //          Use Effect          //
    useEffect(() => {
        if (!accessToken) {
            navigator('/auth');
            return;
        }
    },[])

    
    

    return (

        <Box sx={{ p: '5px' }}>
            {/* 유저 프로필 */}
                <Box sx={{ display: 'flex', alignItems: 'center', m:'15px 15px',p:'10px'}}>
                    <Box>
                        <IconButton>
                            <Avatar sx={{width:'150px', height:'150px'}} alt= {user?.userName} src={user?.userProfileUrl ? user?.userProfileUrl: ''} ></Avatar>
                        </IconButton>
                    </Box>
                    <Box sx={{ ml: '25px', display: 'flax', FlexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography sx={{ fontSize: '24px', fontWeight: 500, color: 'rgba(0,0,0,0.7)' }}>{user?.userName}</Typography>
                            <IconButton sx={{ mr: '10px' }} onClick={(event) => onProfileUploadButtonHandler()}>
                                <ModeEditIcon />
                                <input ref={imageRef} hidden type='file' accept = 'image/*' onChange={(event) => onProfileUploadChangeHandler(event)}/>
                            </IconButton>
                        </Box>
                        <Typography sx={{ mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>{user?.userTelNumber}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', m:'50px 50px',width:'1000px',height:'150px'}}>
                 
                </Box>
            </Box>

        </Box>

    )
}