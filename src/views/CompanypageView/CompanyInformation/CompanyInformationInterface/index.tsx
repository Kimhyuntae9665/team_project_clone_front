import {Box,Divider,Fab,Grid, IconButton,Input,Typography, TextField} from '@mui/material';
import {useRef} from 'react';

export default function CompanyInformationInterface() {

    const imageRef = useRef<HTMLInputElement | null>(null);

    

    return(
        <Box>
            <Grid container sx={{  pt:'20px', pb:'20px',pl:'100px',pr: '100px'}}>
                <Grid item sx={{p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'50px'}}>
                    <Grid item sx={{display:'flex', alignItems:'center'}}>
                        <Grid item xs={6} sx={{display:'flex', flexDirection: 'column'}}>
                            <TextField 
                            sx={{width:'200px', ml:'55px' }}
                            multiline
                            label="회사 홈페이지"
                            placeholder="자유롭게 입력해주세요."
                            />
                        </Grid>
                        <Grid item xs={6} sx={{display:'flex', flexDirection: 'column'}}>
                            <TextField 
                            sx={{width:'200px', ml:'55px' }}
                            multiline
                            label="직원 수"
                            placeholder="자유롭게 입력해주세요."
                            />
                        </Grid>
                        <Grid item xs={6} sx={{display:'flex', flexDirection: 'column'}}>
                            <TextField 
                            sx={{width:'200px', ml:'55px' }}
                            multiline
                            label="월 매출"
                            placeholder="자유롭게 입력해주세요."
                            />
                        </Grid>
                        <Grid item xs={6} sx={{display:'flex', flexDirection: 'column'}}>
                            <TextField 
                            sx={{width:'200px', ml:'55px' }}
                            multiline
                            label="초봉"
                            placeholder="자유롭게 입력해주세요."
                            />
                        </Grid>
                    </Grid>
                        <Box sx={{ display:'flex', alignItems:'center',justifyContent:'right',pr:'60px'}}>
                            <IconButton>저장</IconButton>
                        </Box>
                </Grid>
            </Grid>
            <Box sx={{  pt:'10px', pb:'20px',pl:'100px',pr: '100px'}}>
                <Box sx={{ p: '10px 5px', border:'2px solid black' }} >
                    <Box sx={{  alignItems: 'start' }} >
                        <Box sx={{display:'flex'}}>
                            <Typography sx={{fontSize: '24px', fontWeight: 500, color: 'rgba(0,0,0,0.7)'}} >회사 소개 글</Typography>
                        </Box>
                        <Box sx={{width:'100%'}}>
                            <Input fullWidth disableUnderline multiline minRows={5} placeholder='간단한 회사 소개' sx={{ fontSize: '15px', fontWeight: 500, lineHeight: '150%' }}  />
                            <Box sx={{width:'100%'}} component='img'  />
                        </Box>
                    </Box>
                        <Box sx={{ display:'flex', alignItems:'center',justifyContent:'right',pr:'60px'}}>
                            <IconButton>저장</IconButton>
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}