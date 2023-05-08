import { Box, Button, Card, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUpStore } from "src/stores/userstores";
import ResponseDto from "src/apis/response"
import { ValidateUserEmailDto, ValidateUserTelNumberDto } from "src/apis/request/user";
import { VALIDATE_USER_EMAIL_URL, VALIDATE_USER_TEL_NUMBER_URL } from "src/contants/api";
import axios, { AxiosResponse } from "axios";
import CheckIcon from '@mui/icons-material/Check';
import { ValidateUserEmailResponseDto, ValidateUserTelNumberResponseDto } from "src/apis/response/user";

function FirstPage(){
    
    const {userEmail, userPassword, userPasswordCheck} = useSignUpStore();
    const {setUserEmail, setUserPassword, setUserPasswordCheck} = useSignUpStore();
    const {emailPatternCheck, emailValidate, passwordPatternCheck, passwordValidate} = useSignUpStore();
    const {setEmailPatternCheck, setEmailValidate, setPasswordPatternCheck, setPasswordValidate} = useSignUpStore();
    const {signUpError} = useSignUpStore();

    const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;
    const passwordValidator = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?_]).{8,20}$/;

    const onEmailChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        console.log(value);
        const isMatched = emailValidator.test(value);
        setEmailPatternCheck(isMatched)
        setUserEmail(value);
    }
    
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = passwordValidator.test(value);
        setPasswordPatternCheck(isMatched);
        setUserPassword(value)
    }

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = userPassword === value;
        setPasswordValidate(isMatched)
        setUserPasswordCheck(value);
    }

    const onEmailValidateButtonHandler = () => {
        if(!emailPatternCheck) return;
        const data: ValidateUserEmailDto = {userEmail}

        axios.post(VALIDATE_USER_EMAIL_URL, data) 
        .then((response) => validateUserEmailResponseHandler(response))
        .catch((error) => validateUserEmailResponseError(error));
    }

    const validateUserEmailResponseHandler = (response: AxiosResponse<any, any>) => {
        const {data, message, result} = response.data as ResponseDto<ValidateUserEmailResponseDto>;
        if(!result || !data){
            alert(message)
            return;
        }
        setEmailValidate(data.result)
    }

    const validateUserEmailResponseError = (error: any) => {
        console.log(error.message);
    }

    return(
        <Box>
                <FormControl fullWidth variant="standard" error={signUpError} sx={{mt:'40px'}}>
                    <InputLabel>이메일</InputLabel>
                    <Input type="text" sx={{ height: '40px' }} endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={() => onEmailValidateButtonHandler()}>
                                <CheckIcon/>    
                            </IconButton>
                        </InputAdornment>
                    }
                    value={userEmail}
                    onChange={(event) => onEmailChangeHandler(event)}/>
                    {
                        emailPatternCheck === null ? (<></>) :
                        !emailPatternCheck ? (<FormHelperText sx={{color:'red'}}>이메일 형식이 올바르지 않습니다.</FormHelperText>) :
                        emailValidate === null ? (<FormHelperText sx={{color:'orange'}}>이메일 중복체크를 해주세요.</FormHelperText>) :
                        !emailValidate ? (<FormHelperText sx={{color:'red'}}>사용할 수 없는 이메일입니다.</FormHelperText>) :
                                        (<FormHelperText sx={{color:'green'}}>사용 가능한 이메일입니다.</FormHelperText>)
                    }
                    
                </FormControl>

                <FormControl error={signUpError} fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel >비밀번호</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} 
                    value={userPassword}
                    onChange={(event) => onPasswordChangeHandler(event)}/>
                    {
                        passwordPatternCheck === false ? 
                        (<FormHelperText sx={{color: 'red'}}>{'영대문자 + 영소문자 + 숫자 + 특수문자(!?_)를 포함한 8-20자를 입력해주세요.'}</FormHelperText>) : 
                        (<></>)
                    }
                </FormControl>

                <FormControl error={signUpError} fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>비밀번호 확인</InputLabel>
                    <Input type="password" sx={{ height: '40px' }}
                    value={userPasswordCheck} 
                    onChange={(event) => onPasswordCheckChangeHandler(event)}/>
                    { 
                    passwordValidate === false ?
                    (<FormHelperText sx={{color: 'red'}}>{'비밀번호가 일치하지 않습니다.'}</FormHelperText>) : 
                    (<></>)
                    }
                </FormControl>

                
            </Box>
            
    )
}

function SecondPage(){

    const {userName, userTelNumber, userAddress, userAddressDetail} = useSignUpStore()
    const {setUserName, setUserTelNumber, setUserAddress, setUserAddressDetail} = useSignUpStore()

    const {telNumberPatternCheck, telNumberValidate} = useSignUpStore()
    const {setTelNumberPatternCheck, setTelNumberValidate} = useSignUpStore()
    const {signUpError} = useSignUpStore()

    const onTelNumberHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = telNumberVaildator.test(value);
        setTelNumberPatternCheck(isMatched)
        setUserTelNumber(value);
    }

    const onTelNumberValidateButtonHandler = () => {
        if(!telNumberPatternCheck) return;
        const data: ValidateUserTelNumberDto = {userTelNumber};

        axios.post(VALIDATE_USER_TEL_NUMBER_URL, data) 
        .then((response) => validateUserTelNumberResponseHandler(response))
        .catch((error) => validateUserTelNumberErrorHandler(error))
    }

    const validateUserTelNumberResponseHandler = (response: AxiosResponse<any, any>) => {
        const {result, data, message} = response.data as ResponseDto<ValidateUserTelNumberResponseDto>
        if(!result || !data) {
            alert(message);
            return;
        }
        setTelNumberValidate(data.result);
    }   

    const validateUserTelNumberErrorHandler = (error: any) => {
        console.log(error.message)
    }

    const telNumberVaildator = /^[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}$/;

    return (
        <Box>
            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>주소</InputLabel>
                <Input sx={{ height: '40px' }}
                value={userAddress}
                
                />
            </FormControl>

            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>상세주소</InputLabel>
                <Input sx={{ height: '40px' }}
                value={userAddressDetail}
                />
            </FormControl>
            
            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>이름</InputLabel>
                <Input sx={{ height: '40px' }} 
                value={userName}
                />
            </FormControl>

            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>전화번호</InputLabel>
                <Input sx={{ height: '40px' }} endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={() => onTelNumberValidateButtonHandler()}>
                            <CheckIcon/>
                        </IconButton>
                    </InputAdornment>
                }
                value={userTelNumber}
                onChange={(event) => onTelNumberHandler(event)}
                />
                {
                    telNumberPatternCheck === null ? (<></>) :
                    !telNumberPatternCheck ? (<FormHelperText sx={{ color: 'red' }}>전화번호 패턴이 일치하지 않습니다.</FormHelperText>) :
                    telNumberValidate === null ? (<FormHelperText sx={{ color: 'orange' }}>전화번호 중복 체크를 해주세요.</FormHelperText>) :
                    telNumberValidate ? (<FormHelperText sx={{ color: 'green' }}>사용 가능한 전화번호입니다.</FormHelperText>) :
                    (<FormHelperText sx={{ color: 'red' }}>사용중인 전화번호입니다.</FormHelperText>)
                }
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