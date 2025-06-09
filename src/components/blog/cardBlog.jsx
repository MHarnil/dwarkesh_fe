import React from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
    useTheme,
} from '@mui/material';

import image1 from '../../assets/images/blog/IMG-20250508-WA0055 2.png';
import image2 from '../../assets/images/blog/IMG-20250508-WA0059 4.png';
import image3 from '../../assets/images/blog/IMG-20250508-WA0076 3.png';
import image4 from '../../assets/images/blog/ICON VILLA (1)-2 3.png';
import image5 from '../../assets/images/blog/15bf1774a35a78cd156ee4afe94a57795df74db5.jpg';
import image6 from '../../assets/images/blog/Group 253.png';

const carddata = [
    { img: image1, text: 'is simply dummy text of the printing and typesetting industry.' },
    { img: image2, text: 'is simply dummy text of the printing and typesetting industry.' },
    { img: image3, text: 'is simply dummy text of the printing and typesetting industry.' },
    { img: image4, text: 'is simply dummy text of the printing and typesetting industry.' },
    { img: image5, text: 'is simply dummy text of the printing and typesetting industry.' },
    { img: image6, text: 'is simply dummy text of the printing and typesetting industry.' },
];

const CardBlog = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 2, sm: 4, md: 10 },
                py: 8,
            }}
        >
            <Grid container spacing={4} maxWidth="lg" justifyContent="center">
                {carddata?.map((item, index) => (
                    <Grid item size={{xs:12, md:6, lg:4}} key={index}>
                        <Card
                            sx={{
                                borderRadius: 0,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={item.img}
                                alt={`card-image-${index}`}
                                sx={{
                                    height: 220,
                                    objectFit: 'cover',
                                    transition: 'transform 0.4s ease',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                    },
                                }}
                            />
                            <CardContent sx={{ backgroundColor: '#ffffff', px: 2, py: 2 }}>
                                <Typography
                                    variant="body1"
                                    color="text.primary"
                                    sx={{ fontSize: '0.95rem' }}
                                >
                                    {item.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CardBlog;
