import { Avatar, Box, Typography } from "@mui/material"
import companyStore from "src/stores/companystores/company.store";

export default function CompanyPageHead(){
    // Hook //

    const {company, setCompany} = companyStore();

    return(
        <Box>
        <Box sx={{display:'flex'}}>
                <Box sx={{ width:'30%', m:'50px 50px'}}>
                    <Avatar sx={{width:'150px', height:'150px',ml:'110px'}}/>
                    <Typography sx={{ml:'145px', fontSize:'30px', fontWeight:'600'}}>A회사</Typography>
                </Box>
                <Box sx={{p:'40px 40px',width:'30%'}}>
                    <Typography sx={{fontSize:'30px'}}>연락처:{company?.companyTelNumber}</Typography>
                    <Typography sx={{fontSize:'30px'}}>이메일:{company?.companyEmail}</Typography>
                    <Typography sx={{fontSize:'30px'}}>주소:{company?.companyAddress}</Typography>
                    <Typography sx={{fontSize:'30px'}}>업종:{company?.companyCategory}</Typography>
                </Box>
                <Box sx={{p:'40px 20px',width:'30%'}}>
                    <Typography sx={{fontSize:'30px'}}>평균 연봉:</Typography>
                    <Typography sx={{fontSize:'30px'}}>설립일</Typography>
                    <Typography sx={{fontSize:'30px'}}>홈페이지 주소</Typography>
                    <Typography sx={{fontSize:'30px'}}>매출액</Typography>
                </Box>
        </Box>
            <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글: </Typography>
            </Box>
        </Box>
    )
}