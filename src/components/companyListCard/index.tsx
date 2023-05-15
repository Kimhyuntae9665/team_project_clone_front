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
          <Box sx={{ display: "flex" }}>
            <Box sx={{ mr: "8px" }}>
              <Avatar alt={companyListItem.companyName} src={companyListItem.companyImgUrl ? companyListItem.companyImgUrl : ''} />
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
              {companyListItem.companyHomepage}
            </Typography>
          </Box>
        </Box>
        {companyListItem.companyImgUrl && (
          <Box>
            <Box
              component="img"
              src={companyListItem.companyImgUrl}
              sx={{ height: "152px", width: "152px", borderRadius: "5%" }}
            />
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}