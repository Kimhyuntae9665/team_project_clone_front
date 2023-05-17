import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CompanypageMySussessRateNotLoggedIn(){

    const navigator = useNavigate();

    return(
        <Box sx = {{ pt: '20px', pb: '50px', ml:'50px', mr:'50px' }}>
            <Box sx={{ pt: '5px', pb: '200px', pr: '10px', pl:'10px', border: '3px solid black' }}>
                <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center',flexDirection: 'column', mt:'150px'}}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '500'  }}>로그인이 필요합니다.</Typography>
                    <Button variant="contained" color="secondary" size="medium" onClick={() => navigator('/auth/login')} sx={{fontSize:'20px', fontWeight:'400'}}>로그인</Button>
                </Box>
            </Box>
        </Box>
    )
}