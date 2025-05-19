import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Container } from '@mui/material';

export default function AboutSection() {
    const theme = useTheme();

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
                    About Dwarkesh
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
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing
                </Typography>
            </Container>
        </Box>
    );
}
