import React from 'react';
import {Box, Grid, Typography, Card} from '@mui/material';
import tntelligent from '../../assets/images/home/14 1.png';
import quality from '../../assets/images/home/15 1.png';
import professional from '../../assets/images/home/16 1.png';
import lifetime from '../../assets/images/home/17 1.png';
import {useTranslation} from "react-i18next";


const FeatureSection = () => {
    const {t} = useTranslation();
    const features = [
        {img: tntelligent, title: t('features.intelligent')},
        {img: quality, title: t('features.quality')},
        {img: professional, title: t('features.professional')},
        {img: lifetime, title: t('features.lifetime')}
    ];

    return (
        <Box sx={{py: 8, textAlign: 'center'}}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                    fontWeight: 700,
                    fontSize: {xs: '24px', sm: '30px', md: '36px', lg: '40px'},
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: '#1B1B1B'
                }}
            >
                {t('features.section_title')}
            </Typography>
            <Typography sx={{fontSize: {xs: '18px', md: '26px'}, fontWeight: '600', color: '#1B1B1B', mb: 3}}>
                {t('features.section_subtitle')}
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
                                    width: {xs: 64, md: 80, lg: 110},
                                    height: {xs: 64, md: 80, lg: 110},
                                    objectFit: 'contain',
                                    mb: 2
                                }}
                            />
                            <Typography
                                sx={{fontSize: {xs: '15px', md: '18px', lg: '32px'}, fontWeight: {md: 600, lg: 600}}}>
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
