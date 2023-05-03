import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useState } from "react";
import UserLoginCardView from "./LoginCardVIew/UserLoginCardView";
import { useNavigate } from "react-router-dom";

export default function AuthenticationView(){
        const navigator = useNavigate();
    return(
        <Box sx={{pr:'120px', pl:'120px'}}>
            <Grid container spacing={2}>
                <Grid item lg={6} sm={12}>
                <Card sx={{height: '800px', mt: '80px', mb: '80px', backgroundImage: 'url()', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} onClick={() => navigator('login/company')}>
                        <CardActionArea>
                            <Typography textAlign='center' sx={{pt:'550px', fontSize:'60px', fontWeight:'900'}}>사용자 로그인</Typography>
                        
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item lg={6} sm={12}>
                    <Card sx={{height: '800px', mt: '80px', mb: '80px', backgroundImage: 'url(https://png.pngtree.com/png-vector/20191001/ourmid/pngtree-building-icon-isolated-on-abstract-background-png-image_1776393.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} onClick={() => navigator('login/company')}>
                        <CardActionArea>
                            <Typography textAlign='center' sx={{pt:'550px', fontSize:'60px', fontWeight:'900'}}>회사 로그인</Typography>
                        
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}