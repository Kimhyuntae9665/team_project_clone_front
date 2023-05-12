import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import { useUserStore } from "src/stores/userstores";

export default function MyPageHead() {
    const {user,setUser} = useUserStore();

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
                
        </Box>
        
    )
}