import { Avatar, Box, Checkbox, Grid, Typography } from "@mui/material";
import CompanyPageHead from "./CompanypageHead";
import CompanyPageMySuccessRate from "./CompanypageMySussessRate";
import CompanypageMySussessRateNotLoggedIn from "./CompanyPageMySuccessRateNotLoggedIn";
import { useUserStore } from "src/stores/userstores";
import { useCompanyStore } from "src/stores/companystores";
import CompanyPageMySuccessRateCompanyLoggedIn from "./CompanyPageMySuccessRateCompanyLoggedIn";
import CompanyPageCompanyInterface from "./CompanyPageCompanyInterface";

export default function CompanyPage(){
    const {user} = useUserStore();
    const {company} = useCompanyStore();
    return(

       <>
       <CompanyPageHead/>
       <CompanyPageCompanyInterface/>
       { user ? (<> <CompanyPageMySuccessRate/> </>) : company ? ( <CompanyPageMySuccessRateCompanyLoggedIn/>) : (<CompanypageMySussessRateNotLoggedIn/>)}
       
       </>
    )
}
