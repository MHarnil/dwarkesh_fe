import React from 'react';
import {Box} from '@mui/material';
import journeyImg from '../../assets/images/home/Group 226.png';

const Journey = () => {


    return (
        <Box
            component="img"
            src={journeyImg}
            alt="Journey"
            sx={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                display: 'block'
            }}
        />
    );
};

export default Journey;


// import React, { useState, useEffect } from 'react';
// import { Box, Grid, Typography, useTheme, useMediaQuery } from '@mui/material';
// import HomeIcon from '../../assets/images/icon/ri_community-fill.png';
// import NatureIcon from '../../assets/images/icon/fe_building.png';
// import FitnessCenterIcon from '../../assets/images/icon/Group 158.png';
// import FavoriteIcon from '../../assets/images/icon/icon-park-solid_handle-round.png';
// import tree from '../../assets/images/home/11 1.png';
// import bgtree from '../../assets/images/home/IMG-20250508-WA0035 1.png';
//
// const Journey = () => {
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//
//     const [floatY, setFloatY] = useState(0);
//     useEffect(() => {
//         let direction = 1;
//         const interval = setInterval(() => {
//             setFloatY((prev) => {
//                 const next = prev + direction;
//                 if (next > 10 || next < -10) direction *= -1;
//                 return next;
//             });
//         }, 50);
//         return () => clearInterval(interval);
//     }, []);
//
//     return (
//         <Box
//             sx={{
//                 backgroundImage: `url(${bgtree})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 position: 'relative',
//                 py: { xs: 8, md: 10 },
//                 px: 2,
//                 textAlign: 'center',
//                 overflow: 'hidden',
//             }}
//         >
//             {/* Overlay */}
//             <Box
//                 sx={{
//                     position: 'absolute',
//                     top: 0, left: 0,
//                     width: '100%',
//                     height: '100%',
//                     backgroundColor: 'rgba(0,0,0,0.3)',
//                     zIndex: 1
//                 }}
//             />
//
//             <Grid
//                 container
//                 spacing={4}
//                 alignItems="center"
//                 justifyContent="center"
//                 sx={{ position: 'relative', zIndex: 2 }}
//             >
//                 {/* Left */}
//                 <Grid item xs={12} sm={6} md={3}>
//                     <Box sx={featureBoxStyle}>
//                         <img src={HomeIcon} alt="Community Icon" style={iconImgStyle} />
//                         <Typography sx={textStyle}>Community-Centric Design</Typography>
//                     </Box>
//                     <Box sx={featureBoxStyle}>
//                         <img src={NatureIcon} alt="Nature Icon" style={iconImgStyle} />
//                         <Typography sx={textStyle}>Integration of Nature and Architecture</Typography>
//                     </Box>
//                 </Grid>
//
//                 {/* Center */}
//                 <Grid item xs={12} sm={12} md={6}>
//                     <Box sx={{ position: 'relative', height: 280 }}>
//                         <img
//                             src={tree}
//                             alt="Tree in Hand"
//                             style={{
//                                 height: isMobile ? 200 : 260,
//                                 transition: 'transform 0.2s',
//                                 transform: `translateY(${floatY}px)`,
//                                 zIndex: 3,
//                                 position: 'relative'
//                             }}
//                         />
//
//                         {/* Text */}
//                         <Box mt={4}>
//                             <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold' }}>
//                                 Our Journey
//                             </Typography>
//                             <Typography variant="subtitle1" sx={{ color: 'white' }}>
//                                 Experience Dwarkesh with Difference
//                             </Typography>
//                         </Box>
//                     </Box>
//                 </Grid>
//
//                 {/* Right */}
//                 <Grid item xs={12} sm={6} md={3}>
//                     <Box sx={{ ...featureBoxStyle, mt: 3 }}>
//                         <img src={FitnessCenterIcon} alt="Wellness Icon" style={iconImgStyle} />
//                         <Typography sx={textStyle}>Wellness-Centric Amenities</Typography>
//                     </Box>
//                     <Box sx={featureBoxStyle}>
//                         <img src={FavoriteIcon} alt="Heart Icon" style={iconImgStyle} />
//                         <Typography sx={textStyle}>Focus on Quality of Life</Typography>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };
//
// // Styles
// const featureBoxStyle = {
//     backgroundColor: 'rgba(255,255,255,0.85)',
//     p: 2,
//     borderRadius: 2,
//     textAlign: 'center',
//     maxWidth: 220,
//     margin: '0 auto',
// };
//
// const iconImgStyle = {
//     width: 40,
//     height: 40,
//     objectFit: 'contain',
//     marginBottom: 8,
// };
//
// const textStyle = {
//     mt: 1,
//     fontWeight: 'bold',
//     fontSize: '1rem',
//     color: '#222',
// };
//
// export default Journey;
