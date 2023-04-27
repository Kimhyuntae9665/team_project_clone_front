import { Box, Typography } from "@mui/material";

export default function MainContents(){
  return(
    <Box sx={{ pt:'40px 120px', backgroundColor: 'rgba(0,0,0,0.05)' }} >
        <Box>
            <Typography sx={{ fontSize:'20px', fontWeight:'400'  }}>회사 목록</Typography>
        </Box>
    </Box>
  );
    
}