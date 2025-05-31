

import React from 'react';
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Box,
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
    return (
        <Box sx={{ flexGrow: 1, padding: 4 }}>
            <Grid container spacing={4}>
                {carddata.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index} >
                        <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                image={item.img}
                                alt={`building-${index}`}
                                sx={{ height: 200, objectFit: 'cover' }}
                            />
                            <CardContent sx={{ backgroundColor: '#f0f6fc' }}>
                                <Typography variant="body2" color="text.secondary">
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
