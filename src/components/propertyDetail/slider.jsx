import React, { useState } from 'react';
import {
    Box,
    Typography,
    IconButton,
    useMediaQuery,
    useTheme,
    ImageListItem,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay } from 'swiper/modules';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useParams } from 'react-router-dom';
import propertyFloorPlans from '../propertyFloorPlans';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';
import {useTranslation} from "react-i18next";

const ProjectGallerySlider = () => {
    const { id } = useParams();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperRef, setSwiperRef] = useState(null);
    const { t } = useTranslation();

    const numericId = Number(id);

    const selectedProperty = propertyFloorPlans.find(
        (property) => property.id === numericId
    );

    const projectImages = selectedProperty?.sliderImages || [];

    const THUMBNAIL_SIZE = isXs ? 100 : isSm ? 130 : 170;
    const THUMBNAIL_GAP = 8;
    const THUMBNAILS_VISIBLE = isXs ? 3 : isSm ? 4 : 5;

    return (
        <Box sx={{ pt: 3 }}>
            <Box bgcolor="#f5f5f5" pb={isXs ? 10 : 40} mb={isXs ? -10 : -40}>
                <Typography
                    variant="h5"
                    align="center"
                    gutterBottom
                    sx={{
                        py: isXs ? 4 : 8,
                        fontSize: { xs: '24px', sm: '30px', md: '40px' },
                        fontWeight: '700',
                        mb: 0,
                    }}
                >
                    {t('projectGallery.title')}
                </Typography>
            </Box>

            <Box
                maxWidth="lg"
                mx="auto"
                bgcolor="#FFF"
                p={{ xs: 2, sm: 4, md: 8 }}
                sx={{
                    mt: isXs ? -10 : -16,
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Box position="relative" mb={2}>
                    <Swiper
                        onSwiper={setSwiperRef}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[Thumbs, Navigation, Autoplay]}
                        thumbs={{ swiper: thumbsSwiper }}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        navigation={{
                            prevEl: '.swiper-prev-btn',
                            nextEl: '.swiper-next-btn',
                        }}
                        style={{
                            width: '100%',
                            height: isXs ? 200 : isSm ? 350 : 500,
                        }}
                    >
                        {projectImages?.map((image, index) => (
                            <SwiperSlide key={index}>
                                <Box sx={{ overflow: 'hidden' }}>
                                    <img
                                        src={image}
                                        alt={`Slide ${index}`}
                                        style={{
                                            width: '100%',
                                            height: isXs ? 200 : isSm ? 350 : 500,
                                            objectFit: 'cover',
                                        }}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <IconButton
                        className="swiper-prev-btn"
                        sx={{
                            position: 'absolute',
                            left: { xs: 10, sm: 10, md: -50 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'white',
                            border: '2px solid #CA7306',
                            color: '#CA7306',
                            '&:hover': { backgroundColor: '#f0f0f0' },
                            zIndex: 2,
                        }}
                    >
                        <ChevronLeftIcon />
                    </IconButton>

                    <IconButton
                        className="swiper-next-btn"
                        sx={{
                            position: 'absolute',
                            right: { xs: 10, sm: 10, md: -50 },
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'white',
                            border: '2px solid #CA7306',
                            color: '#CA7306',
                            '&:hover': { backgroundColor: '#f0f0f0' },
                            zIndex: 2,
                        }}
                    >
                        <ChevronRightIcon />
                    </IconButton>
                </Box>

                <Swiper
                    onSwiper={setThumbsSwiper}
                    modules={[Thumbs]}
                    spaceBetween={THUMBNAIL_GAP}
                    slidesPerView={THUMBNAILS_VISIBLE}
                    watchSlidesProgress
                    style={{
                        width: `${(THUMBNAIL_SIZE + THUMBNAIL_GAP) * THUMBNAILS_VISIBLE}px`,
                        margin: '0 auto',
                    }}
                >
                    {projectImages?.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    width: `${THUMBNAIL_SIZE}px`,
                                    height: { xs: '70px', sm: '86px', md: '90px' },
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <ImageListItem sx={{ width: '100%', height: '100%' }}>
                                    <img
                                        src={image}
                                        alt={`Thumbnail ${index}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            opacity: activeIndex === index ? 1 : 0.8,
                                        }}
                                    />
                                    {activeIndex !== index && (
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(255,255,255,0.4)',
                                            }}
                                        />
                                    )}
                                </ImageListItem>
                            </Box>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Box>
        </Box>
    );
};

export default ProjectGallerySlider;
