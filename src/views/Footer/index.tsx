import { Box, IconButton, Typography } from "@mui/material";

export default function Footer() {
    return (
    <Box sx={{ p: '30px 120px 40px 120px', backgroundColor: '#373737' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Typography  sx={{ fontSize: '20px', fontWeight: 400, color: '#ffffff' }} > 구직사이트</Typography>
            </Box>
            <Box>
              <Typography component = 'span' sx={{ fontSize: '12px', fontWeight: 400, color: '#ffffff' }}>우리 이름</Typography>
              <IconButton></IconButton>
            </Box>
        </Box>
        <Typography sx={{ fontSize: '12px', fontWeight: 400, color: '#ffffff' }}>Copyright @ 2022 jukoyakki. All Rights Reserved.</Typography>
    </Box>
    )
}