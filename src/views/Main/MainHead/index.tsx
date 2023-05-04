import { Box, Grid, IconButton, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GetTop3ListResponseDto } from "src/apis/response/company";
import ResponsDto from "src/apis/response/user";
import PreviewCard from "src/components/previewCard";
import { GET_TOP3_LIST_USRL } from "src/contants/api";

export default function MainHead() {
    
    const [top3Lost, setTop3List] = useState<GetTop3ListResponseDto[]>([]);
    const navigator = useNavigate();

    const getTop3List = () => {
        axios.get(GET_TOP3_LIST_USRL)
        .then((response) => getTop3ListResponseHandler(response))
        .catch((error) => getTop3ListErrorHandler(error));
    }

    const getTop3ListResponseHandler = (response: AxiosResponse<any,any>) => {
        const { result, message, data } = response.data as ResponsDto<GetTop3ListResponseDto[]>;
        if ( !result || data === null) return;
        setTop3List(data);
    }
    const getTop3ListErrorHandler = (error: any) => {
        console.log(error.message);
    }
    useEffect(() => {
        getTop3List();
    },[])

    
    return (
        <Box  sx ={{ pb: '40px', pl: '120px', pr: '120px'}} >
            {/*로그인 전 */}
            <Box  sx={{ pt: '20px', pb: '5px', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: ' center' }}>000님께서 원하는 TOP3 회사</Typography>
            </Box>
            <Box sx = {{ pt: '20px', pb: '50px' }}>
                <Box sx={{ pt: '5px', pb: '350px', pr: '10px', pl:'10px', border: '3px solid black' }}>
                    <Box sx={{display:'flex', justifyContent: 'center', alignItems:'center',flexDirection: 'column', mt:'20px'}}>
                        <Typography sx={{ fontSize: '24px', fontWeight: '500'  }}>로그인이 필요합니다.</Typography>
                        <IconButton onClick={() => navigator('/authL')}>로그인</IconButton>
                    </Box>
                </Box>
            </Box>
            {/*로그인 후 */}
            <Box>
                <Typography  sx={{ fontSize: '24px', fontWeight: '400', p: '24px', textAlign: ' center' }}>TOP3 회사</Typography>
                    <Grid container spacing={3}>
                    {top3Lost.map((item)=> (
                        <Grid item sm={12} md={4}>
                            <PreviewCard previewItem={item} />
                        </Grid>
                        ))}
                </Grid>
            </Box>
        </Box>
    )
    
}
