import { Avatar, Box, Button, FormControl, Grid, IconButton, Input, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { ChangeEvent, useEffect ,useRef } from "react";
import { useCookies } from "react-cookie";
import { useNavigate, useParams } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { CompanyInfoPatchResponseDto, PatchCompanyProfileResponseDto } from "src/apis/response/company";
import { FILE_COMPANY_UPLOAD_URL, PATCH_COMPANY_PROFILE, authorizationHeader, mutipartHeadler } from "src/contants/api";
import companyStore from "src/stores/companystores/company.store";
import CompanyInformationMain from "../../CompanyInformation";


export default function MyCompanypageHeadView() {

    // Hook //

    const navigator = useNavigate();
    const imageRef = useRef<HTMLInputElement | null> (null);

    const [cookies,setCookies] = useCookies();
    const {company,setCompany,resetCompany} = companyStore();
    const { phoneNumber } = useParams();
    

    const accessToken = cookies.accessToken;

    // Event Handler //

    // const PatchCompanyProfileUrl = () =>{
    //     const sendData = {};
    //     axios.patch(PATCH_COMPANY_PROFILE,sendData,accessToken())
    //             .then((response)=>PatchCompanyProfileUrlResponseHandler(response))
    //             .catch((error)=>CompanyIndoPatchErrorHander(error))
    // }

    const onProfileUploadButtonHandler = () => {
        if (!imageRef.current) return;
        imageRef.current.click();
    }

    const onProfileUploadChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const data = new FormData();
        data.append('file', event.target.files[0]);
        axios.post(FILE_COMPANY_UPLOAD_URL, data, mutipartHeadler())
            .then((response) => imageUploadResponseHandler(response))
            .catch((error) => imageUploadErrorHandler(error));
    }


    // Response Handler //

    // const PatchCompanyProfileUrlResponseHandler = (response:AxiosResponse<any,any>)=>{

    //     const {result,data,message} = response.data as ResponseDto<CompanyInfoPatchResponseDto>
    //     if(!result || !data){
    //         alert(message);
    //         return;
    //       }
    //     navigator('/myCompanyPage');
    // }

    const imageUploadResponseHandler = (response: AxiosResponse<any,any>) => {
        const companyProfileUrl = response.data as string;
        const data = { companyProfileUrl };

        axios.patch(PATCH_COMPANY_PROFILE,data , authorizationHeader(accessToken))
            .then((response) => patchProfileResponseHandler(response))
            .catch((error) => patchProfileErrorHandler(error));
    }

    const patchProfileResponseHandler = (response: AxiosResponse<any,any>) => {
        const { result,message,data } = response.data as ResponseDto<PatchCompanyProfileResponseDto>;
        if(!result || !data) {
            alert(message);
            return;
        }
        setCompany(data);
    }

    // Error Handler //

    // const CompanyIndoPatchErrorHander = (error:any)=>{
    //     console.log(error.message);
    // }

    const imageUploadErrorHandler = (error:any) => {
        console.log(error.message);
    }

    const patchProfileErrorHandler = (error:any) => {
        console.log(error.message);
    }

     //          Use Effect          //
     useEffect(() => {
        if (!accessToken) {
            navigator('/auth');
            return;
        }
    },[])


    return (
        <Grid container  sx={{ p: '40px 120px', display: 'flex' }}>
            <Grid item xs={1.6}>
                <IconButton onClick={() => onProfileUploadButtonHandler()}>
                    <Avatar sx={{width:'120px', height:'120px'}} alt={company?.companyEmail} src={company?.companyProfileUrl ? company.companyProfileUrl: ''} />
                    <input ref={imageRef} hidden type='file' accept = 'image/*' onChange={(event) => onProfileUploadChangeHandler(event)}/>
                </IconButton>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{ ml: '25px', display: 'flax', FlexDirection: 'column', justifyContent: 'center' }}>
                        <Box sx={{  alignItems: 'center' }}>
                            <Typography sx={{fontSize: '24px', fontWeight: 500, color: 'rgba(0,0,0,0.7)'}}>회사 이름 : {company?.companyName} </Typography>
                            <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>회사 번호 : {company?.companyTelNumber}</Typography>
                            <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>회사 이메일 : {company?.companyEmail}</Typography>
                            <Typography sx={{mt: '10px', fontSize: '16px', fontWeight: 500, color: 'rgba(0,0,0,0.4)' }}>회사 주소 : {company?.companyAddress}</Typography>
                        </Box>
                    </Box>
            </Grid>
            <Grid item xs={2}>
                <FormControl  variant='outlined'>
                    <Button variant="contained" color="secondary"  sx={{mt:'25px',width:'120px', height:'100px', mb:'30px'}}onClick = {()=>navigator('/myCompanyPage/CompanyInformation')}>
                        <Typography sx={{fontSize:'20px', fontWeight:'400'}} >회사정보 수정</Typography>
                    </Button>
                </FormControl>
            </Grid>
                    
                
                
            
            {/* <Box sx={{m:'10px 10px'}}>
                <Typography sx={{fontSize:'20px'}}>회사 소개글: </Typography>
            </Box> */}
        </Grid> 
    )
}