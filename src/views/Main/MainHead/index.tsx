import { Box, Grid, IconButton, Typography } from "@mui/material";

export default function MainHead() {
    
    
    return (
        <Box  sx ={{ p: '40px 120px'}}>
            <Box>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: ' center' }}>000님께서 원하는 TOP3 회사</Typography>
            </Box>
            <Box sx = {{ pt: '20px', pb: '380px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: ' center'  }}>로그인이 필요합니다.</Typography>
            </Box>
        </Box>
    )
    
}
