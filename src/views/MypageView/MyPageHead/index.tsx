import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { PatchUserComponentResponseDto } from "src/apis/response/user";
import { GET_MY_SCORE, authorizationHeader } from "src/contants/api";
import useCompanyPagingHook from "src/hooks/paging.hook";
import { useUserStore } from "src/stores/userstores";

export default function MyPageHead() {

    const { viewList,pageNumber, companyList,setCompanyList,onPageHandler,COUNT } = useCompanyPagingHook(1);
    const {user,setUser} = useUserStore();

    const getMyScore = (accessToken:string) => {
        axios.get(GET_MY_SCORE,authorizationHeader(accessToken))
            .then((response)=>getMyScoresResponseHandler(response))
            .catch((error)=>getMyScoreErrorHandler(error))
    };

    const getMyScoresResponseHandler = (response:AxiosResponse<any,any>) => {
        const {result,message,data} = response.data as ResponseDto<PatchUserComponentResponseDto[]>
        if (!result || data === null) return;
       
    }

    const getMyScoreErrorHandler = (error:any) => {
        console.log(error.message);
    }

    return(
        
        <Box sx={{p:'5px'}}>
            {/* 유저 프로필 */}
                <Box sx={{ display: 'flex', alignItems: 'center', m:'15px 15px',p:'10px'}}>
                    <Avatar sx={{width:'150px', height:'150px'}}></Avatar>
                    <Box>
                        <Typography sx={{fontSize:'30px', fontWeight:'400', ml:'50px'}}>OOO님{user?.userName}</Typography>
                        <Typography sx={{fontSize:'20px', fontWeight:'400', ml:'50px'}}>OOO님{user?.userTelNumber}</Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', m:'50px 50px',width:'1000px',height:'150px'}}>
                    <Grid container sx={{p:'20px 20px'}}>
                        <Grid item sx={{display:'flex', alignItems:'center',justifyContent:'center' ,p:'20px', pb:'100px',width:'100%',  border:'2px solid black'}}>
                            <Grid item xs={6} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                <Typography>내 점수</Typography>

                            </Grid>
                            <Grid item xs={6} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                <Typography>나랑 가장 맞는 회사</Typography>
                                
                            </Grid>
                            <Grid item xs={6} sx={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                                <Typography>??????</Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                </Box>
                
        </Box>
        
    )
}