import { Autocomplete, Grid, TextField,Box,Typography,Input, Button } from "@mui/material";
import { useState, } from "react";
import axios, { AxiosResponse } from "axios";
import ResponseDto from "src/apis/response";
import { useNavigate } from "react-router-dom";
import { COMPANY_SELECT_CARRER, COMPANY_SELECT_LICENSE, COMPANY_SELECT_UNIVERSITY, authorizationHeader } from "src/contants/api";
import { useCookies } from "react-cookie";
import companyStore from "src/stores/companystores/company.store";
import { useCompanyStore } from "src/stores/companystores";
import { SelectUniversityResponseDto,SelectCarrerResponseDto,SelectLicenseResponseDto } from "src/apis/response/company";







export default function MyCompanypageInterfaceView() {
    
//      HOOK        //
const navigator = useNavigate();
const {company,setCompany} = useCompanyStore();
// const [university_response_data,setUniversity_response_data] = useState<SelectUniversityResponseDto>({companyTelNumber:'',first_grade_university:[]});
// ? undefined, 랑 null이랑 다르다 
const [Grade_One_University_one,setGrade_One_University_one] = useState<string | undefined>('');
const [Grade_One_University_two,setGrade_One_University_two] = useState<string | undefined>('');
const [Grade_One_University_three,setGrade_One_University_three] = useState<string | undefined>('');
const [Grade_One_University_four,setGrade_One_University_four] = useState<string | undefined>('');
const [Grade_One_University_five,setGrade_One_University_five] = useState<string | undefined>('');
const [first_grade_university_score,setFirst_grade_university_score] = useState<Number| undefined>(0);


const [Grade_Two_University_one,setGrade_Two_University_one] = useState<string | undefined>('');
const [Grade_Two_University_two,setGrade_Two_University_two] = useState<string | undefined>('');
const [Grade_Two_University_three,setGrade_Two_University_three] = useState<string | undefined>('');
const [Grade_Two_University_four,setGrade_Two_University_four] = useState<string | undefined>('');
const [Grade_Two_University_five,setGrade_Two_University_five] = useState<string | undefined>('');
const [second_grade_university_score,setSecond_grade_university_score] = useState<Number| undefined>(0);




const [Grade_Three_University_one,setGrade_Three_University_one] = useState<string | undefined>('');
const [Grade_Three_University_two,setGrade_Three_University_two] = useState<string | undefined>('');
const [Grade_Three_University_three,setGrade_Three_University_three] = useState<string | undefined>('');
const [Grade_Three_University_four,setGrade_Three_University_four] = useState<string | undefined>('');
const [Grade_Three_University_five,setGrade_Three_University_five] = useState<string | undefined>('');
const [third_grade_university_score,setThird_grade_university_score] = useState<Number| undefined>(0);



const [Grade_Etc_University_one,setGrade_Etc_University_one] = useState<string | undefined>('');
const [Grade_Etc_University_two,setGrade_Etc_University_two] = useState<string | undefined>('');
const [Grade_Etc_University_three,setGrade_Etc_University_three] = useState<string | undefined>('');
const [Grade_Etc_University_four,setGrade_Etc_University_four] = useState<string | undefined>('');
const [Grade_Etc_University_five,setGrade_Etc_University_five] = useState<string | undefined>('');
const [etc_grade_university_score,setEtc_grade_university_score] = useState<Number| undefined>(0);





const [first_grade_university,setFirst_grade_university] = useState<string[]>([]);
const [second_grade_university,setSecond_grade_university] = useState<string[]>([]);
const [third_grade_university,setThird_grade_university] = useState<string[]>([]);
const [etc_grade_university,setEtc_grade_university] = useState<string[]>([]);

const [Carrer_one,setCarrer_one] = useState<string| undefined>('');
const [Carrer_two,setCarrer_two] = useState<string| undefined>('');
const [Carrer_three,setCarrer_three] = useState<string| undefined>('');
const [Carrer_four,setCarrer_four] = useState<string| undefined>('');
const [Carrer_five,setCarrer_five] = useState<string| undefined>('');
const [carrer_score,setCarrer_score] = useState<Number| undefined>(0);
const [carrer,setCarrer] = useState<string[]>([]);

const [License_one,setLicense_one]= useState<string| undefined>('');
const [License_two,setLicense_two]= useState<string| undefined>('');
const [License_three,setLicense_three]= useState<string| undefined>('');
const [License_four,setLicense_four]= useState<string| undefined>('');
const [License_five,setLicense_five]= useState<string| undefined>('');
const [license_score,setLicense_score]= useState<Number| undefined>(0);
const [license,setLicense] = useState<string[]>([]);

const [cookies] = useCookies();
const accessToken = cookies.accessToken;




//     Event Handler       //


const add_string_handler_grade_one_university = () =>{
    if(first_grade_university.length>0){
        console.log("이거");
        console.log("데이터 :"+first_grade_university);
        alert("저장되었습니다.");
        return;
    }
    setFirst_grade_university((previousArray)=>[...previousArray,Grade_One_University_one || '',Grade_One_University_two || '',Grade_One_University_three || '',Grade_One_University_four || '',Grade_One_University_five || '']);
    
    console.log(first_grade_university);
    console.log(first_grade_university_score);
    
}

const add_string_handler_grade_two_university = () =>{
    if(second_grade_university.length>0){
        console.log("이거");
        console.log("데이터 :"+second_grade_university);
        alert("저장되었습니다.");
        return;
    }
    setSecond_grade_university((previousArray)=>[...previousArray,Grade_Two_University_one || '',Grade_Two_University_two || '',Grade_Two_University_three || '',Grade_Two_University_four || '',Grade_Two_University_five || '']);
   
    console.log(second_grade_university);

}

const add_string_handler_grade_three_university = () =>{
    if(third_grade_university.length>0){
        console.log("이거");
        console.log("데이터 :"+third_grade_university);
        alert("저장되었습니다.");
        return;
    }

    setThird_grade_university((previousArray)=>[...previousArray,Grade_Three_University_one || '',Grade_Three_University_two || '',Grade_Three_University_three || '',Grade_Three_University_four || '',Grade_Three_University_five || '']);
    
    console.log(third_grade_university);
}

const add_string_handler_grade_etc_university = ()=>{
    if(etc_grade_university.length>0){
        console.log("이거");
        console.log("데이터 :"+etc_grade_university);
        alert("저장되었습니다.");
        return;
    }

    setEtc_grade_university((previousArray)=>[...previousArray,Grade_Etc_University_one || '',Grade_Etc_University_two || '',Grade_Etc_University_three || '',Grade_Etc_University_four || '',Grade_Etc_University_five || '']);
    
    console.log(etc_grade_university);
}

const add_string_handler_carrer = () =>{
    if(carrer.length>0){
        console.log("이거");
        console.log("데이터 :"+carrer);
        alert("저장되었습니다.");
        return;
    }
    setCarrer((previousArray)=>[...previousArray,Carrer_one||'',Carrer_two||'',Carrer_three||'',Carrer_four||'',Carrer_five||''])
    
    console.log(carrer);
    

}


const add_string_handler_license = () =>{

    console.log(license.length);

    if(license.length>0){
        console.log("이거");
        console.log("데이터 :"+license);
        console.log("호잇!"+License_one);
        console.log(License_two);
        alert("저장되었습니다.");
        return;
    }
    console.log(License_one);
    console.log(License_two);
    setLicense((previousArray)=>[...previousArray,License_one||'',License_two||'',License_three||'',License_four||'',License_five||''])
    
    console.log(license);
}



const company_Select_Component_University_total_and_score = () =>{
    // !key-value형태로 데이터를 넣어야한다 company?.companyTelNumber만 넣으면 key값이 없기 때문에 앞에 key를 추가해준다 
    const send_Data = {companyTelNumber: company?.companyTelNumber,
        first_grade_university,first_grade_university_score,
        second_grade_university,second_grade_university_score,
        third_grade_university,third_grade_university_score,
        etc_grade_university,etc_grade_university_score};

    console.log("이게 왜 null이지? : "+ first_grade_university);
    console.log("이것도 0으로 나와 :" + first_grade_university_score);

    axios.post(COMPANY_SELECT_UNIVERSITY,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_University_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error));
}



const comapny_Select_Component_Carrer = () =>{
    const send_Data = {companyTelNumber:company?.companyTelNumber,carrer,carrer_score};

    axios.post(COMPANY_SELECT_CARRER,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_Carrer_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))

}

const company_Select_Component_License = () =>{
    const send_Data = {companyTelNumber:company?.companyTelNumber,license,license_score};

    axios.post(COMPANY_SELECT_LICENSE,send_Data,authorizationHeader(accessToken))
            .then((response)=>company_Select_License_ResponseHandler(response))
            .catch((error)=>company_Select_ComponentError(error))
}

// ! 가장 먼저 불리는 함수
const UpLoad_company_select_component_Handler = () =>{

    if(first_grade_university==null || second_grade_university==null || third_grade_university==null || etc_grade_university==null ||carrer==null || license==null ){
        alert('모든 사항을 선택해 주세요');
        return;
      }

      company_Select_Component_University_total_and_score();
      comapny_Select_Component_Carrer();
      company_Select_Component_License();



}




//      Response Handler   //
const company_Select_University_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<SelectUniversityResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }
      alert("모든데이터가 저장되었습니다.");

    
    // setUniversity_response_data(data.university_data); 
    

}

const company_Select_Carrer_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<SelectCarrerResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }

    
    

}


const company_Select_License_ResponseHandler = (response : AxiosResponse<any,any>)=>{

    const {result,message,data} = response.data as ResponseDto<SelectLicenseResponseDto>
    // ? data에는 우리회사가 가장 비중을 두고 있는 선택사항을 보여준다, 우리회사에 지원한 지원자중 가장 점수가 높은 ? 인의 정보를 보여준다
    if(!result || !data){
        alert(message);
        return;
      }
    // ? 마지막으로 License까지 등록한 후에는 다시 회사페이지로 돌아오기    
      navigator('/myCompanyPage/{company.companyTelNumber}');
    

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
                                    onChange={(event,value)=>setFirst_grade_university_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button sx={{width:'200px', height:'56', ml:'55px'}} variant="contained" color="secondary" onClick={add_string_handler_grade_one_university}>1등급학교 설정완료</Button>
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
                                    onChange={(event,value)=>setSecond_grade_university_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button sx={{width:'200px', height:'56', ml:'55px'}} variant="contained" color="secondary" onClick={add_string_handler_grade_two_university}>2등급학교 설정완료</Button>
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
                                    onChange={(event,value)=>setThird_grade_university_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button sx={{width:'200px', height:'56', ml:'55px'}} variant="contained" color="secondary" onClick={add_string_handler_grade_three_university}>3등급학교 설정완료</Button>
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
                                    onChange={(event,value)=>setEtc_grade_university_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button sx={{width:'200px', height:'56', ml:'55px'}} variant="contained" color="secondary" onClick={add_string_handler_grade_etc_university}>기타등급학교 설정완료</Button>
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
                                    options={company_carrer} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="경력우대 업종" /> }
                                    onChange={(event,value)=>setCarrer_one(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_carrer} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="경력우대 업종" /> }
                                    onChange={(event,value)=>setCarrer_two(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_carrer} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="경력우대 업종" /> }
                                    onChange={(event,value)=>setCarrer_three(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_carrer} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="경력우대 업종" /> }
                                    onChange={(event,value)=>setCarrer_four(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_carrer} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="경력우대 업종" /> }
                                    onChange={(event,value)=>setCarrer_five(value?.label)}
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
                                    renderInput={(params) => <TextField {...params} label="경력우대 업종 점수" /> }
                                    onChange={(event,value)=>setCarrer_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button sx={{width:'200px', height:'56', ml:'55px'}} variant="contained" color="secondary" onClick={add_string_handler_carrer}>경력우대 업종 설정완료</Button>
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
                                    options={company_license} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="우대 자격증" /> }
                                    onChange={(event,value)=>setLicense_one(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_license} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="우대 자격증" /> }
                                    onChange={(event,value)=>setLicense_two(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_license} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="우대 자격증" /> }
                                    onChange={(event,value)=>setLicense_three(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2} spacing={3}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_license} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="우대 자격증" /> }
                                    onChange={(event,value)=>setLicense_four(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                    sx={{width:'200px', ml:'55px' }} 
                                    options={company_license} disablePortal 
                                    renderInput={(params) => <TextField {...params} label="우대 자격증" /> }
                                    onChange={(event,value)=>setLicense_five(value?.label)}
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
                                    renderInput={(params) => <TextField {...params} label="우대 자격증 점수" /> }
                                    onChange={(event,value)=>setLicense_score(value?.label)}
                                    />
                                </Grid>
                                <Grid item xs={10.5} sx={{display:'flex', justifyContent: 'center'}}>
                                    <Button sx={{width:'200px', height:'56', ml:'55px'}} variant="contained" color="secondary" onClick={add_string_handler_license}>우대 자격증 설정완료</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sx={{mt:'10px'}}>
                        <Grid item xs={10}></Grid>
                        <Grid item xs={2} container justifyContent="flex-end" alignItems="center">
                            <Button sx={{ mx: 'auto' }} variant="contained" color="secondary" size="large" onClick={UpLoad_company_select_component_Handler} >등록하기</Button>
                        </Grid>
                    </Grid>    
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

