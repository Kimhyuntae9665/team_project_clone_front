import { Autocomplete, Box ,Grid, TextField } from "@mui/material";

export default function MyInterfaceView() {


    return(
        <Box> 
        <Grid container sx={{ p:'20px 20px'}}>
                <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userfinalEducation} disablePortal 
                        renderInput={(params) => <TextField {...params} label="최종학력" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userCarrer} disablePortal 
                        renderInput={(params) => <TextField {...params} label="경력" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Autocomplete 
                        sx={{width:'200px', ml:'55px' }} 
                        options={userLicense} disablePortal 
                        renderInput={(params) => <TextField {...params} label="자격증" />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        sx={{width:'200px', ml:'55px' }}
                        multiline
                        label="기타 입력사항"
                        placeholder="자유롭게 입력해주세요."
                        />
                    </Grid>
                </Grid>
            </Grid>
            </Box>
    )
}

const userfinalEducation = [
    {label:'서울대학교 졸업'},
    {label:'연세대학교 졸업'},
    {label:'고려대학교 졸업'},
    {label:'한양대학교 졸업'},
    {label:'성균관대학교 졸업'},
    {label:'중앙대학교 졸업'},
    {label:'경희대학교 졸업'},
    {label:'부산대학교 졸업'}
]

const userCarrer = [
    {label:'제조업 20년 이상'},
    {label:'제조업 15년 이상'},
    {label:'제조업 10년 이상'},
    {label:'서비스업 20년 이상'},
    {label:'서비스업 15년 이상'},
    {label:'서비스업 10년 이상'},
]

const userLicense  = [
    {label:'AWS 자격증'},
    {label:'SQLD 자격증'},
    {label:'컴퓨터활용능력 자격증'},
    {label:'기타'}
]
