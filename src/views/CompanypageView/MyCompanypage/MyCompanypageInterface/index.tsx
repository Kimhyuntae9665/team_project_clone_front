import { Autocomplete, Grid, TextField,Box,Typography,Input, Button } from "@mui/material";
import { useState, } from "react";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { useNavigate } from "react-router-dom";
import { COMPANY_SELECT_CARRER, COMPANY_SELECT_LICENSE, COMPANY_SELECT_UNIVERSITY, authorizationHeader } from "src/contants/api";
import { useCookies } from "react-cookie";
import { UpLoadCompanySelectComponentResponseDto } from "src/apis/response/company";







export default function MyCompanypageInterfaceView() {
    
//      HOOK        //
const navigator = useNavigate();
// ? undefined, 랑 null이랑 다르다 
const [Grade_One_University_one,setGrade_One_University_one] = useState<string | undefined>('');
const [Grade_One_University_two,setGrade_One_University_two] = useState<string | undefined>('');
const [Grade_One_University_three,setGrade_One_University_three] = useState<string | undefined>('');
const [Grade_One_University_four,setGrade_One_University_four] = useState<string | undefined>('');
const [Grade_One_University_five,setGrade_One_University_five] = useState<string | undefined>('');
const [Grade_One_University_score,setGrade_One_University_score] = useState<Number| undefined>(0);


const [Grade_Two_University_one,setGrade_Two_University_one] = useState<string | undefined>('');
const [Grade_Two_University_two,setGrade_Two_University_two] = useState<string | undefined>('');
const [Grade_Two_University_three,setGrade_Two_University_three] = useState<string | undefined>('');
const [Grade_Two_University_four,setGrade_Two_University_four] = useState<string | undefined>('');
const [Grade_Two_University_five,setGrade_Two_University_five] = useState<string | undefined>('');
const [Grade_Two_University_score,setGrade_Two_University_score] = useState<Number| undefined>(0);




const [Grade_Three_University_one,setGrade_Three_University_one] = useState<string | undefined>('');
const [Grade_Three_University_two,setGrade_Three_University_two] = useState<string | undefined>('');
const [Grade_Three_University_three,setGrade_Three_University_three] = useState<string | undefined>('');
const [Grade_Three_University_four,setGrade_Three_University_four] = useState<string | undefined>('');
const [Grade_Three_University_five,setGrade_Three_University_five] = useState<string | undefined>('');
const [Grade_Three_University_score,setGrade_Three_University_score] = useState<Number| undefined>(0);



const [Grade_Etc_University_one,setGrade_Etc_University_one] = useState<string | undefined>('');
const [Grade_Etc_University_two,setGrade_Etc_University_two] = useState<string | undefined>('');
const [Grade_Etc_University_three,setGrade_Etc_University_three] = useState<string | undefined>('');
const [Grade_Etc_University_four,setGrade_Etc_University_four] = useState<string | undefined>('');
const [Grade_Etc_University_five,setGrade_Etc_University_five] = useState<string | undefined>('');
const [Grade_Etc_University_score,setGrade_Etc_University_score] = useState<Number| undefined>(0);





const [grade_one_string_array,setGrade_one_string_array] = useState<string[]>([]);
const [grade_two_string_array,setGrade_two_string_array] = useState<string[]>([]);
const [grade_three_string_array,setGrade_three_string_array] = useState<string[]>([]);
const [grade_etc_string_array,setGrade_etc_string_array] = useState<string[]>([]);

const [Carrer,setCarrer] = useState<string| undefined>('');
const [Carrer_score,setCarrer_score] = useState<Number| undefined>(0);

const [License,setLicense]= useState<string| undefined>('');
const [License_score,setLicense_score]= useState<Number| undefined>(0);

const [cookies] = useCookies();
const accessToken = cookies.accessToken;




//     Event Handler       //


const add_string_handler_grade_one_university = () =>{
    setGrade_one_string_array((previousArray)=>[...previousArray,Grade_One_University_one || '',Grade_One_University_two || '',Grade_One_University_three || '',Grade_One_University_four || '',Grade_One_University_five || '']);
    console.log(grade_one_string_array);
}



const company_Select_Component_University_grade_one = () =>{
    const send_Data = {grade_one_string_array,Grade_One_University_score};

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const company_Select_Component_University_grade_two = () =>{
    const send_Data = {grade_two_string_array,Grade_One_University_score};

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const company_Select_Component_University_grade_three = () =>{
    const send_Data = {grade_three_string_array,Grade_One_University_score};

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const company_Select_Component_University_grade_etc = () =>{
    const send_Data = {grade_etc_string_array,Grade_One_University_score};

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}

const comapny_Select_Component_Carrer = () =>{
    const send_Data = {Carrer,Carrer_score};

    axios.post(COMPANY_SELECT_CARRER,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_Carrer_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))

}

const company_Select_Component_License = () =>{
    const send_Data = {License,License_score};

    axios.post(COMPANY_SELECT_LICENSE,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_License_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))
}

// ! 가장 먼저 불리는 함수
const UpLoad_company_select_component_Handler = () =>{

    if(!Grade_One_University_one?.trim() || !Grade_One_University_two?.trim() || !Grade_One_University_three?.trim() || !Grade_One_University_four?.trim() ||!Carrer?.trim() || !License?.trim() ){
        alert('모든 사항을 선택해 주세요');
        return;
      }

      company_Select_Component_University_grade_one();
      company_Select_Component_University_grade_two();
      company_Select_Component_University_grade_three();
      company_Select_Component_University_grade_etc();
      comapny_Select_Component_Carrer();
      company_Select_Component_License();



}




//      Response Handler   //
const company_Select_University_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    

}

const company_Select_Carrer_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    

}


const company_Select_License_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<UpLoadCompanySelectComponentResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    navigator('/myCompanyPage');
    

}



//      Error Handler       //

const company_Select_ComponentError =(error:any)=>{
    console.log(error.message);
}
    return (
        <Grid container spacing={4} sx={{p:'20px 20px', mr:'20px' }}>
                    <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                        <Grid item xs={18}>
                            <Grid container spacing={3}>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1등급 학교" /> }
                                    onChange={(event,value)=>setGrade_One_University_one(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1등급 학교" /> }
                                    onChange={(event,value)=>setGrade_One_University_two(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1등급 학교" /> }
                                    onChange={(event,value)=>setGrade_One_University_three(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1등급 학교" /> }
                                    onChange={(event,value)=>setGrade_One_University_four(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1등급 학교" /> }
                                    onChange={(event,value)=>setGrade_One_University_five(value?.label)}
                                    />
                                </Grid>
                                <Grid item sx={{display:'flex', alignItems:'center'}}>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                </Grid>    
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university_score} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1등급 학교 점수" /> }
                                    onChange={(event,value)=>setGrade_One_University_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button variant="contained" color="secondary" onClick={add_string_handler_grade_one_university}>1등급학교 설정완료</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                        <Grid item xs={18}>
                            <Grid container spacing={3}>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_second_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="2등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Two_University_one(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_second_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="2등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Two_University_two(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_second_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="2등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Two_University_three(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_second_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="2등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Two_University_four(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_second_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="2등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Two_University_five(value?.label)}
                                    />
                                </Grid>
                                <Grid item sx={{display:'flex', alignItems:'center'}}>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                </Grid>    
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_second_grade_university_score} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="2등급 학교 점수" /> }
                                    onChange={(event,value)=>setGrade_One_University_score(value?.label)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                        <Grid item xs={18}>
                            <Grid container spacing={3}>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="3등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Three_University_one(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="3등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Three_University_two(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="3등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Three_University_three(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="3등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Three_University_four(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="3등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Three_University_five(value?.label)}
                                    />
                                </Grid>
                                <Grid item sx={{display:'flex', alignItems:'center'}}>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                </Grid>    
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university_score} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="3등급 학교 점수" /> }
                                    onChange={(event,value)=>setGrade_One_University_score(value?.label)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                        <Grid item xs={18}>
                            <Grid container spacing={3}>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="기타등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Etc_University_one(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="기타등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Etc_University_two(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="기타등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Etc_University_three(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="기타등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Etc_University_four(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="기타등급 학교" /> }
                                    onChange={(event,value)=>setGrade_Etc_University_five(value?.label)}
                                    />
                                </Grid>
                                <Grid item sx={{display:'flex', alignItems:'center'}}>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                    <Grid item xs={18} spacing={3}></Grid>
                                </Grid>    
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_first_grade_university_score} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="기타등급 학교 점수" /> }
                                    onChange={(event,value)=>setGrade_One_University_score(value?.label)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>
                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item xs={6}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_carrer} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1급 경력" /> }
                                    onChange={(event,value)=>setCarrer(value?.label)}
                                    />
                                </Grid>
                                <Grid>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_carrer_score} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="1급 경력 점수" /> }
                                    onChange={(event,value)=>setCarrer_score(value?.label)}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                        <Grid item sx={{display:'flex', alignItems:'center', p:'20px',width:'100%', height: '100%', border:'2px solid black', pb:'100px'}}>   
                            <Grid item xs={6}>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Autocomplete
                                        sx={{width:'200px', ml:'55px' }} 
                                        options={company_license} disablePortal 
                                        renderInput={(params) => <TextField {...params} label="1급 자격증" /> }
                                        onChange={(event,value)=>setLicense(value?.label)}
                                        />
                                    </Grid>
                                    <Grid>
                                        <Autocomplete
                                        sx={{width:'200px', ml:'55px' }} 
                                        options={company_license_score} disablePortal 
                                        renderInput={(params) => <TextField {...params} label="1급 자격증 점수" /> }
                                        onChange={(event,value)=>setLicense_score(value?.label)}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>         
                    <Button variant="contained" color="secondary" onClick={UpLoad_company_select_component_Handler}>등록하기</Button>
            </Grid>
    )
}
const company_first_grade_university = [
    {label:'서울대학교'},
    {label:'연세대학교'},
    {label:'고려대학교'},
    {label:'성균관대학교'},
    {label:'한양대학교'},
    {label:'서강대학교'},
    {label:'경희대학교'},
    {label:'중앙대학교'},
    {label:'이화여자대학교'},
    {label:'건국대학교'},
    {label:'동국대학교'},
    {label:'부산대학교'},
    {label:'부경대학교'},
    {label:'울산대학교'},
    {label:'단국대학교'},
    {label:'전북대학교'},
    {label:'전남대학교'},
    {label:'경남대학교'}
]
const company_first_grade_university_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
    
    
]
const company_second_grade_university = [
    {label:'서울대학교'},
    {label:'연세대학교'},
    {label:'고려대학교'},
    {label:'성균관대학교'},
    {label:'한양대학교'},
    {label:'서강대학교'},
    {label:'경희대학교'},
    {label:'중앙대학교'},
    {label:'이화여자대학교'},
    {label:'건국대학교'},
    {label:'동국대학교'},
    {label:'부산대학교'},
    {label:'부경대학교'},
    {label:'울산대학교'},
    {label:'단국대학교'},
    {label:'전북대학교'},
    {label:'전남대학교'},
    {label:'경남대학교'}
]
const company_second_grade_university_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
    
    
]
const company_third_grade_university = [
    {label:'서울대학교'},
    {label:'연세대학교'},
    {label:'고려대학교'},
    {label:'성균관대학교'},
    {label:'한양대학교'},
    {label:'서강대학교'},
    {label:'경희대학교'},
    {label:'중앙대학교'},
    {label:'이화여자대학교'},
    {label:'건국대학교'},
    {label:'동국대학교'},
    {label:'부산대학교'},
    {label:'부경대학교'},
    {label:'울산대학교'},
    {label:'단국대학교'},
    {label:'전북대학교'},
    {label:'전남대학교'},
    {label:'경남대학교'}
]
const company_third_grade_university_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
    
    
]
const company_carrer = [
    {label:'제조업 근무 경력'},
    {label:'IT업 근무 경력'},
    {label:'연구직 근무 경력'},
    {label:'판매직 근무 경력'},
    {label:'경영직 근무 경력'},
    {label:'비서직 근무 경력'},
    {label:'과학직 근무 경력'},
    {label:'스포츠직 근무 경력'},
    {label:'예술직 근무 경력'}
]

const company_carrer_year = [
    {label:'20년 이상'},
    {label:'15년 이상'},
    {label:'10년 이상'},
    {label:'5년 이상'},
    {label:'3년 이상'}
    
]
const company_carrer_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
]
const company_license = [
    {label:'SQLD 자격증'},
    {label:'AWS 자격증'},
    {label:'컴퓨터 활용능력'}
]
const company_license_score = [
    {label:20},
    {label:19},
    {label:18},
    {label:17},
    {label:16},
    {label:15},
    {label:14},
    {label:13},
    {label:12},
    {label:11},
    {label:10},
    {label:9},
    {label:8},
    {label:7},
    {label:6},
    {label:5},
    {label:4},
    {label:3},
    {label:2},
    {label:1},
    {label:0}
]

