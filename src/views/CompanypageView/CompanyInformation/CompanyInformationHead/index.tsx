import {Avatar,Box,Button,FormControl,Typography,Grid,IconButton} from "@mui/material";
import { useRef } from "react";
import companyStore from "src/stores/companystores/company.store";

export default function CompanyInformationHaed() {
    const imageRef = useRef<HTMLInputElement | null> (null);

    const {company,setCompany,resetCompany} = companyStore();

    return (
        <Grid container  sx={{ p: '40px 120px', display: 'flex' }}>
            <Grid item xs={1.6}>
                <IconButton >
                    <Avatar sx={{width:'120px', height:'120px'}} alt={company?.companyEmail} src={company?.companyProfileUrl ? company.companyProfileUrl: ''} />
                    <input ref={imageRef} hidden type='file' accept = 'image/*' />
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ ml: '25px', display: 'flax', FlexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{  alignItems: 'center' }}>
                            <Typography sx={{fontSize: '24px', fontWeight: 500, color: 'rgba(0,0,0,0.7)'}}>회사 이름 : {company?.companyName} </Typography>
                            <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>회사 번호 : {company?.companyTelNumber}</Typography>
                            <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>회사 이메일 : {company?.companyEmail}</Typography>
                            <Typography sx={{ mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>회사 주소 : {company?.companyAddress}</Typography>
                        </Box>
                    </Box>
            </Grid>
        </Grid>
        )
}
   
