import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetCompanyListResponseDto, GetListResponseDto } from "src/apis/response/company";

interface Props {
    item: GetListResponseDto | GetCompanyListResponseDto;
}

export default function CompanyListItem ({item}:Props) {

    const navigator = useNavigate();
    return (
        <Card variant="outlined">
      <CardActionArea sx={{ display: "flex", justifyContent: "space-between", p: "24px", backgroundColor: "#ffffff"}} onClick={() => navigator(`/board/detail/${item.companyName}`)}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ mr: "8px" }}>
              <Avatar alt={item.companyName} src={item.companyImgUrl ? item.companyImgUrl : ''} />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 500, color: "#000000" }}
              >
                {item.companyName}
              </Typography>
              <Typography
                sx={{
                  mt: "2px",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                {item.companyHomepage}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: "16px", mb: "16px" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: 500, color: "#000000" }}
            >
              {item.companyName}
            </Typography>
            <Typography
              sx={{
                mt: "5px",
                fontSize: "12px",
                fontWeight: 400,
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              {item.companyName}
            </Typography>
          </Box>
        </Box>
        {item.companyImgUrl && (
          <Box>
            <Box
              component="img"
              src={item.companyImgUrl}
              sx={{ height: "152px", width: "152px", borderRadius: "5%" }}
            />
          </Box>
        )}
      </CardActionArea>
    </Card>
  );
}