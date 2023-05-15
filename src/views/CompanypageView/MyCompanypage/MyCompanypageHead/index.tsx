import { Avatar, Box, Button, FormControl, Grid, IconButton, Input, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { CompanyInfoPatchResponseDto } from "src/apis/response/company";
import { PARCH_COMPANY_PROFILE } from "src/contants/api";
import companyStore from "src/stores/companystores/company.store";


export default function MyCompanypageHeadView() {

    // Hook //

    const navigator = useNavigate();
    const [cookies,setCookies] = useCookies();
    const {company,setCompany,resetCompany} = companyStore();
    const { phoneNumber } = useParams();
    

    const accessToken = cookies.accessToken;

    // Event Handler //

    const CompanyInfoPatch = () =>{
        const sendData = {};
        axios.post(PARCH_COMPANY_PROFILE,sendData,accessToken())
                .then((response)=>CompanyInfoPatchResponseHandler(response))
                .catch((error)=>CompanyIndoPatchErrorHander(error))

    }

    
    const logoutHandler = () => {
        setCookies('accessToken','',{ expires: new Date(), path:'/' });
        resetCompany();
        navigator('/');
    };


    // Response Handler //

    const CompanyInfoPatchResponseHandler = (response:AxiosResponse<any,any>)=>{

        const {result,data,message} = response.data as ResponseDto<CompanyInfoPatchResponseDto>
        if(!result || !data){
            alert(message);
            return;
          }
        navigator('/myCompanyPage');


    }



    // Error Handler //

    const CompanyIndoPatchErrorHander = (error:any)=>{
        console.log(error.message);
    }


    return (
        <Grid container  sx={{ p: '40px 120px', display: 'flex' }}>
            <Grid item xs={2}>
                <IconButton onClick={logoutHandler}>
                    <Avatar sx={{width:'120px', height:'120px'}} alt={company?.companyEmail} src={company?.companyProfileUrl ? company.companyProfileUrl: ''} />
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ ml: '25px', display: 'flax', FlexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{  alignItems: 'center' }}>
                        <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>이름:{company?.companyName} </Typography>
                        <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>전화번호:{company?.companyTelNumber}</Typography>
                        <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>업종:{company?.companyCategory}</Typography>
                        <Typography sx={{ mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>주소:{company?.companyAddress}</Typography>
                        </Box>
                    </Box>
            </Grid>
            <Grid item xs={2}>
                <FormControl  variant='outlined'>
                    <Button variant="contained" color="secondary" onClick={CompanyInfoPatch} sx={{mt:'34px',width:'100px', height:'70px'}}>
                        <Typography sx={{fontSize:'25px', fontWeight:'500'}}>회사정보 수정</Typography>
                    </Button>
                </FormControl>
            </Grid>
                    
                
                
            
            {/* <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글: </Typography>
            </Box> */}
        </Grid> 
    )
}