import React from 'react';
import { Box, Typography } from '@mui/material';
import heroBg from '../../assets/images/home/IMG-20250508-WA0022 1.png';
import {useTranslation} from "react-i18next";

export default function HeroSection() {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 1,
                }}
            />
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: 2,
                    textAlign: 'center',
                }}
            >
                <Typography
                    sx={{
                        color: '#fff',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        fontSize: {
                            xs: '28px',
                            sm: '36px',
                            md: '48px',
                            lg: '55px'
                        },
                        lineHeight: 1.2,
                    }}
                >
                    {t('hero_title')}
                </Typography>
            </Box>
        </Box>
    );
}
