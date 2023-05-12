import { Box, Button, Card, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { Dispatch, useState, SetStateAction, useRef, KeyboardEvent } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { UserSignInDto } from "src/apis/request/auth";
import ResponseDto from "src/apis/response";
import { UserloginResponseDto } from "src/apis/response/auth";
import { USER_SIGN_IN_URL } from "src/contants/api";
import { useUserStore } from "src/stores/userstores";
import { getExpires } from "src/utils";



export default function UserLoginCardView(){

    //      Hook     //

    const [userEmail, setUserEmail] = useState<string>("");
    const [userPassword, setUserPassword] = useState<string>("");
    const [loginError, setLoginError] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies();

    const navigator = useNavigate();

    const {setUser} = useUserStore();
    const passwordRef = useRef<HTMLInputElement | null>(null);

        //      Event Handler   //
    
    const onEmailKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Enter') return;
        if (!passwordRef.current) return;
        (passwordRef as any).current?.lastChild?.firstChild?.focus();
      }
    
      const onPasswordKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key !== 'Enter') return;
        onLoginHandler();
      }

    const onLoginHandler = () => {
        //? email 입력했는지 검증 / password 입력했는지 검증
        if (!userEmail.trim() || !userPassword) {
          alert("모든 값을 입력해주세요.");
          return;
        }

        const data: UserSignInDto = {userEmail, userPassword};
        axios.post(USER_SIGN_IN_URL, data)
        .then((response) => signInResponseHandler(response))
        .catch((error) => signInErrorHandler(error))
    }

    const signInResponseHandler = (response: AxiosResponse<any, any>) => {
        const {result, message, data} = response.data as ResponseDto<UserloginResponseDto>
        if(!result || !data) {
            setLoginError(true);
            return;
        }

        const {token, expiredTime, ...user1} = data;
        const expires = getExpires(expiredTime);
        setCookie("accessToken", token, {expires, path:'/'})
        setUser(user1);
        navigator('/')
    }

    //      Error Handler    //

    const signInErrorHandler = (error: any) => {
        console.log(error.message);
    }

    return(
        <Box display="flex" sx={{flexDirection:'column', justifyContent:"space-between", alignItems: 'center' }}>
            
            <Card sx={{ p: '40px', width:'600px', height: '700px', mt: '80px', mb: '80px'}}>
            <Box>
                <Typography variant="h5" fontWeight='900' textAlign="center">
                    사용자 로그인
                </Typography>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>이메일</InputLabel>
                    <Input sx={{ height: '40px' }} onChange={(event) => setUserEmail(event.target.value)} onKeyPress={(event) => onEmailKeyPressHandler(event)}/>
                    
                </FormControl>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>비밀번호</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} onChange={(event) => setUserPassword(event.target.value)} onKeyPress={(event) => onPasswordKeyPressHandler(event)}/>
                    
                </FormControl>
            </Box>
            <Box>
                {
                    loginError &&
                    <Box>
                        <Typography sx={{fontSize:'12px', color:'red', opacity:'0.7'}}>이메일 주소 또는 비밀번호를 잘못 입력하였습니다..</Typography>
                        <Typography sx={{fontSize:'12px', color:'red', opacity:'0.7'}}>입력하신 내용을 다시 확인하여 주십시오.</Typography>
                    </Box>
                }
                <Button
                    sx={{ mt:'80px',mb: "20px" }}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={onLoginHandler}
                    >
                    로그인
                </Button> 
                <Typography textAlign={"center"}>
                    신규사용자 이신가요?
                    <Typography
                        component="span"
                        fontWeight={900}
                        onClick={() => navigator('/auth/login')}
                    >
                        {" "}
                        회원가입
                    </Typography>
                </Typography>
            </Box>
            </Card>
        </Box>
    )
}