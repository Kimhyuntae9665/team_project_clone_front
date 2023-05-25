import { Avatar, Box, Checkbox, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";


export default function CompletePage(){

    const { percentile } = useParams();
    return(

            <Box>{percentile}</Box>

    )

}