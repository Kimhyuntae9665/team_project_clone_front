import { Grid, Typography } from "@mui/material";

export default function CompanypageMySussessRateNotLoggedIn(){
    return(
        <Grid container sx={{mt:'50px', border:'2px solid black', p:'20px', display:'flex'}}>
            <Typography sx={{textAlign:'center', fontSize:'40px', fontWeight:'500'}}>로그인이 필요한 작업입니다.</Typography>
        </Grid>
    )
}