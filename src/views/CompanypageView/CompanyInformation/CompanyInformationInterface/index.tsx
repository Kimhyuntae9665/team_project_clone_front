import {Box,Divider,Fab,Grid, IconButton,Input,Typography, TextField, Button} from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { error } from 'console';
import {useRef, useState} from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import ResponseDto from 'src/apis/response';
import { InsertCompanyInfoResponseDto } from 'src/apis/response/company';
import { INSERT_COMPANY_INFO, authorizationHeader } from 'src/contants/api';
import { useCompanyStore } from 'src/stores/companystores';

export default function CompanyInformationInterface() {


    // Hook  //

    const imageRef = useRef<HTMLInputElement | null>(null);
    const navigator = useNavigate();

    const {company,setCompany} = useCompanyStore();
    const [companyCategory,setCompanyCategory] = useState<string|undefined>('');
    const [companyHomePage,setCompanyHomePage] = useState<string|undefined>('');
    const [companyContents,setCompanyContents] = useState<string|undefined>('');
    const [companyEmployee,setCompanyEmployee] = useState<string|undefined>('');
    const [companyAnnualSales,setCompanyAnnualSales] = useState<string|undefined>('');
    const [companyStartingSalary,setCompanyStartingSalary] = useState<string|undefined>('');

    const [cookies] = useCookies();
    const accessToken = cookies.accessToken;


    // Event Handler //

    const SaveAdditionalCompanyInfo = () =>{

        const send_data= {companyTelNumber:company?.companyTelNumber,
                          companyHomePage,
                          companyEmployee,
                          companyAnnualSales,
                          companyStartingSalary,
                          companyCategory,
                          companyContents
                            }

        if(!companyHomePage || !companyEmployee || !companyAnnualSales || !companyStartingSalary ||  !companyCategory || !companyCategory){
            alert("정보를 모두 입력해 주세요");
            return;
        }

        console.log("여기 봐요:"+companyHomePage);
        console.log("여기 봐요:"+companyEmployee);
        console.log("여기 봐요:"+companyAnnualSales);
        console.log("여기 봐요:"+companyCategory);
        console.log("여기 봐요:"+companyContents);
        console.log("여기 봐요"+companyStartingSalary);
        console.log("여기도 : "+company?.companyTelNumber);

        axios.post(INSERT_COMPANY_INFO,send_data,authorizationHeader(accessToken))
             .then((response)=>InsertCompanyInfoResponseHandler(response))
             .catch((error)=>InsertCompanyInfoErrorHandler(error))

    }


    //  Response Handler  //

    const InsertCompanyInfoResponseHandler = (response:AxiosResponse<any,any>) =>{

        const {result,data,message} = response.data as ResponseDto<InsertCompanyInfoResponseDto>

        if(!result || !data){
            alert(message);
            return;
          }
          
          navigator("/myCompanyPage/{company.companyTelNumber}");

    }





    // Error Handler    //

    const InsertCompanyInfoErrorHandler = (error:any)=>{
        console.log(error.message);
        
    }





    

    return(
        <Box>
            <Grid container sx={{  pt:'20px', pb:'20px',pl:'100px',pr: '100px'}}>
                <Grid item sx={{p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'50px'}}>
                    <Grid item sx={{display:'flex', alignItems:'center'}}>
                        <Grid item xs={4} sx={{display:'flex', flexDirection: 'column',justifyContents:'center'}}>
                            <TextField 
                            sx={{width:'100%', '& input::placeholder': { fontSize: '10px'}}}
                            multiline
                            label="회사 홈페이지"
                            placeholder="https://www 는 제외해주.."
                            onChange={(event)=>setCompanyHomePage(event?.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex', flexDirection: 'column',justifyContents:'center'}}>
                            <TextField 
                            sx={{width:'100%' }}
                            multiline
                            label="직원 수"
                            placeholder="자유롭게 입력해주세요."
                            onChange={(event)=>setCompanyEmployee(event?.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex', flexDirection: 'column',justifyContents:'center'}}>
                            <TextField 
                            sx={{width:'100%'}}
                            multiline
                            label="연 매출"
                            placeholder="자유롭게 입력해주세요."
                            onChange={(event)=>setCompanyAnnualSales(event?.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex', flexDirection: 'column',justifyContents:'center'}}>
                            <TextField 
                            sx={{width:'100%'}}
                            multiline
                            label="초봉"
                            placeholder="자유롭게 입력해주세요."
                            onChange={(event)=>setCompanyStartingSalary(event.target.value)}
                            />
                        </Grid>
                        <Grid item xs={4} sx={{display:'flex', flexDirection: 'column',justifyContents:'center'}}>
                            <TextField 
                            sx={{width:'100%' }}
                            multiline
                            label="회사 직군"
                            placeholder="자유롭게 입력해주세요."
                            onChange={(event)=>setCompanyCategory(event.target.value)}
                            />
                        </Grid>
                    </Grid>
                        
                </Grid>
            </Grid>
            <Box sx={{  pt:'20px', pb:'20px',pl:'100px',pr: '100px'}}>
                <Box sx={{ p: '10px 10px', border:'2px solid black' }} >
                    <Box sx={{  alignItems: 'start' }} >
                        <Box sx={{display:'flex'}}>
                            <Typography sx={{fontSize: '24px', fontWeight: 500, color: 'rgba(0,0,0,0.7)'}} >회사 소개 글</Typography>
                        </Box>
                        <Box sx={{width:'100%'}}>
                            <Input fullWidth disableUnderline multiline minRows={5} placeholder='간단한 회사 소개' sx={{ fontSize: '15px', fontWeight: 500, lineHeight: '150%' }} onChange={(event)=>setCompanyContents(event.target.value)} />
                            <Box sx={{width:'100%'}} component='img'  />
                        </Box>
                    </Box>
                        <Box sx={{ display:'flex', alignItems:'center',justifyContent:'right',pr:'5px'}}>
                            <Button size='large' variant="outlined" color="secondary" onClick={SaveAdditionalCompanyInfo}>저장</Button>
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}