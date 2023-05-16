import { Box, Button, Card, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponseDto from "src/apis/response"
import axios, { AxiosResponse } from "axios";
import CheckIcon from '@mui/icons-material/Check';
import { companySignUpStore } from "src/stores/companystores";
import { ValidateCompanyEmailDto, ValidateCompanyTelNumberDto } from "src/apis/request/company";
import { VALIDATE_COMPANY_EMAIL_URL, VALIDATE_COMPANY_TEL_NUMBER_URL } from "src/contants/api";
import { ValidateCompanyEmailResponseDto, ValidateCompanytelNumberResponseDto } from "src/apis/response/company";
import { CompanySignUpDto } from "src/apis/request/auth";
import { COMPANY_SIGN_UP_URL } from "src/contants/api";


function FirstPage(){

    // Hook //
    
    const {companyEmail, companyPassword, companyPasswordCheck} = companySignUpStore();
    const {setCompanyEmail, setCompanyPassword, setCompanyPasswordCheck} = companySignUpStore();
    const {emailPatternCheck, emailValidate, passwordPatternCheck, passwordValidate} = companySignUpStore();
    const {setEmailPatternCheck, setEmailValidate, setPasswordPatternCheck, setPasswordValidate} = companySignUpStore();
    const {signUpError} = companySignUpStore();

    const emailValidator = /^[A-Za-z0-9]*@[A-Za-z0-9]([-.]?[A-Za-z0-9])*\.[A-Za-z0-9]{2,3}$/;
    const passwordValidator = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!?_]).{8,20}$/;

    //  Event Handler  //

    const onEmailChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = emailValidator.test(value);
        setEmailPatternCheck(isMatched)
        setCompanyEmail(value);
    }
    
    const onPasswordChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = passwordValidator.test(value);
        setPasswordPatternCheck(isMatched);
        setCompanyPassword(value)
    }

    const onPasswordCheckChangeHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = companyPassword === value;
        setPasswordValidate(isMatched)
        setCompanyPasswordCheck(value);
    }

    const onEmailValidateButtonHandler = () => {
        if(!emailPatternCheck) return;
        const data: ValidateCompanyEmailDto = {companyEmail}

        axios.post(VALIDATE_COMPANY_EMAIL_URL, data) 
        .then((response) => validateCompanyEmailResponseHandler(response))
        .catch((error) => validateCompanyEmailResponseError(error));
    }

    const validateCompanyEmailResponseHandler = (response: AxiosResponse<any, any>) => {
        const {data, message, result} = response.data as ResponseDto<ValidateCompanyEmailResponseDto>;
        if(!result || !data){
            alert(message)
            return;
        }
        setEmailValidate(data.result)
    }

    const validateCompanyEmailResponseError = (error: any) => {
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
                    value={companyEmail}
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
                    value={companyPassword}
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
                    value={companyPasswordCheck} 
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

    const {companyName, companyTelNumber, companyAddress, companyAddressDetail} = companySignUpStore()
    const {setCompanyName, setCompanyTelNumber, setCompanyAddress, setCompanyAddressDetail} = companySignUpStore()

    const {telNumberPatternCheck, telNumberValidate} = companySignUpStore()
    const {setTelNumberPatternCheck, setTelNumberValidate} = companySignUpStore()
    const {signUpError} = companySignUpStore()

    const onTelNumberHandler = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const value = event.target.value;
        const isMatched = telNumberVaildator.test(value);
        setTelNumberPatternCheck(isMatched)
        setCompanyTelNumber(value);
    }

    const onTelNumberValidateButtonHandler = () => {
        if(!telNumberPatternCheck) return;
        const data: ValidateCompanyTelNumberDto = {companyTelNumber};

        axios.post(VALIDATE_COMPANY_TEL_NUMBER_URL, data) 
        .then((response) => validateCompanyTelNumberResponseHandler(response))
        .catch((error) => validateCompanyTelNumberErrorHandler(error))
    }

    const validateCompanyTelNumberResponseHandler = (response: AxiosResponse<any, any>) => {
        const {result, data, message} = response.data as ResponseDto<ValidateCompanytelNumberResponseDto>
        if(!result || !data) {
            alert(message);
            return;
        }
        setTelNumberValidate(data.result);
    }   

    const validateCompanyTelNumberErrorHandler = (error: any) => {
        console.log(error.message)
    }

    const telNumberVaildator = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}$/;

    return (
        <Box>
            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>회사 주소</InputLabel>
                <Input type="text" sx={{ height: '40px' }}
                value={companyAddress}
                onChange={(event) => setCompanyAddress(event.target.value)}
                />
            </FormControl>
            
            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>회사 명</InputLabel>
                <Input type="text" sx={{ height: '40px' }} 
                value={companyName}
                onChange={(event) => setCompanyName(event.target.value)}
                />
            </FormControl>


            <FormControl fullWidth error={signUpError} variant="standard" sx={{mt:'40px'}}>
                <InputLabel>회사 번호</InputLabel>
                <Input type="text" sx={{ height: '40px' }} endAdornment={
                    <InputAdornment position="end">
                        <IconButton onClick={() => onTelNumberValidateButtonHandler()}>
                            <CheckIcon/>
                        </IconButton>
                    </InputAdornment>
                }
                value={companyTelNumber}
                onChange={(event) => onTelNumberHandler(event)}
                />
                {
                    telNumberPatternCheck === null ? (<></>) :
                    !telNumberPatternCheck ? (<FormHelperText sx={{ color: 'red' }}>회사 번호 패턴이 일치하지 않습니다.</FormHelperText>) :
                    telNumberValidate === null ? (<FormHelperText sx={{ color: 'orange' }}>회사 번호 중복 체크를 해주세요.</FormHelperText>) :
                    telNumberValidate ? (<FormHelperText sx={{ color: 'green' }}>사용 가능한 회사 번호입니다.</FormHelperText>) :
                    (<FormHelperText sx={{ color: 'red' }}>사용중인 회사 번호입니다.</FormHelperText>)
                }
            </FormControl>
        </Box>
    )
}

export default function CompanySignUpCardView(){

    //  Hook //
    
    const {companyName, companyTelNumber, companyAddress, } = companySignUpStore()
    const {companyEmail, companyPassword, companyPasswordCheck} = companySignUpStore();
    const {emailPatternCheck, emailValidate, passwordPatternCheck, passwordValidate} = companySignUpStore();
    const {setSignUpError} = companySignUpStore();

    const [page, setPage] = useState<number>(1);

    const navigator = useNavigate(); 
    //  Event Handler //

    const Deliver_Company_Info_To_Server = (data : CompanySignUpDto) =>{

        axios.post(COMPANY_SIGN_UP_URL,data)
                .then((response)=>Company_Sign_Up_ResponseHandler(response))
                .then((error)=>Company_Sign_Up_Error_Handler(error))

    }

    const onNextButtonHandler = () => {
        if(!companyEmail || !companyPassword || !companyPasswordCheck){
            setSignUpError(true)
            return
        }
        if(!emailPatternCheck || !passwordPatternCheck) return;
        if(!passwordValidate) return;
        if(!emailValidate) return;
        

        setSignUpError(false)
        setPage(2);
    }

    const onSignUphandler = () => {
        if(!companyEmail || !companyPassword || !companyPasswordCheck){
            setSignUpError(true)
            setPage(1)
            return
        }
        if(!companyName || !companyAddress || !companyTelNumber) {
            setSignUpError(true)
            setPage(2)
            return;
        }

        if(!emailPatternCheck || !passwordPatternCheck){
            setPage(1)
            return;
        } 
        // if(!passwordValidate || !emailValidate){
        //     setPage(1)
        //     return
        // } 


        setSignUpError(false)

        const data: CompanySignUpDto = {
            companyEmail, companyPassword, companyName, companyTelNumber, companyAddress
        }

        Deliver_Company_Info_To_Server(data);
    
        
    } 

    //  Response Handler  //
    const Company_Sign_Up_ResponseHandler = (response:AxiosResponse<any,any>)=>{
        const {result,message,data} = response.data as ResponseDto<CompanySignUpDto>;

        if(!result || !data){
            alert(message);
            return;
          }

          navigator('/auth/login')

    }

    //  Error Handler   //
    const Company_Sign_Up_Error_Handler = (error:any) =>{
        console.log(error.message);
    }

    return(
        <Box display="flex" sx={{flexDirection:'column', justifyContent:"space-between", alignItems: 'center' }}>
            
            <Card sx={{ p: '40px', width:'600px', height: '700px', mt: '80px', mb: '80px'}}>
                <Box>
                    <Box>
                    <Typography variant="h5" fontWeight='900' textAlign="center">
                        회사 회원가입
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
                        sx={{ mt:'40px',mb: "20px" }}
                        fullWidth
                        variant="contained"
                        color="secondary"
                        size="large"
                        onClick={onSignUphandler}
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
                        onClick={() => navigator('/auth/login')}
                        
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