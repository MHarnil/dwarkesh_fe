import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import {useTranslation} from "react-i18next";

const VisionMissionSection = () => {
    const { t } = useTranslation();

    return (
        <Box py={{xs: 6, md: 10}} bgcolor="#fff">
            <Container maxWidth="md">
                {/* Vision */}
                <Box textAlign="center" mb={{xs: 6, md: 10}}>
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
                        {t('about.visionMission.vision.title')}
                    </Typography>
                    <Typography variant="body1"
                                align="center"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: {xs: '14px', sm: '15px', md: '16px', lg: '18px'},
                                    color: '#575151',
                                    lineHeight: 1.8,
                                    mt: 3,
                                    px: {xs: 2, sm: 4, md: 6}
                                }}>
                        {t('about.visionMission.vision.description')}
                    </Typography>
                </Box>

                {/* Mission */}
                <Box textAlign="center">
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
                        {t('about.visionMission.mission.title')}
                    </Typography>
                    <Typography variant="body1"
                                align="center"
                                sx={{
                                    fontWeight: 400,
                                    fontSize: {xs: '14px', sm: '15px', md: '16px', lg: '18px'},
                                    color: '#575151',
                                    lineHeight: 1.8,
                                    mt: 3,
                                    px: {xs: 2, sm: 4, md: 6}
                                }}>
                        {t('about.visionMission.mission.description')}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default VisionMissionSection;
