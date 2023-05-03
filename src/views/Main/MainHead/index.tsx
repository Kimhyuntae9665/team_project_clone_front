import { Box, Grid, IconButton, Typography } from "@mui/material";

export default function MainHead() {
    
    
    return (
        <Box  sx ={{ pb: '40px', pl: '120px', pr: '120px'}} >
            {/*로그인 전 */}
            <Box  sx={{ pt: '20px', pb: '5px', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: ' center' }}>000님께서 원하는 TOP3 회사</Typography>
            </Box>
            <Box sx = {{ pt: '20px', pb: '50px' }}>
                <Box sx={{ pt: '5px', pb: '350px', pr: '10px', pl:'10px', border: '3px solid black' }}>
                    <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center',flexDirection: 'column'}}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '500'  }}>로그인이 필요합니다.</Typography>
                        <  IconButton>로그인</IconButton>
                    </Box>
                </Box>
            </Box>
            {/*로그인 후 */}
        </Box>
    )
    
}
