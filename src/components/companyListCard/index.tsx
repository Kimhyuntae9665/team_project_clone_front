import { Avatar, Box, Card, CardActionArea, Typography,Button, FormControl } from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { GetCompanyListResponseDto, GetListResponseDto } from "src/apis/response/company";
import { authorizationHeader } from "src/contants/api";



//  Hook //


interface Props {
  companyListItem:  GetCompanyListResponseDto | GetListResponseDto;
}

const [cookies] = useCookies();
const accessToken = cookies.accessToken;


// Event Handler //
const PopUpPage = ()=>{
  

  const width = 600; // 팝업 창 가로 크기
    const height = 400; // 팝업 창 세로 크기
    const left = window.innerWidth / 2 - width / 2; // 화면 중앙에 위치하기 위한 좌표 계산
    const top = window.innerHeight / 2 - height / 2; // 화면 중앙에 위치하기 위한 좌표 계산
    // ? 팝업창 화면 크기
    const features = `width=${width},height=${height},left=${left},top=${top}`;

    window.open("http://www.naver.com","_blank",features);

    percentile();

}

const percentile = () =>{

  const send_Data = {}
  axios.post(,send_Data,authorizationHeader(accessToken))
       .then((response)=>percentileResponseHandler(response))
       .catch((error)=>percentileErrorHandler(error))

}

// Response Handler //
const percentileResponseHandler = (response:AxiosResponse<any,any>) =>{

}





//  Error Handler //

const percentileErrorHandler = (error:any) =>{

}

export default function CompanyListCard ({companyListItem}:Props) {

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
              {companyListItem.companyName}
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