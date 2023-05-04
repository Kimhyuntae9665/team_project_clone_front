import { Box, Button, Card, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpStore } from "src/stores/userstores";
import ResponseDto from "src/apis/response"
import CheckIcon from '@mui/icons-material/Check';
import { ValidateUserEmailDto } from "src/apis/request/user";
import { VALIDATE_USER_EMAIL_URL } from "src/contants/api";
import axios, { AxiosResponse } from "axios";

function FirstPage(){
    
    const {userEmail, userPassword, userPasswordCheck} = useSignUpStore();
    const {setUserEmail, setUserPassword, setUserPasswordCheck} = useSignUpStore();
    const {emailPatternCheck, emailValidate, passwordPatternCheck, passwordValidate} = useSignUpStore();
    const {setEmailPatternCheck, setEmailValidate, setPasswordPatternCheck, setPasswordValidate} = useSignUpStore();

    const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;
    const passwordValidator = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?_]).{8,20}$/;

    const onEmailChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = emailValidator.test(value);
        setEmailPatternCheck(isMatched)
        setUserEmail(value);
    }

    const onEmailValidateButtonHandler = () => {
        if(!emailPatternCheck) return;
        const data: ValidateUserEmailDto = {userEmail}

        axios.post(VALIDATE_USER_EMAIL_URL, data) 
        .then((response) => validateUserEmailResponseHandler(response))
        .catch((error) => validateUserEmailResponseError(error));
    }

    const validateUserEmailResponseHandler = (response: AxiosResponse<any, any>) => {
        const {data, message, result} = response.data as ResponseDto<>;
        if(!result || !data){
            alert(message)
            return;
        }
        setEmailValidate(data.result)
    }

    return(
        <Box>
                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>이메일</InputLabel>
                    <Input sx={{ height: '40px' }} onChange={(event) => setUserEmail(event.target.value)}/>
                    
                </FormControl>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel >비밀번호</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} onChange={(event) => setUserPassword(event.target.value)}/>
                    
                </FormControl>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>비밀번호 확인</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} onChange={(event) => setUserPasswordCheck(event.target.value)}/>
                    {
                        userPassword !== userPasswordCheck ?
                        (<FormHelperText sx={{color:'red'}}>{'비밀번호가 일치하지 않습니다.'}</FormHelperText>) : (<></>)
                    }
                </FormControl>

                
            </Box>
            
    )
}

function SecondPage(){
    return (
        <Box>
            <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                <InputLabel>주소</InputLabel>
                <Input sx={{ height: '40px' }}/>
            </FormControl>

            <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                <InputLabel>상세주소</InputLabel>
                <Input sx={{ height: '40px' }}/>
            </FormControl>
            
            <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                <InputLabel>이름</InputLabel>
                <Input sx={{ height: '40px' }}/>
            </FormControl>

            <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                <InputLabel>전화번호</InputLabel>
                <Input sx={{ height: '40px' }}/>
            </FormControl>
        </Box>
    )
}

export default function UserSignUpCardView(){

    const [page, setPage] = useState<number>(1);

    const navigator = useNavigate(); 

    const onNextButtonHandler = () => {
        setPage(2);
    }

    return(
        <Box display="flex" sx={{flexDirection:'column', justifyContent:"space-between", alignItems: 'center' }}>
            
            <Card sx={{ p: '40px', width:'600px', height: '700px', mt: '80px', mb: '80px'}}>
                <Box>
                    <Box>
                    <Typography variant="h5" fontWeight='900' textAlign="center">
                        사용자 회원가입
                    </Typography>
                    <Typography variant="h5" fontWeight='900'>{page}/2</Typography>
                    </Box>
                    {page === 1 ? <FirstPage/> : <SecondPage/>}    
                </Box>
                
                <Box>
                    {page === 1 && (
                        <Button
                        sx={{ mt:'80px',mb: "20px" }}
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={onNextButtonHandler}
                        >
                        다음
                    </Button> 
                    )}
                    {page === 2 && (
                        <Button
                        sx={{ mt:'80px',mb: "20px" }}
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={onNextButtonHandler}
                        >
                        회원가입
                    </Button> 
                    )}
                </Box>
                
                <Box>

                <Typography textAlign="center">
                    이미 계정이 있으신가요?
                    <Typography
                        component="span"
                        fontWeight={900}
                        onClick={() => navigator('/auth')}
                        
                    >
                        {" "}
                        로그인
                    </Typography>
                </Typography>
            </Box>
            </Card>
        </Box>
    )
}