import React from 'react';
import { Box, Typography } from '@mui/material';
import bgimg from '../../assets/images/about/IMG-20250508-WA0051 3.png';
import {useTranslation} from "react-i18next";

const AboutHero = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <Typography variant="h2" component="h1" fontWeight="bold">
                {t('about.hero.title')}
            </Typography>
            <Typography variant="h6" mt={22} sx={{fontSize:'30px', fontWeight: '700'}}>
                {t('about.hero.location')}
            </Typography>
        </Box>
    );
};

export default AboutHero;
