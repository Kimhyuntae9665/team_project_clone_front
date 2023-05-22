import { Box, Button, FormHelperText, Grid, Typography } from "@mui/material";
import { useState } from "react";

export default function CompanyPageMySuccessRate(){

    const [applySign, setApplySign] = useState<Boolean>(false)
    
    const applyCheckHandler = () => {
        setApplySign(true)
    }

    return(
        <Grid container xs={11.2} sx={{pt: '20px', pb: '50px', ml:'50px', mr:'50px', mb:'50px', border:'2px solid black'}}>
                <Grid item xs={7} sx={{pl:'30px', pt:'10px'}}>
                    <Typography sx={{fontSize:'30px', fontWeight:'400'}}>내 합격률</Typography>
                </Grid>
                <Grid item xs={4} sx={{ml: "80px", pt:'10px '}}>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                        <Grid item xs={6} sx={{p:'10px 10px', border:'2px solid black'}}>
                            <Typography sx={{fontSize:'20px'}}>종합 인재상</Typography>
                            <Box sx={{p:'50px'}}></Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container xs={12} sx={{mt:'20px'}}>
                    <Grid item xs={10}></Grid>
                    <Grid item xs={2} container justifyContent="flex-end" alignItems="center">
                        {
                            applySign ? (
                                <>
                                    <Button sx={{ mx: 'auto' }} variant="contained" color="secondary">
                                        예
                                    </Button>
                                    <Button sx={{ mx: 'auto' }} variant="contained" color="secondary">
                                        아니요
                                    </Button>
                                    <FormHelperText sx={{color:'red', textAlign:'center', mr:'10px'}}>정말로 지원하시겠습니까?</FormHelperText>
                                </>
                            ) : (
                                <Button sx={{ mx: 'auto' }} variant="contained" color="secondary" onClick={applyCheckHandler}>신청하기</Button>
                            )
                        }

                    </Grid>
                </Grid>
            </Grid>
    )
}