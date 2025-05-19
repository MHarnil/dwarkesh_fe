import React, {useRef} from 'react';
import {Grid, Typography, Box, Button, useMediaQuery, useTheme} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const stats = [
    {
        value: '94%',
        description: 'of the world’s population breathes polluted air',
    },
    {
        value: '42',
        description: 'million trees are cut down every day worldwide',
    },
    {
        value: '2X',
        description: 'The asthma rate in India is significant, with approximately 34.3 million individuals affected',
    },
];

const StatBox = ({value, description}) => (
    <Box
        sx={{
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'start',
            padding: 2,
        }}
    >
        <Typography sx={{fontSize: '34px', fontWeight: 300, lineHeight: 1.2}}>
            {value}
        </Typography>
        <Typography
            sx={{
                fontSize: {xs: '1rem', sm: '1.1rem'},
                mt: 1,
                fontWeight: 300,
                maxWidth: '470px',
            }}
        >
            {description}
        </Typography>
    </Box>

);

const StatsSection = () => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    return (
        <Box sx={{p: 4}}>
            {isDesktop ? (
                <Grid container spacing={3} justifyContent="center">
                    {stats?.map((stat, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <StatBox value={stat.value} description={stat.description}/>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Box sx={{position: 'relative'}}>
                    <Button
                        onClick={handlePrev}
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            left: {xs: '-7%', sm: '-3%'},
                            zIndex: 2,
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            height: 50,
                            width: 50,
                            minWidth: 0,
                            boxShadow: 1,
                            color: '#575151',
                            '&:hover': {transform: 'scale(0.9)'},
                        }}
                    >
                        <KeyboardArrowLeftIcon/>
                    </Button>

                    <Button
                        onClick={handleNext}
                        sx={{
                            position: 'absolute',
                            top: '30%',
                            right: {xs: '-7%', sm: '-3%'},
                            zIndex: 2,
                            backgroundColor: '#fff',
                            border: '1px solid #ccc',
                            borderRadius: '50%',
                            height: 50,
                            width: 50,
                            minWidth: 0,
                            boxShadow: 1,
                            color: '#575151',
                            '&:hover': {transform: 'scale(0.9)'},
                        }}
                    >
                        <KeyboardArrowRightIcon/>
                    </Button>

                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        autoplay={{delay: 3000, disableOnInteraction: false}}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            }
                        }}
                    >
                        {stats?.map((stat, index) => (
                            <SwiperSlide key={index}>
                                <StatBox value={stat.value} description={stat.description}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            )}
        </Box>
    );
};

export default StatsSection;
