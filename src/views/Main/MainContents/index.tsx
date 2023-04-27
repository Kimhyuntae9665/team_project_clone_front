import { Box, Typography } from "@mui/material";

export default function MainContents(){
  return(
    <Box sx={{ pt:'20px 120px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Box>
            <Typography sx={{ fontSize: '24px', fontWeight: 500}}></Typography>
        </Box>
    </Box>
  );
    
}