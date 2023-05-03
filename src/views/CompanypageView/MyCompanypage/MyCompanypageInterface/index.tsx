import { Autocomplete, Grid, TextField } from "@mui/material";

export default function MyCompanypageInterfaceView() {
    return (
        <Grid container sx={{ p:'20px 20px',mt:'50px'}}>
                <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation1} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력1" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation2} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력2" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation3} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력3" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={companyfinalEducation4} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력4" />}
                        />
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