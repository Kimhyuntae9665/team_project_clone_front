import { AppBar, Box, FormControl, IconButton, InputAdornment, OutlinedInput, Toolbar, Typography } from "@mui/material";

export default function NavigationBar () {
    return (
        <Box sx={{flexGrow:1}}>
            <AppBar variant="outlined" position="static" sx={{ p: '0px 100px', backgroundColor: '#ffffff' }} >
                <Toolbar>
                    
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow:1, display: {xs: 'none', sm:'block', color:'#000000'} } } >
                        구직사이트
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <FormControl variant='outlined' sx={{ mr: '10px' }}>
                            <IconButton  >
                                로그인
                            </IconButton>
                        </FormControl>
                    </Box >
                </Toolbar>
            </AppBar>
        </Box>
    )
}