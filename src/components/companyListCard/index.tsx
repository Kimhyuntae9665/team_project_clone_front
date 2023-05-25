import { Avatar, Box, Card, CardActionArea, Typography,Button, FormControl } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ResponseDto from "src/apis/response";
import { GetInfo, Percentile } from "src/apis/response/applicant";
import { GetCompanyListResponseDto, GetListResponseDto } from "src/apis/response/company";
import { GET_INFO_FOR_PERCENTILE, GET_PERCENTILE, authorizationHeader } from "src/contants/api";

interface Props {
  companyListItem:  GetCompanyListResponseDto | GetListResponseDto;
}



export default function CompanyListCard ({companyListItem}:Props) {
  //  Hook //




const [cookies] = useCookies();
const accessToken = cookies.accessToken;


// Event Handler //
const PopUpPage = ()=>{
  

  

    getInfoForPercentile();
    

}

const getInfoForPercentile = () =>{

  axios.get(GET_INFO_FOR_PERCENTILE,authorizationHeader(accessToken))
       .then((response)=>getInfoForPercentileResponseHandler(response))
       .catch((error)=>getInfoForPercentileErrorHandler(error))

}

const percentile = (data : GetInfo[]) =>{

  console.log("여기까지 성공2:");

  data.map((item, i) => {
    const send_Data = {
      applicant_Total_Score: item.applicant_Total_Score,
      applicant_Email: item.applicant_Email
    };
    console.log("여기까지 성공2:"+i);
    console.log("회사의 전화번호: "+item.companyTelNumber);
    axios
      .post(GET_PERCENTILE(item.companyTelNumber), send_Data, authorizationHeader(accessToken))
      .then((response) => percentileResponseHandler(response))
      .catch((error) => percentileErrorHandler(error));
  
    return null; // 반드시 JSX 요소를 반환해야 하므로 null 반환
  });

}
  

// Response Handler //
const percentileResponseHandler = (response:AxiosResponse<any,any>) =>{

  console.log("여기까지 성공3:");
  const {result,message,data} = response.data as ResponseDto<Percentile>

  console.log("데이터 도착 우/무"+data?.applicant_percentile);

  if (!result || !data) {
    alert(message);
    return;
}

console.log("여ㄱ가 끝 :");

console.log("여기까지 성공3:"+data.applicant_percentile);

const width = 600; // 팝업 창 가로 크기
    const height = 400; // 팝업 창 세로 크기
    const left = window.innerWidth / 2 - width / 2; // 화면 중앙에 위치하기 위한 좌표 계산
    const top = window.innerHeight / 2 - height / 2; // 화면 중앙에 위치하기 위한 좌표 계산
    // ? 팝업창 화면 크기
    const features = `width=${width},height=${height},left=${left},top=${top}`;

    window.open("http://localhost:3000/complete/" + data.applicant_percentile,"_blank",features);



}


const getInfoForPercentileResponseHandler = (response:AxiosResponse<any,any>) =>{

  console.log("여기까지는 성공1:");

  const {result,message,data} = response.data as ResponseDto<GetInfo[]>
  if (!result || !data) {
    alert(message);
    return;
}

console.log("여기까지 성공1: "+data[0].applicant_Total_Score);
console.log("Data의 구성 :"+data[0].companyTelNumber);

percentile(data);
  
}




//  Error Handler //

const percentileErrorHandler = (error:any) =>{
  console.log(error.message);

}


const getInfoForPercentileErrorHandler = (error:any) => {
  console.log(error.message);
}

    const navigator = useNavigate();
    return (
        <Card variant="outlined">
      <CardActionArea sx={{ display: "flex",height:'400px', justifyContent: "space-between", p: "24px", backgroundColor: "#ffffff"}} onClick={() => navigator(`/Company/${companyListItem.companyTelNumber}`)}>
        <Box>
        {companyListItem.companyProfileUrl ? (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={companyListItem.companyProfileUrl}
              sx={{ height: '152px', width: '140px', borderRadius: '5%', mb: '20px' }}
            />
          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src="https://cdn.discordapp.com/attachments/863056937511551008/1110086770911084564/no-image-icon-6.png"
              sx={{ height: '152px', width: '140px', mb: '20px' }}
            />
          </Box>
        )}
          <Box sx={{ display: "flex" }}>
            <Box sx={{ mr: "8px" }}>
              <Avatar alt={companyListItem.companyName} src={companyListItem.companyProfileUrl ? companyListItem.companyProfileUrl : ''} />
            </Box>
            <Box>
              
              <Typography
                sx={{ fontSize: "12px", fontWeight: 500, color: "#000000" }}
              >
                {companyListItem.companyName}
              </Typography>
              <Typography
                sx={{
                  mt: "2px",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                {companyListItem.companyTelNumber}
              </Typography>
            </Box>
              
          </Box>
          <Box sx={{ mt: "16px", mb: "16px" }}>
            <Typography
              sx={{
                mt: "5px",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              {companyListItem.companyAddress}
            </Typography>
          </Box>
          <Box sx={{ mt: "16px", mb: "16px",display:"flex",gap:"8px",justifyContent: "center" }}>
            
              <FormControl variant="outlined" sx={{ mr: '10px' }}>
                <Button variant="contained" color="secondary" onClick={PopUpPage}>
                  {companyListItem.applicantTotalScore}
                </Button>
              </FormControl>
              <FormControl variant="outlined" sx={{ mr: '10px' }}>
                <Button variant="contained" color="secondary" onClick={PopUpPage}>
                  Percentile
                </Button>
              </FormControl>
              
            
          </Box>

        </Box>
        
      </CardActionArea>
    </Card>
  );
}