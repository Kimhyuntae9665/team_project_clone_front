import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetTop3CompanyListResponseDto } from "src/apis/response/company";

interface Props {
    top3PreviewItem: GetTop3CompanyListResponseDto;

}

export default function PreviewCard({top3PreviewItem} : Props) {
    const navigator = useNavigate();
    const backgroundImage = `url(${top3PreviewItem.companyProfileUrl})`;

    return (
        <Card>
        <CardActionArea sx={{ height: '508px', backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundColor: '#666666' }} onClick={() => navigator(`/Company${top3PreviewItem.companyTelNumber}`)}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column-reverse' }}>
                <Box sx={{ p: '24px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ mr: '8px' }}>
                            <Avatar src={ top3PreviewItem.companyProfileUrl ? top3PreviewItem.companyName : '' } />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '12px', fontWeight: 500, color: '#ffffff' }}>{ top3PreviewItem.companyName }</Typography>
                            <Typography sx={{ mt: '2px', fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>{ top3PreviewItem.companyTelNumber }</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: '16px', mb: '16px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#ffffff' }}>{ top3PreviewItem.companyAddress }</Typography>
                        <Typography sx={{ mt: '5px', fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>{ top3PreviewItem.companyHomePage }</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>{`월간 매출 ${top3PreviewItem.companySales} · 연간 소득 평균 ${top3PreviewItem.companyAnnualIncomeAverage} · 직원수 ${top3PreviewItem.companyEmployeeNumber}`}</Typography>
                    </Box>
                </Box>
            </Box>
        </CardActionArea>
    </Card>
    )

}