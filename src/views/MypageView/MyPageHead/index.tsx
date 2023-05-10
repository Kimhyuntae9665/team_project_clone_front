import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

export default function MyPageHead() {
    return(
        <Box sx={{p:'5px'}}>
            {/* 유저 프로필 */}
                <Box sx={{ display: 'flex', alignItems: 'center', m:'50px 50px'}}>
                    <Avatar sx={{width:'150px', height:'150px'}}></Avatar>
                    <Typography sx={{fontSize:'50px', fontWeight:'400', ml:'50px'}}>OOO님</Typography>
                    <Button variant="outlined" color="error" sx={{ml:'900px', width:'100px', height:'50px'}}>로그아웃</Button>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', m:'50px 50px'}}>
                    <Grid container sx={{p:'20px 20px',mt:'50px'}}>
                        <Grid item sx={{display:'flex',alignItems:'center',p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                            <Grid item xs={6}>


                            </Grid>
                            <Grid item xs={6}>

                                
                            </Grid>
                            <Grid item xs={6}>

                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
        </Box>
    )
}