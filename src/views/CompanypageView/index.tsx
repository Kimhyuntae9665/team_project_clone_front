import { Avatar, Box, Checkbox, Grid, Typography } from "@mui/material";

export default function CompanyPage(){
    return(
        <Box sx={{p:'10px'}}>
            {/* 회사 프로필 */}
            <Box sx={{display:'flex'}}>
                <Box sx={{ width:'30%', m:'50px 50px'}}>
                    <Avatar sx={{width:'150px', height:'150px',ml:'110px'}}/>
                    <Typography sx={{textAlign:'center', fontSize:'30px', fontWeight:'600'}}>A회사</Typography>
                </Box>
                <Box sx={{p:'40px 40px',width:'30%'}}>
                    <Typography sx={{fontSize:'30px'}}>연락처</Typography>
                    <Typography sx={{fontSize:'30px'}}>이메일</Typography>
                    <Typography sx={{fontSize:'30px'}}>주소</Typography>
                    <Typography sx={{fontSize:'30px'}}>업종</Typography>
                </Box>
                <Box sx={{p:'40px 20px',width:'30%'}}>
                    <Typography sx={{fontSize:'30px'}}>평균 연봉</Typography>
                    <Typography sx={{fontSize:'30px'}}>설립일</Typography>
                    <Typography sx={{fontSize:'30px'}}>홈페이지 주소</Typography>
                    <Typography sx={{fontSize:'30px'}}>매출액</Typography>
                </Box>
            </Box>
            {/* 내 합격률 */}
            <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글: </Typography>
            </Box>
            <Grid container sx={{mt:'50px', border:'2px solid black'}}>
                <Grid item xs={6} sx={{p:'10px 20px 20px 20px'}}>
                    <Typography sx={{fontSize:'30px', fontWeight:'400'}}>내 합격률</Typography>
                </Grid>
                <Grid item xs={6} sx={{p:'30px 30px'}}>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}
