import React, {useRef} from 'react';
import {Box, Typography, keyframes} from '@mui/material';
import down from '../../assets/images/icon/ic_twotone-double-arrow.png';
import propertyFloorPlans from "../propertyFloorPlans.js";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";

const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(10px);
    }
`;

const HeroSection = () => {
    const {id} = useParams();
    const targetRef = useRef(null);

    const { t, i18n } = useTranslation();

    const property = propertyFloorPlans.find(property => property.id === parseInt(id));

    if (!property) {
        return <Typography variant="h6">Property Not Found</Typography>;
    }

    const heroImg = property.heroImg;

    const scrollToTarget = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <Box
            sx={{
                height: '100vh',
                background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImg}) center/cover no-repeat`,
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                px: 2,
            }}
        >
            <Typography
                variant="h4"
                fontWeight="700"
                sx={{
                    mt: '3rem',
                    fontSize: {
                        xs: '32px',
                        sm: '40px',
                        md: '50px',
                        lg: '55px',
                    },
                }}
            >
                {property.title}
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    color: '#E39A4F',
                    my: 1,
                    fontWeight: '700',
                    fontSize: {
                        xs: '24px',
                        sm: '32px',
                        md: '40px',
                        lg: '45px',
                    },
                }}
            >
                {property.subTitle}
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    mt: 6,
                    fontWeight: '700',
                    fontSize: {
                        xs: '18px',
                        sm: '24px',
                        md: '28px',
                        lg: '30px',
                    },
                }}
            >
                {property.stateLocation}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    color: '#E39A4F',
                    mb: 4,
                    fontWeight: '400',
                    fontSize: {
                        xs: '18px',
                        sm: '22px',
                        md: '26px',
                        lg: '30px',
                    },
                }}
            >
                {t('heroSection.ongoingProject')}
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    fontWeight: '400',
                    mt: 10,
                    fontSize: {
                        xs: '18px',
                        sm: '22px',
                        md: '26px',
                        lg: '30px',
                    },
                }}
            >
                {t('heroSection.scrollToDiscover')}
            </Typography>

            <Box mt={1} onClick={scrollToTarget} ref={targetRef}>
                <Typography
                    component="img"
                    src={down}
                    alt="Scroll Down"
                    sx={{
                        width: {
                            xs: '24px',
                            sm: '30px',
                            md: '36px',
                            lg: '40px',
                        },
                        mt: 2,
                        animation: `${bounce} 1.5s infinite ease-in-out`,
                        cursor: 'pointer',
                    }}
                />
            </Box>
        </Box>
    );
};

export default HeroSection;
