import { Avatar, Box, Input, Typography } from "@mui/material";

export default function MyCompanypageHeadView() {
    return (
        <Box>
        <Box sx={{display:'flex'}}>
                <Box sx={{ width:'30%', m:'50px 50px'}}>
                    <Avatar sx={{width:'150px', height:'150px',ml:'110px'}}/>
                    <Typography sx={{ml:'145px', fontSize:'30px', fontWeight:'600'}}>A회사</Typography>
                </Box>
                <Box sx={{pt:'80px',width:'30%'}}>
                    <Typography sx={{fontSize:'20px'}}>연락처: <Input placeholder="연락처를 입력하세요" /> </Typography>
                    <Typography sx={{fontSize:'20px'}}>이메일: <Input placeholder="이메일를 입력하세요" /></Typography>
                    <Typography sx={{fontSize:'20px'}}>주소: <Input placeholder="주소를 입력하세요" /></Typography>
                    <Typography sx={{fontSize:'20px'}}>업종 :<Input placeholder="업종를 입력하세요" /></Typography>
                </Box>
                <Box sx={{pt:'80px',width:'30%'}}>
                    <Typography sx={{fontSize:'20px'}}>평균 연봉: <Input placeholder="평균 연봉를 입력하세요" /></Typography>
                    <Typography sx={{fontSize:'20px'}}>설립일: <Input placeholder="설립일를 입력하세요" /></Typography>
                    <Typography sx={{fontSize:'20px'}}>홈페이지 주소: <Input placeholder="주소를 입력하세요" /></Typography>
                    <Typography sx={{fontSize:'20px'}}>매출액: <Input placeholder="매출액를 입력하세요" /></Typography>
                </Box>
        </Box>
            <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글: </Typography>
            </Box>
        </Box> 
    )
}