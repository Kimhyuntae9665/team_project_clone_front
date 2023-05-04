import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AuthenticationLogInView from "./LoginCardVIew";
import AuthenticationSignUpView from "./SignUpCardView";

export default function AuthenticationView(){

    const [loginView, setLoginView] = useState<boolean>(true);

    return(
        <Box>
            <Box>
                {loginView ? (<AuthenticationLogInView />) : (<AuthenticationSignUpView />)}
            </Box>
        </Box>
    )
}