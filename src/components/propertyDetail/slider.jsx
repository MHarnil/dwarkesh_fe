// import React, { useState, useRef, useEffect } from 'react';
// import {
//     Box,
//     Typography,
//     IconButton,
//     ImageListItem,
//     useMediaQuery,
//     useTheme,
// } from '@mui/material';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import slider1 from '../../assets/images/side1/slider/IMG-20250508-WA0054 1.png';
// import slider2 from '../../assets/images/side1/slider/IMG-20250508-WA0036 2.png';
//
// const ProjectGallerySlider = () => {
//     const theme = useTheme();
//     const isXs = useMediaQuery(theme.breakpoints.down('sm'));
//     const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
//
//     const projectImages = [slider1, slider2, slider1, slider2, slider1, slider2, slider1];
//
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const thumbnailContainerRef = useRef(null);
//
//     const THUMBNAIL_SIZE = isXs ? 100 : isSm ? 130 : 170;
//     const THUMBNAIL_GAP = 8;
//     const THUMBNAILS_VISIBLE = isXs ? 3 : isSm ? 4 : 5;
//
//     const goToNext = () => {
//         setCurrentIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1));
//     };
//
//     const goToPrev = () => {
//         setCurrentIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1));
//     };
//
//     const goToSlide = (index) => {
//         setCurrentIndex(index);
//     };
//
//     useEffect(() => {
//         const container = thumbnailContainerRef.current;
//         if (container) {
//             const thumbnailWidth = THUMBNAIL_SIZE + THUMBNAIL_GAP;
//             const centerOffset = Math.floor(THUMBNAILS_VISIBLE / 2);
//             const scrollPos = (currentIndex - centerOffset) * thumbnailWidth;
//
//             container.scrollTo({
//                 left: scrollPos,
//                 behavior: 'smooth',
//             });
//         }
//     }, [currentIndex, THUMBNAIL_SIZE, THUMBNAILS_VISIBLE]);
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) =>
//                 prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
//             );
//         }, 2000); // auto-slide every 2 seconds
//
//         return () => clearInterval(interval); // cleanup interval on unmount
//     }, [projectImages.length]);
//
//
//     return (
//         <>
//             {/* Gray header background - only on top */}
//             <Box bgcolor="#f5f5f5" pb={isXs ? 10 : 40} mb={isXs ? -10 : -40} >
//                 <Typography
//                     variant="h5"
//                     align="center"
//                     gutterBottom
//                     sx={{
//                         py: isXs ? 4 : 8,
//                         fontSize: { xs: '24px', sm: '30px', md: '40px' },
//                         fontWeight: '700',
//                         mb:0
//                     }}
//                 >
//                     Project Gallery
//                 </Typography>
//             </Box>
//
//             {/* White card-like container overlaps gray */}
//             <Box
//                 maxWidth="lg"
//                 mx="auto"
//                 bgcolor="#FFF"
//                 p={{ xs: 2, sm: 4, md: 8 }}
//                 sx={{
//                     mt: isXs ? -10 : -16,
//                     position: 'relative',
//                     zIndex: 1,
//                 }}
//             >
//                 {/* Main Image */}
//                 <Box position="relative" mb={2}>
//                     <Box sx={{ overflow: 'hidden' }}>
//                         <img
//                             src={projectImages[currentIndex]}
//                             alt={`Project image ${currentIndex + 1}`}
//                             style={{
//                                 width: '100%',
//                                 height: isXs ? 200 : isSm ? 350 : 500,
//                                 objectFit: 'cover',
//                             }}
//                         />
//                     </Box>
//
//                     {/* Navigation Arrows */}
//                     <IconButton
//                         onClick={goToPrev}
//                         sx={{
//                             position: 'absolute',
//                             left: { xs: 10, sm: 10, md: -50 },
//                             top: '50%',
//                             transform: 'translateY(-50%)',
//                             backgroundColor: 'white',
//                             border: '2px solid #CA7306',
//                             color: '#CA7306',
//                             '&:hover': { backgroundColor: '#f0f0f0' },
//                             zIndex: 2,
//                         }}
//                         aria-label="Previous image"
//                     >
//                         <ChevronLeftIcon />
//                     </IconButton>
//
//                     <IconButton
//                         onClick={goToNext}
//                         sx={{
//                             position: 'absolute',
//                             right: { xs: 10, sm: 10, md: -50 },
//                             top: '50%',
//                             transform: 'translateY(-50%)',
//                             backgroundColor: 'white',
//                             border: '2px solid #CA7306',
//                             color: '#CA7306',
//                             '&:hover': { backgroundColor: '#f0f0f0' },
//                             zIndex: 2,
//                         }}
//                         aria-label="Next image"
//                     >
//                         <ChevronRightIcon />
//                     </IconButton>
//                 </Box>
//
//                 {/* Thumbnails */}
//                 <Box
//                     ref={thumbnailContainerRef}
//                     sx={{
//                         display: 'flex',
//                         overflowX: 'auto',
//                         gap: `${THUMBNAIL_GAP}px`,
//                         width: `${(THUMBNAIL_SIZE + THUMBNAIL_GAP) * THUMBNAILS_VISIBLE - THUMBNAIL_GAP}px`,
//                         mx: 'auto',
//                         pb: 1,
//                         scrollbarWidth: 'none',
//                         '&::-webkit-scrollbar': { display: 'none' },
//                     }}
//                 >
//                     {projectImages.map((image, index) => (
//                         <Box
//                             key={index}
//                             onClick={() => goToSlide(index)}
//                             sx={{
//                                 position: 'relative',
//                                 cursor: 'pointer',
//                                 flexShrink: 0,
//                                 width: `${THUMBNAIL_SIZE}px`,
//                                 height: `${THUMBNAIL_SIZE}px`,
//                                 overflow: 'hidden',
//                             }}
//                         >
//                             <ImageListItem sx={{ width: '100%', height: '100%' }}>
//                                 <img
//                                     src={image}
//                                     alt={`Thumbnail ${index + 1}`}
//                                     style={{
//                                         width: '100%',
//                                         height: '100%',
//                                         objectFit: 'cover',
//                                     }}
//                                 />
//                             </ImageListItem>
//
//                             {index !== currentIndex && (
//                                 <Box
//                                     sx={{
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                         width: '100%',
//                                         height: '100%',
//                                         background: 'rgba(255, 255, 255, 0.5)',
//                                         zIndex: 1,
//                                     }}
//                                 />
//                             )}
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>
//         </>
//     );
// };
//
// export default ProjectGallerySlider;


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

const ProjectGallerySlider = () => {
    const { id } = useParams();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const [activeIndex, setActiveIndex] = useState(0);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [swiperRef, setSwiperRef] = useState(null);

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
                    Project Gallery
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
