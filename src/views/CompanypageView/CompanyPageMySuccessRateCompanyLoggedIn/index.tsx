import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CompanyPageMySuccessRateCompanyLoggedIn(){

    const navigator = useNavigate();

    return(
        <Box sx = {{ pt: '20px', pb: '50px', ml:'50px', mr:'50px' }}>
            <Box sx={{ pt: '5px', pb: '200px', pr: '10px', pl:'10px', border: '3px solid black' }}>
                <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center',flexDirection: 'column', mt:'150px'}}>
                    <Typography sx={{ fontSize: '30px', fontWeight: '500'  }}>회사 계정은 해당 기능을 지원하지 않습니다!</Typography>
                    <Button variant="contained" color="secondary" size="medium" onClick={() => navigator('/')} sx={{fontSize:'20px', fontWeight:'400'}}>홈으로 돌아가기</Button>
                </Box>
            </Box>
        </Box>
    )
}