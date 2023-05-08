import { AppBar, Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NavigationBar () {
    const navigator = useNavigate();
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar variant="outlined" position="static" sx={{ p: '0px 100px', backgroundColor: '#ffffff' }} >
                <Toolbar>
                    
                    <Typography 
                    variant="h6" 
                    noWrap 
                    component="div" 
                    sx={{ flexGrow:1, display: {xs: 'none', sm:'block', color:'#000000'} } }
                    onClick={() => navigator('/')} >
                        구직 사이트
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <FormControl variant='outlined' sx={{ mr: '10px' }}>
                            <Button variant="contained" color="secondary" onClick={() => navigator('/auth/login')}>
                                로그인
                            </Button>
                        </FormControl>
                        <FormControl variant='outlined' sx={{ mr: '10px' }}>
                            <Button variant="outlined" color="secondary" onClick={() => navigator('/auth/signup')}>
                                회원가입
                            </Button>
                        </FormControl>
                    </Box >
                </Toolbar>
            </AppBar>
        </Box>
    )
}