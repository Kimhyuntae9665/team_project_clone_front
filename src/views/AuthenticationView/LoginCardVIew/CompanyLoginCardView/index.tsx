import { VisibilityOff, Visibility } from "@mui/icons-material";
import { Box, Button, Card, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function CompanyLoginCardView(){

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loginError, setLoginError] = useState<boolean>(false);

    const onLoginHandler = () => {
        //? email 입력했는지 검증 / password 입력했는지 검증
        if (!email.trim() || !password) {
          alert("모든 값을 입력해주세요.");
          return;
        }
    }

    return(
        <Box display="flex" sx={{flexDirection:'column', justifyContent:"space-between", alignItems: 'center' }}>
            
            <Card sx={{ p: '40px', width:'600px', height: '700px', mt: '80px', mb: '80px'}}>
            <Box>
                <Typography variant="h5" fontWeight='900' textAlign="center">
                    회사 로그인
                </Typography>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>이메일</InputLabel>
                    <Input sx={{ height: '40px' }} onChange={(event) => setEmail(event.target.value)}/>
                    
                </FormControl>

                <FormControl fullWidth variant="standard" sx={{mt:'40px'}}>
                    <InputLabel>비밀번호</InputLabel>
                    <Input type="password" sx={{ height: '40px' }} onChange={(event) => setPassword(event.target.value)}/>
                    
                </FormControl>
            </Box>
            <Box>
                <Button
                    sx={{ mt:'80px',mb: "20px" }}
                    fullWidth
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={onLoginHandler}
                    >
                    로그인
                </Button> 
                <Typography textAlign={"center"}>
                    신규사용자 이신가요?
                    <Typography
                        component="span"
                        fontWeight={900}
                        
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