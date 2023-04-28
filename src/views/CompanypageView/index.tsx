import { Avatar, Box, Checkbox, Grid, Typography } from "@mui/material";
import CompanyPageHead from "./CompanypageHead";
import CompanyPageMySuccessRate from "./CompanypageMySussessRate";
import CompanypageMySussessRateNotLoggedIn from "./CompanyPageMySuccessRateNotLoggedIn";

export default function CompanyPage(){
    return(
       <>
       <CompanyPageHead/>
       <CompanypageMySussessRateNotLoggedIn/>
       </>
    )
}
