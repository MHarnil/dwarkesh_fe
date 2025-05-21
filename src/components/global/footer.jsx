import React from 'react';
import {
    Box, Grid, Typography, Link, IconButton, Container
} from '@mui/material';
import {
    Email, Phone, LocationOn, Facebook, Instagram, LinkedIn, YouTube
} from '@mui/icons-material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo/IMG_9066 2.png';
import propertyFloorPlans from "../propertyFloorPlans.js";

const Footer = () => {

    const navigate = useNavigate();

    // Filter projects by propertyType
    const residentialProjects = propertyFloorPlans.filter(p => p.propertyType === 'Residential');
    const commercialProjects = propertyFloorPlans.filter(p => p.propertyType === 'Commercial');

    return (
        <Box sx={{backgroundColor: '#FBFBFB', pt: 10, pb: 3, borderTop: '1px solid #ddd'}}>
            <Container maxWidth="xl">
                <Grid container spacing={4} justifyContent="space-between">

                    {/* Logo & Contact Info */}
                    <Grid item size={{xs: 12, md: 4}} sx={{textAlign: {xs: 'center', md: 'left'}}}>
                        <Box sx={{mb: 3, display: 'flex', justifyContent: 'center'}}>
                            <Box component="img" src={logo} alt="Dwarkesh Logo"
                                 sx={{width: 100, height: 100, cursor: 'pointer'}} onClick={() => navigate('/')}/>
                        </Box>

                        <Link href="tel:+919601815727" style={{textDecoration: 'none'}}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: {xs: 'center', md: 'left'},
                                mb: 1
                            }}>
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
                        </Link>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: {xs: 'center', md: 'left'},
                            mb: 1
                        }}>
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

                        <Box sx={{mt: 2}}>
                            <IconButton size="large"><Facebook sx={{color: '#CA7306'}}/></IconButton>
                            <IconButton size="large"><Instagram sx={{color: '#CA7306'}}/></IconButton>
                            <IconButton size="large"><LinkedIn sx={{color: '#CA7306'}}/></IconButton>
                        </Box>
                    </Grid>

                    {/* Residential */}
                    <Grid item size={{xs: 12, md: 3}} sx={{textAlign: {xs: 'center', md: 'left'}}}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '20px', md: '22px'},
                            color: '#CA7306',
                            mb: 2
                        }}>
                            <RouterLink
                                to={`/residential`}
                                style={{textDecoration: 'none', color: '#CA7306', fontWeight: 700}}
                            >
                                RESIDENTIAL
                            </RouterLink>
                        </Typography>
                        {residentialProjects.map((project) => (
                            <Typography key={project.id} sx={itemStyle}>
                                <RouterLink
                                    to={`/property/${project.id}`}
                                    style={{textDecoration: 'none', color: '#575151', fontWeight: 700}}
                                >
                                    {project.name}
                                </RouterLink>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Commercial */}
                    <Grid item size={{xs: 12, md: 3}} sx={{textAlign: {xs: 'center', md: 'left'}}}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '20px', md: '22px'},
                            color: '#CA7306',
                            mb: 2
                        }}>
                            <RouterLink
                                to={`/commercial`}
                                style={{textDecoration: 'none', color: '#CA7306', fontWeight: 700}}
                            >
                                COMMERCIAL
                            </RouterLink>
                        </Typography>
                        {commercialProjects.map((project) => (
                            <Typography key={project.id} sx={itemStyle}>
                                <RouterLink
                                    to={`/property/${project.id}`}
                                    style={{textDecoration: 'none', color: '#575151', fontWeight: 700}}
                                >
                                    {project.name}
                                </RouterLink>
                            </Typography>
                        ))}
                    </Grid>

                    {/* Reach Us */}
                    <Grid item size={{xs: 12, md: 2}} sx={{textAlign: {xs: 'center', md: 'left'}}}>
                        <Typography variant="h6" sx={{
                            fontWeight: 700,
                            fontSize: {xs: '18px', sm: '20px', md: '22px'},
                            color: '#CA7306',
                            mb: 2,
                        }}>
                            REACH US
                        </Typography>
                        <Typography sx={itemStyle}>
                            <RouterLink
                                to={`/contact`}
                                style={{textDecoration: 'none', color: '#575151', fontWeight: 700}}
                            >
                                CONTACT US
                            </RouterLink>
                        </Typography>
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
