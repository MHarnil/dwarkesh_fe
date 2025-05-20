import React from 'react';
import { Box, Typography,  Container } from '@mui/material';
import {useTranslation} from "react-i18next";

export default function AboutSection() {

    const { t } = useTranslation();

    return (
        <Box sx={{ py: { xs: 6, sm: 8, md: 15 }, backgroundColor: '#fff' }}>
            <Container maxWidth="lg">
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '24px', sm: '30px', md: '36px', lg: '40px' },
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        color: '#1B1B1B'
                    }}
                >
                    {t('about_dwarkesh_title')}
                </Typography>

                <Typography
                    variant="body1"
                    align="center"
                    sx={{
                        fontWeight: 400,
                        fontSize: { xs: '14px', sm: '15px', md: '16px', lg: '18px' },
                        color: '#575151',
                        lineHeight: 1.8,
                        mt: 3,
                        px: { xs: 2, sm: 4, md: 6 }
                    }}
                >
                    {t('about_dwarkesh_description')}
                </Typography>
            </Container>
        </Box>
    );
}
