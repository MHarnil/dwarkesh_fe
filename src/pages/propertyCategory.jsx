import {useLocation} from 'react-router-dom';
import {Typography, Box, Grid, Card, CardMedia, Container, IconButton, Modal, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import propertyFloorPlans from "../data/propertyFloorPlans.js";
import {ArrowForward, Search, ZoomOutMap} from "@mui/icons-material";
import React, {useState} from "react";
import bgimg from '../assets/images/about/IMG-20250508-WA0051 3.webp';
import {useTranslation} from "react-i18next";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PropertyCategory = () => {
    const {t} = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const isCommercial = location.pathname === '/commercial';
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    // Filter properties based on propertyCategory key
    const properties = propertyFloorPlans(t).filter(
        (property) => property.propertyCategory === (isCommercial ? 'commercial' : 'residential')
    );

    return (
        <Box sx={{backgroundColor: '#FAFBFF'}}>
            <Box sx={{
                height: '70vh',
                width: '100%',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgimg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                textAlign: 'center',
            }}>
                <Typography variant="h2" component="h1" fontWeight="bold" sx={{mt:10, fontSize:{xs:'44px', sm:'55px'}}}>
                    {isCommercial ? t('Properties.commercialProperties') : t('Properties.residentialProperties')}
                </Typography>
                <Typography variant="h6" mt={18} sx={{fontSize:{xs:'20px', sm:'30px'}, fontWeight: '700'}}>
                    {t('Properties.location')}
                </Typography>
            </Box>

            <Container maxWidth="xl" sx={{py: 12}}>
                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    {properties?.map((property) => (
                        <Grid
                            item
                            key={property.id} size={{xs: 12, sm: 6, lg: 4}}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Card
                                onClick={() => navigate(`/property/${property.id}`)}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 3,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                    overflow: 'hidden',
                                    p: 3,
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        boxShadow: '0 10px 24px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={property.image}
                                    alt={property.name}
                                    sx={{
                                        height: 380,
                                        objectFit: 'cover',
                                        borderRadius: 3,
                                    }}
                                />
                                <Box
                                    sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        pt: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        fontSize={20}
                                        sx={{mb: 1}}
                                    >
                                        {property.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        fontSize={15}
                                        sx={{mb: 3}}
                                    >
                                        {property.location}
                                    </Typography>

                                    <Box sx={{width: '100%'}}>
                                        <Typography sx={{fontSize: '26px', fontWeight: 700, mb: 1}}>Contact for Price</Typography>
                                        <Grid container spacing={2}>
                                            {(property.propertyCategory === 'commercial' || property.propertyCategory === 'residential') && (
                                                <Grid size={property.propertyCategory === 'commercial' ? 6 : 4}>
                                                    <Box sx={{border: '1px solid #d7d7d7', borderRadius: 3, p: 1}}>
                                                        <img
                                                            src={'https://sqfthub.com/_next/static/media/Bedroom.2287479b.svg'}/>
                                                        <Typography
                                                            sx={{fontSize: {xs: '14px', sm: '14px', md: '16px'}}}>{property.propertyCategory === 'commercial' ? 'Showroom' : '3 BHK'}</Typography>
                                                    </Box>
                                                </Grid>
                                            )}
                                            <Grid size={property.propertyCategory === 'commercial' ? 6 : 4}>
                                                <Box sx={{border: '1px solid #d7d7d7', borderRadius: 3, p: 1}}>
                                                    <img
                                                        src={'https://sqfthub.com/_next/static/media/Size.94e286aa.svg'}/>
                                                    <Typography sx={{fontSize: {xs: '14px', sm: '14px', md: '16px'}}}>{property.propertyCategory === 'commercial' ? '1000 sqft.' : '2155 sqft.'}</Typography>
                                                </Box>
                                            </Grid>
                                            {property.propertyCategory === 'residential' && (
                                                <Grid size={4}>
                                                    <Box sx={{border: '1px solid #d7d7d7', borderRadius: 3, p: 1}}>
                                                        <img
                                                            src={'https://sqfthub.com/_next/static/media/Possession.b467376a.svg'}/>
                                                        <Typography sx={{
                                                            fontSize: {
                                                                xs: '14px',
                                                                sm: '14px',
                                                                md: '16px'
                                                            }
                                                        }}>Possession</Typography>
                                                    </Box>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        startIcon={<WhatsAppIcon/>}
                                        sx={{
                                            backgroundColor: '#1E2A36',
                                            color: 'white',
                                            px: 4,
                                            mt: 2,
                                            py: 1.6,
                                            borderRadius: 10,
                                            width: '100%',
                                            textTransform: 'none',
                                            fontWeight: '500',
                                            fontSize: '1.1rem',
                                            boxShadow: 'none',
                                            '&:hover': {
                                                backgroundColor: '#15202B',
                                            },
                                        }}
                                        onClick={() => {
                                            event.stopPropagation();
                                            window.open('https://wa.me/919601815727', '_blank');
                                        }}
                                    >
                                        Contact Us
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Modal
                open={openDialog}
                onClose={() => setOpenDialog(false)}
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 1300,
                }}
            >
                <Box onClick={() => setOpenDialog(false)}>
                    <img
                        src={selectedImage}
                        alt="Property Zoom"
                        style={{
                            width: '500px',
                            height: '500px',
                            objectFit: 'contain',
                            maxWidth: '100vw',
                            maxHeight: '100vh',
                        }}
                    />
                </Box>
            </Modal>
        </Box>
    );
};

export default PropertyCategory;
