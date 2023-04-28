import { Box, Grid, Typography } from "@mui/material";

export default function MainContents(){
  return(
    <Box sx={{ pt:'40px', pb:'120px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Box sx={{ justifyContent: 'center', alignItems:'center', p: '10px'}}>
            <Typography sx={{ fontSize:'20px', fontWeight:'400', textAlign:'center'  }}>회사 목록</Typography>
        </Box>
        <Grid container sx={{ p:'20px', border: '3px solid black', justifyContent:'center', textAlign:'center'}}>
          <Grid item xs={ 2 } sx={{pt:'10px', pb:'350px', border: '2px solid black' }}>
            <Typography>회사1</Typography>
            </Grid>
          <Grid item xs={2} sx={{pt:'10px', pb:'350px', border: '2px solid black' }}>
            <Typography>회사2</Typography>
          </Grid>
          <Grid item xs={2} sx={{pt:'10px', pb:'350px', border: '2px solid black' }}>
            <Typography>회사3</Typography>
          </Grid>
          <Grid item xs={2} sx={{pt:'10px', pb:'350px', border: '2px solid black' }}>
            <Typography>회사4</Typography>
          </Grid>
          <Grid item xs={2} sx={{pt:'10px', pb:'350px', border: '2px solid black' }}>
            <Typography>회사5</Typography>
          </Grid>
          <Grid item xs={2} sx={{pt:'10px', pb:'350px', border: '2px solid black' }}>
            <Typography>회사6</Typography>
          </Grid>
        </Grid>
    </Box>
  );
    
}