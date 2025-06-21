import React from 'react';
import { Box, Typography } from '@mui/material';
import bgimg from '../../assets/images/about/IMG-20250508-WA0051 3.webp';
import {useTranslation} from "react-i18next";

const ContactHero = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                height: '70vh',
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
            <Typography variant="h2" component="h1" fontWeight="bold" sx={{mt:10, fontSize:{xs:'44px', sm:'55px'}}}>
                {t('contact.hero.title')}
            </Typography>
            <Typography variant="h6" mt={18} sx={{fontSize:{xs:'20px', sm:'30px'}, fontWeight: '700'}}>
                {t('contact.hero.location')}
            </Typography>
        </Box>
    )
}
export default ContactHero
