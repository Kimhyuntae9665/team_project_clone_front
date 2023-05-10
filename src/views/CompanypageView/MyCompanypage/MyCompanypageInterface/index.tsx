import { Autocomplete, Grid, TextField, Typography,Input,Box } from "@mui/material";

export default function MyCompanypageInterfaceView() {
    return (
        <Grid container sx={{ p:'20px 20px',mt:'50px'}}>
                <Grid item sx={{display:'flex', alignItems:'center', p:'10px', width:'100%',height:'100%',border:'2px solid black'}}>
                    <Grid item xs={5}>
                        <Box sx={{alignItems:'center',justifyContent:'center',p:'10px'}}>
                            <Autocomplete 
                            options={companyfinalEducation1} disablePortal 
                            renderInput={(params) => <TextField {...params} label="최종학력1" />}
                            />
                        </Box>
                        <Box sx={{alignItems:'center',p:'10px'}}  >
                            <Typography sx={{fontSize:'20px'}}>평균 연봉: <Input placeholder="평균 연봉를 입력하세요" /></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{alignItems:'center',justifyContent:'center',p:'10px'}}>
                            <Autocomplete  
                            options={companyfinalEducation2} disablePortal 
                            renderInput={(params) => <TextField {...params} label="최종학력2" />}
                            />
                        </Box>
                        <Box sx={{alignItems:'center',p:'10px'}}  >
                            <Typography sx={{fontSize:'20px'}}>설립일: <Input placeholder="설립일를 입력하세요" /></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{alignItems:'center',justifyContent:'center',p:'10px'}}>
                            <Autocomplete 
                            options={companyfinalEducation3} disablePortal 
                            renderInput={(params) => <TextField {...params} label="최종학력3" />}
                            />
                        </Box>
                        <Box sx={{alignItems:'center',p:'10px'}}  >
                            <Typography sx={{fontSize:'20px'}}>홈페이지: <Input placeholder="주소를 입력하세요" /></Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={5}>
                        <Box sx={{alignItems:'center',justifyContent:'center',p:'10px'}}>
                            <Autocomplete 
                            options={companyfinalEducation4} disablePortal 
                            renderInput={(params) => <TextField {...params} label="최종학력4" />}
                            />
                        </Box>
                        <Box sx={{alignItems:'center',p:'10px'}}  >
                            <Typography sx={{fontSize:'20px'}}>월매출: <Input placeholder="매출액를 입력하세요" /></Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
    )
}
const companyfinalEducation1 = [
    {label:'고등학교 졸업 +5'},
    {label:'대학교 졸업 +10'},
    {label:'대학원 졸업 +15'},
]
const companyfinalEducation2 = [
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
]
const companyfinalEducation3 = [
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
]
const companyfinalEducation4 = [
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
    {label:'고등학교 졸업'},
]