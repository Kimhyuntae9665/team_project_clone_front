import { Avatar, Box, Button, FormControl, IconButton, Input, Typography } from "@mui/material";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import companyStore from "src/stores/companystores/company.store";


export default function MyCompanypageHeadView() {

    const navigator = useNavigate();
    const [cookies,setCookies] = useCookies();
    const {company,setCompany,resetCompany} = companyStore();
    

    const accessToken = cookies.accessToken;

    
    const logoutHandler = () => {
        setCookies('accessToken','',{ expires: new Date(), path:'/' });
        resetCompany();
        navigator('/');
    };

    return (
        <Box sx={{ p: '40px 120px', display: 'flex' }}>
            <Box>
                <IconButton onClick={logoutHandler}>
                    <Avatar sx={{width:'120px', height:'120px'}} alt={company?.companyEmail} src={company?.companyProfile ? company.companyProfile: ''} />
                </IconButton>
            </Box>
                <Box sx={{ ml: '25px', display: 'flax', FlexDirection: 'column', justifyContent: 'center' }}>
                    <Box sx={{  alignItems: 'center' }}>
                    <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>이름:{company?.companyName} </Typography>
                    <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>전화번호:{company?.companyTelNumber}</Typography>
                    <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>업종:{company?.companyCategory}</Typography>
                    <Typography sx={{ mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>주소:{company?.companyAddress}</Typography>
                    </Box>
                </Box>
                <FormControl  variant='outlined'>
                    <Button variant="contained" onClick={()=>navigator('/')} >
                    수정
                    </Button>
                </FormControl>
                
            
            {/* <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글: </Typography>
            </Box> */}
        </Box> 
    )
}