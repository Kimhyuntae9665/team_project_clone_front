import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { GetTop3CompanyListResponseDto } from "src/apis/response/company";
import PreviewCard from "src/components/previewCard";
import { GET_TOP3_COMPANY_LIST_URL } from "src/contants/api";
import { COMPANYLISTTOP3 } from "src/mock";
import companyStore from "src/stores/companystores/companysign-up.stores";
import { useUserStore } from "src/stores/userstores";

export default function MainHead() {
    
    const [top3List, setTop3List] = useState<GetTop3CompanyListResponseDto[]>([]);

    // const { Company } = companyStore();
    const {user} = useUserStore();
    const navigator = useNavigate();

    const getTop3List = () => {
        axios.get(GET_TOP3_COMPANY_LIST_URL)
        .then((response) => getTop3ListResponseHandler(response))
        .catch((error) => getTop3ListErrorHandler(error));
    }

    const getTop3ListResponseHandler = (response: AxiosResponse<any,any>) => {
        const { result, message, data } = response.data as ResponseDto<GetTop3CompanyListResponseDto[]>;
        if ( !result || data === null) return;
        setTop3List(data);
    }
    const getTop3ListErrorHandler = (error: any) => {
        console.log(error.message);
    }
    useEffect(() => {
        // getTop3List();
        setTop3List(COMPANYLISTTOP3);
    },[])

    
    return (
        <Box  sx ={{ pb: '40px', pl: '120px', pr: '120px'}} >
            {/*로그인 전  { user ? (<> 로그인 전의 화면</>) : ( 로그인 된 화면)} */}
            {!user ? (
                <>
                    <Box  sx={{ pt: '20px', pb: '5px', textAlign: 'center' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: ' center' }}>로그인이 필요한 작업입니다!</Typography>
                    </Box>
                    <Box sx = {{ pt: '20px', pb: '50px' }}>
                        <Box sx={{ pt: '5px', pb: '200px', pr: '10px', pl:'10px', border: '3px solid black' }}>
                            <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center',flexDirection: 'column', mt:'150px'}}>
                                <Typography sx={{ fontSize: '30px', fontWeight: '500'  }}>로그인이 필요합니다.</Typography>
                                <Button variant="contained" color="secondary" size="medium" onClick={() => navigator('/auth/login')} sx={{fontSize:'20px', fontWeight:'400'}}>로그인</Button>
                            </Box>
                        </Box>
                    </Box>
                </>
            ) : (
                <Box>
                    <Typography  sx={{ fontSize: '24px', fontWeight: '400', p: '24px', textAlign: ' center' }}>{user.userName}님에게 추천하는 TOP3 회사</Typography>
                        <Grid container spacing={3}>
                        {top3List.map((item)=> (
                            <Grid item sm={12} md={4}>
                                <PreviewCard top3PreviewItem={item} />
                            </Grid>
                            ))}
                    </Grid>
                </Box>
            )}
            
            
            
        </Box>
    )
    
}
