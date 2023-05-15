import { AppBar, Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useCompanyStore } from "src/stores/companystores";
import { useUserStore } from "src/stores/userstores";

export default function NavigationBar_No_Login () {
    const navigator = useNavigate();
    
  const { user, resetUser } = useUserStore();
  const [cookies, setCookies] = useCookies();
  const {company} = useCompanyStore();

  const onUserLogoutHandler = () => {
    setCookies('accessToken', '', {expires: new Date(), path:'/'})
    resetUser();
    navigator('/');
  }

  const onCompanyLogoutHandler = () => {
    setCookies('accessToken', '', {expires: new Date(), path:'/'})
    resetUser();
    navigator('/');
  }

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
                        { user && cookies.accessToken ? (
                            company && cookies.accessToken ? (
                                <>
                                <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                    <Button variant="contained" color="secondary" onClick={onUserLogoutHandler}>
                                        로그아웃
                                    </Button>
                                </FormControl>
                                <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                    <Button variant="outlined" color="secondary" onClick={() => navigator('/myPage')}>
                                        마이페이지
                                    </Button>
                                </FormControl>
                            </>
                            ):(
                                <>
                                    <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                        <Button variant="contained" color="secondary" onClick={onCompanyLogoutHandler}>
                                            로그아웃
                                        </Button>
                                    </FormControl>
                                    <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                        <Button variant="outlined" color="secondary" onClick={() => navigator('/myCompanyPage')}>
                                            마이페이지
                                        </Button>
                                    </FormControl>  
                                </>
                            )
                        ) : (
                            <>
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
                            </>
                        )}
                    </Box >
                </Toolbar>
            </AppBar>
        </Box>
    )
}