import { AppBar, Box, Button, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Company, User } from "src/interfaces";
import { useCompanyStore } from "src/stores/companystores";
import { useUserStore } from "src/stores/userstores";


export default function NavigationBar() {



//  Hook         //

  const navigator = useNavigate();
  const { user,setUser } = useUserStore();
  const {company,setCompany} = useCompanyStore();
  const [cookies, setCookies] = useCookies();
//   쿠키 삭제가 쉽지 않네



//    Event Handler  //


const UserLogOutHandler = () =>{

    setUser({} as User);   

    console.log("User는 : "+user?.userEmail)
    
    navigator('/auth/login');

}

const CompanyLogOutHandler = () =>{

    setCompany({} as Company);

    navigator('/auth/login');
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
                                                {user?.userAddress && cookies.accessToken ? (
                            <>
                                <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                <Button variant="contained" color="secondary" onClick = {UserLogOutHandler}>
                                    로그아웃
                                </Button>
                                </FormControl>
                                <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                <Button variant="outlined" color="secondary" onClick={() => navigator('/myPage')}>
                                    마이페이지
                                </Button>
                                </FormControl>
                                
                            </>
                            ) : (company && cookies.accessToken ? (
                                // "company"가 로그인한 경우 추가된 내용
                            <>    
                                <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                    <Button variant="outlined" color="secondary" onClick={CompanyLogOutHandler}>
                                    로그아웃
                                    </Button>
                                </FormControl>
                                <FormControl variant='outlined' sx={{ mr: '10px' }}>
                                <Button variant="outlined" color="secondary" onClick={() => navigator(`/myCompanyPage/${company?.companyTelNumber}`)}>
                                    회사페이지
                                </Button>
                                </FormControl>
                            </>    
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
                        ))}
                    </Box >
                </Toolbar>
            </AppBar>
        </Box>
    )
}