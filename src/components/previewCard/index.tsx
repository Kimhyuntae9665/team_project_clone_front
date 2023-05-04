import { Avatar, Box, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GetTop3ListResponseDto } from "src/apis/response/company";

interface Props {
    previewItem: GetTop3ListResponseDto;

}

export default function PreviewCard({previewItem} : Props) {
    const navigator = useNavigate();
    const backgroundImage = `url(${previewItem.companyImgUrl})`;

    return (
        <Card>
        <CardActionArea sx={{ height: '508px', backgroundImage: backgroundImage, backgroundSize: 'cover', backgroundColor: '#666666' }} onClick={() => navigator(`/board/detail/${previewItem.companyName}`)}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column-reverse' }}>
                <Box sx={{ p: '24px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <Box sx={{ mr: '8px' }}>
                            <Avatar alt="Remy Sharp" src={ previewItem.companyImgUrl ? previewItem.companyName : '' } />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '12px', fontWeight: 500, color: '#ffffff' }}>{ previewItem.companyName }</Typography>
                            <Typography sx={{ mt: '2px', fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>{ previewItem.companyName }</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ mt: '16px', mb: '16px' }}>
                        <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#ffffff' }}>{ previewItem.companyName }</Typography>
                        <Typography sx={{ mt: '5px', fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>{ previewItem.companyName }</Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.7)' }}>{`댓글 ${previewItem.companyName} · 좋아요 ${previewItem.companyName} · 조회수 ${previewItem.companyName}`}</Typography>
                    </Box>
                </Box>
            </Box>
        </CardActionArea>
    </Card>
    )

}