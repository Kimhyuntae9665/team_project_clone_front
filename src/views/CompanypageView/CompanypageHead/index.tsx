import { Avatar, Box, Grid, Typography } from "@mui/material"

export default function CompanyPageHead(){
    

    return(
        <Box>
        <Grid container sx={{ justifyContent: 'center' }}>
                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Avatar sx={{width:'150px', height:'150px'}}/>
                    <Typography sx={{textAlign:'center', fontSize:'30px', fontWeight:'600'}}>A회사</Typography>
                </Grid>
                <Grid item xs={4} sx={{ p: '40px 40px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', height: '150px', marginRight: '10px' }}></Box>
                    <Grid container direction="column">
                        <Typography sx={{ fontSize: '25px' }}>연락처</Typography>
                        <Typography sx={{ fontSize: '25px' }}>이메일</Typography>
                        <Typography sx={{ fontSize: '25px' }}>주소</Typography>
                        <Typography sx={{ fontSize: '25px' }}>업종</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4} sx={{ p: '40px 10px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', height: '150px', marginRight: '10px' }}></Box>
                    <Grid container direction="column">
                        <Typography sx={{ fontSize: '25px' }}>평균 연봉</Typography>
                        <Typography sx={{ fontSize: '25px' }}>회사 설립일</Typography>
                        <Typography sx={{ fontSize: '25px' }}>홈페이지 주소</Typography>
                        <Typography sx={{ fontSize: '25px' }}>회사 매출액</Typography>
                    </Grid>
                </Grid>
        </Grid>
            <Box sx = {{ pt: '20px', pb: '30px', ml:'50px', mr:'50px' }}>
                <Box sx={{ pt: '10px', pr: '10px', pl:'10px', border: '2px solid rgba(0, 0, 0, 0.2)', pb:'50px' }}>
                    <Box sx={{display:'flex'}}>
                        <Typography>회사 소개글 : </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}