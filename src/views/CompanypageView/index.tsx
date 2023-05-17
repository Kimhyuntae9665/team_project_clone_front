import { Avatar, Box, Checkbox, Grid, Typography } from "@mui/material";
import CompanyPageHead from "./CompanypageHead";
import CompanyPageMySuccessRate from "./CompanypageMySussessRate";
import CompanypageMySussessRateNotLoggedIn from "./CompanyPageMySuccessRateNotLoggedIn";
import { useUserStore } from "src/stores/userstores";

export default function CompanyPage(){
    const {user} = useUserStore();
    return(

       <>
       <CompanyPageHead/>
       { user ? (<> <CompanyPageMySuccessRate/> </>) : ( <CompanypageMySussessRateNotLoggedIn/>)}
       
       </>
    )
}
