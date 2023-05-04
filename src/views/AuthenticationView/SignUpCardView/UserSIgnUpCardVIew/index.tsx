import { Box, Button, Card, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FirstPage(){
    
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordCheck, setPasswordCheck] = useState<String>("");

    const onSignUpHandler = () => {
        //? email 입력했는지 검증 / password 입력했는지 검증
        if (!email || !password || !passwordCheck) {
          alert("모든 값을 입력해주세요.");
          return;
        }
    }

    return(
        <Box>
                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>이메일</InputLabel>
                    <Input sx={{ height: '40px' }} onChange={(event) => setEmail(event.target.value)}/>
                    
                </FormControl>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel >비밀번호</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} onChange={(event) => setPassword(event.target.value)}/>
                    
                </FormControl>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>비밀번호 확인</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} onChange={(event) => setPasswordCheck(event.target.value)}/>
                    {
                        password !== passwordCheck ?
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