import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AuthenticationSignUpView(){
        const navigator = useNavigate();
    return(
        <Box sx={{pr:'120px', pl:'120px'}}>
            <Grid container spacing={2}>
                <Grid item lg={6} sm={12}>
                <Card sx={{height: '600px', mt: '80px', mb: '80px', backgroundImage: 'url(https://t1.daumcdn.net/cfile/tistory/2513B53E55DB206927)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} onClick={() => navigator('signup/user')}>
                        <CardActionArea>
                            <Typography textAlign='center' sx={{pt:'500px', fontSize:'60px', fontWeight:'900'}}>사용자 회원가입</Typography>
                        
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={6} sm={12}>
                    <Card sx={{height: '600px', mt: '80px', mb: '80px', backgroundImage: 'url(https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-building-icon-isolated-on-abstract-background-png-image_1776393.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} onClick={() => navigator('signup/company')}>
                        <CardActionArea>
                            <Typography textAlign='center' sx={{pt:'500px', fontSize:'60px', fontWeight:'900'}}>회사 회원가입</Typography>
                        
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}