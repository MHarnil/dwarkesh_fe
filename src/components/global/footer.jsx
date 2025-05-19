import React from 'react';
import {
    Box, Grid, Typography, Link, IconButton, Container
} from '@mui/material';
import {
    Email, Phone, LocationOn, Facebook, Instagram, LinkedIn, YouTube
} from '@mui/icons-material';
import logo from '../../assets/images/logo/IMG_9066 2.png';

const Footer = () => {
    return (
        <Box sx={{backgroundColor: '#FBFBFB', pt: 10, pb: 3, borderTop: '1px solid #ddd'}}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="space-between">

                    {/* Logo & Contact Info */}
                    <Grid item size={{xs: 12, md: 3}}>
                        <Box sx={{mb: 3, display: 'flex', justifyContent: 'center'}}>
                            <Box component="img" src={logo} alt="Dwarkesh Logo" sx={{width: 100, height: 100}}/>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: 'flex-start', mb: 1}}>
                            <Phone sx={{mr: 1, color: '#CA7306'}}/>
                            <Typography sx={{
                                fontSize: {xs: '14px', sm: '16px', md: '18px'},
                                fontWeight: 700,
                                color: '#575151',
                                letterSpacing: '0.5px'
                            }}>
                                +91 96018 15727
                            </Typography>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: 'flex-start', mb: 1}}>
                            <Email sx={{mr: 1, color: '#CA7306'}}/>
                            <Typography sx={{
                                fontSize: {xs: '14px', sm: '16px', md: '18px'},
                                fontWeight: 700,
                                color: '#575151',
                                letterSpacing: '0.5px'
                            }}>
                                dwarkeshgroupbuild@gmail.com
                            </Typography>
                        </Box>

                        <Box sx={{display: 'flex', alignItems: 'flex-start', mb: 1}}>
                            <LocationOn sx={{mr: 1, color: '#CA7306'}}/>
                            <Typography sx={{
                                fontSize: {xs: '14px', sm: '16px', md: '18px'},
                                fontWeight: 700,
                                color: '#575151',
                                letterSpacing: '0.5px'
                            }}>
                                00 - street, area, landmark<br/>city - pincode.
                            </Typography>
                        </Box>

                        <Box sx={{mt: 2}}>
                            <IconButton size="large"><Facebook sx={{color: '#CA7306'}}/></IconButton>
                            <IconButton size="large"><Instagram sx={{color: '#CA7306'}}/></IconButton>
                            <IconButton size="large"><LinkedIn sx={{color: '#CA7306'}}/></IconButton>
                            <IconButton size="large"><YouTube sx={{color: '#CA7306'}}/></IconButton>
                        </Box>
                    </Grid>

                    {/* Residential */}
                    <Grid item size={{xs: 12, md: 3}}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '20px', md: '22px'},
                            color: '#CA7306',
                            mb: 2
                        }}>
                            RESIDENTIAL
                        </Typography>
                        <Typography sx={itemStyle}>KARUNESH LUXURIA</Typography>
                        <Typography sx={itemStyle}>KARUNESH TOWER</Typography>
                        <Typography sx={itemStyle}>KARUNESH VILLA</Typography>
                        <Typography sx={itemStyle}>KARUNESH VILLA 2</Typography>
                        <Typography sx={itemStyle}>KARUNESH PARK</Typography>
                        <Typography sx={itemStyle}>ICON VILLA</Typography>
                        <Typography sx={itemStyle}>KARUENSH HOMES</Typography>
                    </Grid>

                    {/* Commercial */}
                    <Grid item size={{xs: 12, md: 3}}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '20px', md: '22px'},
                            color: '#CA7306',
                            mb: 2
                        }}>
                            COMMERCIAL
                        </Typography>
                        <Typography sx={itemStyle}>KARUNESH BUSINESS CENTER - 1</Typography>
                        <Typography sx={itemStyle}>KARUNESH BUSINESS CENTER - 2</Typography>
                        <Typography sx={itemStyle}>KARUNESH BUSINESS CENTER - 3</Typography>
                        <Typography sx={itemStyle}>KARUNESH TEXPA</Typography>
                        <Typography sx={itemStyle}>KARUNESH ECOPARK</Typography>
                    </Grid>

                    {/* Reach Us */}
                    <Grid item size={{xs: 12, md: 3}}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '20px', md: '22px'},
                            color: '#CA7306',
                            mb: 2
                        }}>
                            REACH US
                        </Typography>
                        <Typography sx={itemStyle}>CONTACT US</Typography>
                        <Typography sx={itemStyle}>CAREERS</Typography>
                        <Typography sx={itemStyle}>BLOGS</Typography>
                    </Grid>
                </Grid>

                {/* Bottom Bar */}
                <Box sx={{mt: 4, borderTop: '1px solid #eee', pt: 2}}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#575151',
                            fontSize: {xs: '14px', sm: '16px', md: '18px'},
                            fontWeight: 600,
                            textAlign: 'start',
                            px: 2,
                            lineHeight: 1.5
                        }}
                    >
                        © 2025 Dwarkesh Group. All Rights Reserved –
                        <Link href="#" underline="hover" sx={{color: '#575151', mx: 1}}>Disclaimer</Link>•
                        <Link href="#" underline="hover" sx={{color: '#575151', mx: 1}}>Privacy Policy</Link>•
                        <Link href="#" underline="hover" sx={{color: '#575151', mx: 1}}>Cookie Policy</Link>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

const itemStyle = {
    mb: 1,
    fontSize: {xs: '14px', sm: '16px', md: '18px'},
    fontWeight: 700,
    color: '#575151',
    letterSpacing: '0.5px',
};

export default Footer;
