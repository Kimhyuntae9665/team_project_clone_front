import { Box } from "@mui/material";
import MainHead from "./MainHead";
import MainContents from "./MainContents";
import Footer from "../Footer";
import NavigationBar from "../NavigationBar";

export default function Main () {
    return (
        <Box>
            <MainHead />
            <MainContents />
        </Box>
    )
}