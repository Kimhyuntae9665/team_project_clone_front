import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardActionArea, Grid, Pagination, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetCompanyListResponseDto } from "src/apis/response/company";
import CompanyListItem from "src/components/CompanyListItem";
import { getPageCount } from "src/utils";
import companyPagingHook from "src/hooks/paging.hook";
import { GET_LIST_COMPANY } from "src/contants/api";

export default function MainContents(){
   const { viewList,pageNumber, companyList,setCompanyList,onPageHandler,COUNT } = companyPagingHook(6);
  
   const getList = () => {
    axios.get(GET_LIST_COMPANY)
    .then((response) => getListCompanyResponseHandler(response))
    .catch((error) => getListCompanyErrorHandler(error));
   }


  const navigator = useNavigate();
  return(
    <Box sx={{ pt:'40px', pb:'120px', backgroundColor: 'rgba(0,0,0,0.05)' }}>
        <Box sx={{ justifyContent: 'center', alignItems:'center', p: '10px'}}>
            <Typography sx={{ fontSize:'20px', fontWeight:'400', textAlign:'center'  }}>회사 목록</Typography>
        </Box>
        <Grid container sx={{ p:'20px', border: '3px solid black', justifyContent:'center', textAlign:'center'}}>
          <Grid item xs={ 2 }>
            <Card  sx={{pt:'10px', pb:'350px', border: '2px solid black' }} onClick={() => navigator('/Company')}>
              <CardActionArea>
                <Typography>
                  <Stack spacing ={2}>
                    {viewList.map((companyList) => (<CompanyListItem item={companyList as GetCompanyListResponseDto} />))}
                  </Stack>
                  </Typography>
              </CardActionArea>
            </Card>
          </Grid>
{/*           
          <Grid item xs={ 2 }>
            <Card  sx={{pt:'10px', pb:'350px', border: '2px solid black' }} onClick={() => navigator('/Company')}>
              <CardActionArea>
                <Typography>회사2</Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={ 2 }>
            <Card  sx={{pt:'10px', pb:'350px', border: '2px solid black' }} onClick={() => navigator('/Company')}>
              <CardActionArea>
                <Typography>회사3</Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={ 2 }>
            <Card  sx={{pt:'10px', pb:'350px', border: '2px solid black' }} onClick={() => navigator('/Company')}>
              <CardActionArea>
                <Typography>회사4</Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={ 2 }>
            <Card  sx={{pt:'10px', pb:'350px', border: '2px solid black' }} onClick={() => navigator('/Company')}>
              <CardActionArea>
                <Typography>회사5</Typography>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={ 2 }>
            <Card  sx={{pt:'10px', pb:'350px', border: '2px solid black' }} onClick={() => navigator('/Company')}>
              <CardActionArea>
                <Typography>회사6</Typography>
              </CardActionArea>
            </Card>
          </Grid> */}

        </Grid>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
           <Pagination page={pageNumber} count={getPageCount(companyList,COUNT)} onChange={(event, value) => onPageHandler(value)} />
        </Box>
    </Box>
  );
    
}