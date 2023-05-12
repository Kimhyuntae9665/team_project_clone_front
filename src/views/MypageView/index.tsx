import { Autocomplete, Avatar, Box, Button, Grid, TextField, Typography } from "@mui/material";
import MyInterfaceView from "./MyInterfaceView";
import MyPageHead from "./MyPageHead";
import MyPageCompanyListView from "./MypageCompanyListView";
export default function MyPage(){
    return(
        <>
        <MyPageHead/>
        <MyInterfaceView/>
        <MyPageCompanyListView/>
        </>
    )
}
