import { Avatar, Box, Button, Typography } from "@mui/material";

export default function MyPageHead() {
    return(
        <Box sx={{p:'10px'}}>
            {/* 유저 프로필 */}
                <Box sx={{ display: 'flex', alignItems: 'center', m:'50px 50px'}}>
                    <Avatar sx={{width:'150px', height:'150px'}}></Avatar>
                    <Typography sx={{fontSize:'50px', fontWeight:'400', ml:'50px'}}>OOO님</Typography>
                    <Button variant="outlined" color="error" sx={{ml:'900px', width:'100px', height:'50px'}}>로그아웃</Button>
                </Box>
        </Box>
    )
}