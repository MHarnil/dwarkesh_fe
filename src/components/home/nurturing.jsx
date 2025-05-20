import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import bgImage from '../../assets/images/home/IMG-20250508-WA0074.jpg';
import {useTranslation} from "react-i18next";

const Nurturing = () => {
    const { t } = useTranslation();
    return (
        <Box
            sx={{
                backgroundImage: `linear-gradient(to bottom, rgb(143 143 143 / 60%), rgb(22 22 22 / 60%)), url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                position: 'relative',
                color: '#fff',
                py: { xs: 6, sm: 8, md: 10 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                zIndex: 1,
            }}
        >
            <Container maxWidth="xl" sx={{ zIndex: 1 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '24px', sm: '30px', md: '36px' },
                        letterSpacing: '1px',
                        mb: 2,
                    }}
                >
                    {t('nurturing.title')}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                        lineHeight: 1.8,
                        mb: 3,
                        width: '70%',
                        mx: 'auto',
                    }}
                >
                    {t('nurturing.description')}
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        background: 'linear-gradient(to bottom, #CDA049, #675025)',
                        color: '#fff',
                        width: { xs: '200px', sm: '225px', md: '250px' },
                        height: { xs: '60px', sm: '72px', md: '65px' },
                        fontSize: { xs: '16px', sm: '18px', md: '22px' },
                        padding: { xs: '10px 20px', sm: '12px 24px', md: '14px 28px' },
                        fontWeight: 'bold',
                        textTransform: 'none',
                        borderRadius: '5px',
                        '&:hover': {
                            background: 'linear-gradient(to bottom, #B5943F, #4F3B21)',
                        },
                    }}
                >
                    {t('nurturing.button_text')}
                </Button>
            </Container>
        </Box>
    );
};

export default Nurturing;
