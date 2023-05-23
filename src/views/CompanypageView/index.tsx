import { Avatar, Box, Checkbox, Grid, Typography } from "@mui/material";
import CompanyPageHead from "./CompanypageHead";
import CompanyPageMySuccessRate from "./CompanypageMySussessRate";
import CompanypageMySussessRateNotLoggedIn from "./CompanyPageMySuccessRateNotLoggedIn";
import { useUserStore } from "src/stores/userstores";
import { useCompanyStore } from "src/stores/companystores";
import CompanyPageMySuccessRateCompanyLoggedIn from "./CompanyPageMySuccessRateCompanyLoggedIn";

export default function CompanyPage(){
    const {user} = useUserStore();
    const {company} = useCompanyStore();
    return(

       <>
       <CompanyPageHead/>
       { user ? (<> <CompanyPageMySuccessRate/> </>) : company ? ( <CompanyPageMySuccessRateCompanyLoggedIn/>) : (<CompanypageMySussessRateNotLoggedIn/>)}
       
       </>
    )
}
