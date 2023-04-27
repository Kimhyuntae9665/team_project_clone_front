import { AppBar, Box, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";

export default function NavigationBar () {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar variant="outlined" position="static" sx={{ p: '0px 100px', backgroundColor: '#ffffff' }} >
                <Toolbar>
                    
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow:1, display: {xs: 'none', sm:'block', color:'#000000'} } } >
                        회사명
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <FormControl variant='outlined' sx={{ mr: '10px' }}>
                            <Typography color='#000000'>
                                로그인
                            </Typography>
                        </FormControl>
                    </Box >
                </Toolbar>
            </AppBar>
        </Box>
    )
}