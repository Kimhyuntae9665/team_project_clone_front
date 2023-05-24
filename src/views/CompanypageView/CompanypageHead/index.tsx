import { Avatar, Box, Grid, Typography } from "@mui/material"
import CompanyStore from "src/stores/companystores/company.store";

export default function CompanyPageHead(){
    // Hook //

    const {company, setCompany,resetCompany} = CompanyStore();


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
                        <Typography sx={{ fontSize: '25px' }}>연락처 : {company?.companyTelNumber}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>이메일 : {company?.companyEmail}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>주소 : {company?.companyAddress}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>업종 : {company?.companyCategory}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4} sx={{ p: '40px 10px', display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ border: '1px solid rgba(0, 0, 0, 0.2)', height: '150px', marginRight: '10px' }}></Box>
                    <Grid container direction="column">
                        <Typography sx={{ fontSize: '25px' }}>평균 연봉 : {company?.companyAnnualSales}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>회사 설립일 : {company?.companyTelNumber}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>홈페이지 주소 : {company?.companyHomePage}</Typography>
                        <Typography sx={{ fontSize: '25px' }}>회사 직원수 : {company?.companyStartingSalary}</Typography>
                    </Grid>
                </Grid>
        </Grid>
            <Box sx = {{ pt: '20px', pb: '30px', ml:'50px', mr:'50px' }}>
                <Box sx={{ pt: '10px', pr: '10px', pl:'10px', border: '2px solid rgba(0, 0, 0, 0.2)', pb:'50px' }}>
                    <Box sx={{display:'flex'}}>
                        <Typography>회사 소개글 : </Typography>
                    </Box>
                </Box>
                <Box sx={{p:'40px 40px',width:'30%'}}>
                    <Typography sx={{fontSize:'30px'}}>연락처:{company?.companyTelNumber}</Typography>
                    <Typography sx={{fontSize:'30px'}}>이메일:{company?.companyEmail}</Typography>
                    <Typography sx={{fontSize:'30px'}}>주소:{company?.companyAddress}</Typography>
                    <Typography sx={{fontSize:'30px'}}>업종:{company?.companyCategory}</Typography>
                </Box>
                <Box sx={{p:'40px 20px',width:'30%'}}>
                    <Typography sx={{fontSize:'30px'}}>초봉:{company?.companyStartingSalary}</Typography>
                    <Typography sx={{fontSize:'30px'}}>회사 소개:{company?.companyContents}</Typography>
                    <Typography sx={{fontSize:'30px'}}>홈페이지 주소:{company?.companyHomePage}</Typography>
                    <Typography sx={{fontSize:'30px'}}>매출액:{company?.companyAnnualSales}</Typography>
                </Box>
        </Box>
            <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글:{company?.companyContents}</Typography>
            </Box>
        </Box>
    )
}