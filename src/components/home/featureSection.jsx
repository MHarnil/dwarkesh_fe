import React from 'react';
import {Box, Grid, Typography, Card} from '@mui/material';
import tntelligent from '../../assets/images/home/14 1.png';
import quality from '../../assets/images/home/15 1.png';
import professional from '../../assets/images/home/16 1.png';
import lifetime from '../../assets/images/home/17 1.png';

const features = [
    {img: tntelligent, title: 'INTELLIGENT DESIGN'},
    {img: quality, title: 'QUALITY ASSURANCE'},
    {img: professional, title: 'PROFESSIONAL APPROACH'},
    {img: lifetime, title: 'LIFETIME DURABILITY'}
];

const FeatureSection = () => {
    return (
        <Box sx={{py: 8, textAlign: 'center'}}>
            <Typography sx={{fontSize: {xs: '15px', md: '58px'}, fontWeight: '600', color: '#1B1B1B'}}>
                Most Trusted Realty Group
            </Typography>
            <Typography sx={{fontSize: {xs: '26px', md: '40px'}, fontWeight: '600', color: '#1B1B1B', mb: 3}}>
                Why we are the best
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {features.map((feature, index) => (
                    <Grid key={index} item xs={6} sm={6} md={3}>
                        <Card
                            elevation={3}
                            sx={{
                                px: 2,
                                py: 4,
                                height: {xs: 160, md: 200, lg: 300},
                                width: {xs: 160, md: 200, lg: 300},
                                display: 'flex',
                                borderRadius: '20px',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                transition: 'transform 0.3s',
                                '&:hover': {transform: 'translateY(-5px)'}
                            }}
                        >
                            <Box
                                component="img"
                                src={feature.img}
                                alt={feature.title}
                                sx={{
                                    width: {xs: 64, md: 80, lg: 123},
                                    height: {xs: 64, md: 80, lg: 123},
                                    objectFit: 'contain',
                                    mb: 2
                                }}
                            />
                            <Typography
                                sx={{fontSize: {xs: '15px', md: '18px', lg: '26px'}, fontWeight: {md: 600, lg: 600}}}>
                                {feature.title}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default FeatureSection;
