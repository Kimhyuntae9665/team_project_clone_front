import { Box, Grid, Typography } from "@mui/material";

export default function CompanyPageMySuccessRate(){
    return(
        <Grid container sx={{mt:'50px', border:'2px solid black'}}>
                <Grid item xs={6} sx={{p:'10px 20px 20px 20px'}}>
                    <Typography sx={{fontSize:'30px', fontWeight:'400'}}>내 합격률</Typography>
                </Grid>
                <Grid item xs={6} sx={{p:'30px 30px'}}>
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
            </Grid>
    )
}