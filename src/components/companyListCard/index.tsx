import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetCompanyListResponseDto, GetListResponseDto } from "src/apis/response/company";

interface Props {
  companyListItem:  GetCompanyListResponseDto | GetListResponseDto;
}

export default function CompanyListCard ({companyListItem}:Props) {

    const navigator = useNavigate();
    return (
        <Card variant="outlined">
      <CardActionArea sx={{ display: "flex",height:'400px', justifyContent: "space-between", p: "24px", backgroundColor: "#ffffff"}} onClick={() => navigator(`/Company/${companyListItem.companyTelNumber}`)}>
        <Box>
          {companyListItem.companyProfileUrl ? (
              <Box>
                <Box
                  component="img"
                  src={companyListItem.companyProfileUrl}
                  sx={{ height: "152px", width: "152px", borderRadius: "5%", mb:'20px' }}
                />
              </Box>
            ) : 
            (<Box>
              <Box
              component="img"
              src="https://cdn.discordapp.com/attachments/863056937511551008/1110086770911084564/no-image-icon-6.png"
              sx={{height:"152px", width:'152px', mb:'20px'}}>
              </Box>
            </Box>)}
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
        </Box>
        
      </CardActionArea>
    </Card>
  );
}