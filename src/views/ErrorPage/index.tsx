import { Box, Typography } from '@mui/material';
import React from 'react';

const NotFoundPage = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '76vh' }}>
          <Box sx={{ width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img style={{ width: '100px', height: '100px', objectFit: 'contain' }} src='https://cdn.discordapp.com/attachments/861159994065420310/1107941427666755594/PngItem_64336.png' />
          </Box>
          <Typography textAlign='center' sx={{ fontSize: '40px', fontWeight: '900' }}>404 - NOT FOUND</Typography>
          <Typography textAlign='center' sx={{ fontSize: '25px', fontWeight: '500' }}>해당 페이지를 찾을 수 없습니다.</Typography>
        </Box>
      );
};

export default NotFoundPage;
