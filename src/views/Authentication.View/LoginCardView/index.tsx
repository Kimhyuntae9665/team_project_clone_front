import { Box, Typography } from "@mui/material";

export default function LoginCardView() {
    return(
        <Box sx={{flexDirection:'column', justifyContent:'space-between', border: '1px solid black'}}>
            <Box textAlign='center' sx={{ p: '20px, 150px'}}>
                <Typography>로그인</Typography>
            </Box>
        </Box>
    )
}