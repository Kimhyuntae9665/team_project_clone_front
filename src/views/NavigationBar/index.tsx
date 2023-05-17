import { AppBar, Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography, makeStyles, styled } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Company, User } from "src/interfaces";
import { useCompanyStore } from "src/stores/companystores";
import { useUserStore } from "src/stores/userstores";


export default function NavigationBar() {



//  Hook         //

  const navigator = useNavigate();
  const { user,setUser } = useUserStore();
  const {resetUser} = useUserStore();
  const {company,setCompany} = useCompanyStore();
  const {resetCompany} = useCompanyStore();
  const [cookies, setCookies] = useCookies();
//   쿠키 삭제가 쉽지 않네



//    Event Handler  //


const UserLogOutHandler = () =>{

    setCookies('accessToken', '', {expires: new Date(), path:'/'})
    resetUser();
    navigator('/');

}

const CompanyLogOutHandler = () =>{

    setCookies('accessToken', '', {expires: new Date(), path:'/'})
    resetCompany();
    navigator('/');

}

const PointerDiv = styled('div')({
    cursor: 'pointer',
  });

    return (
        <Box sx={{flexGrow:1}}>
            <AppBar variant="outlined" position="static" sx={{ p: '0px 80px', backgroundColor: '#ffffff' }} >
                <Toolbar>
                    
                    <Typography 
                    variant="h6" 
                    noWrap 
                    component="div" 
                    sx={{ flexGrow:1, display: {xs: 'none', sm:'block', color:'#000000'} } }
                    onClick={() => navigator('/')}>
                       <PointerDiv sx={{mr:'950px'}}>구직 사이트</PointerDiv>
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                    {user?.userAddress && cookies.accessToken ? (
                        <>
                            <FormControl variant="outlined" sx={{ mr: '10px' }}>
                            <Button variant="contained" color="secondary" onClick={UserLogOutHandler}>
                                로그아웃
                            </Button>
                            </FormControl>
                            <FormControl variant="outlined" sx={{ mr: '10px' }}>
                            <Button variant="outlined" color="secondary" onClick={() => navigator('/myPage')}>
                                마이페이지
                            </Button>
                            </FormControl>
                        </>
                        ) : company && cookies.accessToken ? (
                        <>
                            <FormControl variant="outlined" sx={{ mr: '10px' }}>
                            <Button variant="contained" color="secondary" onClick={CompanyLogOutHandler}>
                                로그아웃
                            </Button>
                            </FormControl>
                            <FormControl variant="outlined" sx={{ mr: '10px' }}>
                            <Button variant="outlined" color="secondary" onClick={() => navigator('/myCompanyPage')}>
                                회사페이지
                            </Button>
                            </FormControl>
                        </>
                        ) : (
                        <>
                            <FormControl variant="outlined" sx={{ mr: '10px' }}>
                            <Button variant="contained" color="secondary" onClick={() => navigator('/auth/login')}>
                                로그인
                            </Button>
                            </FormControl>
                            <FormControl variant="outlined" sx={{ mr: '10px' }}>
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