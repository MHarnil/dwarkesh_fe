import {useLocation} from 'react-router-dom';
import {Typography, Box, Grid, Card, CardMedia, Container, IconButton, Modal} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import propertyFloorPlans from "../components/propertyFloorPlans.js";
import {ArrowForward, Search, ZoomOutMap} from "@mui/icons-material";
import React, {useState} from "react";
import bgimg from '../assets/images/about/IMG-20250508-WA0051 3.png';
import {useTranslation} from "react-i18next";

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
                height: '100vh',
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
                <Typography variant="h2" component="h1" fontWeight="bold">
                    {isCommercial ? t('Properties.commercialProperties') : t('Properties.residentialProperties')}
                </Typography>
                <Typography variant="h6" mt={22} sx={{fontSize: '30px', fontWeight: '700'}}>
                    {t('Properties.location')}
                </Typography>
            </Box>

            <Container maxWidth="xl" sx={{py: 12}}>
                <Grid container spacing={2}>
                    {properties?.map((property) => (
                        <Grid item size={{xs: 6, sm: 4, md: 3, lg: 3}} key={property.id}>
                            <Card onClick={() => navigate(`/property/${property.id}`)}
                                  sx={{
                                      borderRadius: '0',
                                      cursor: 'pointer',
                                      height: '100%',
                                      width: '100%',
                                      display: 'flex',
                                      flexDirection: 'column',
                                      position: 'relative',
                                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                      overflow: 'hidden',
                                      '&:hover': {
                                          boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
                                      },
                                      '&:hover .hover-content': {
                                          opacity: 1,
                                          visibility: 'visible',
                                      }
                                  }}
                            >
                                <Box sx={{position: 'relative'}}>
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image={property.image}
                                        alt={property.name}
                                    />
                                    <Box
                                        className="hover-content"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                            color: 'white',
                                            p: {xs: 1, sm: 4},
                                            opacity: 0,
                                            visibility: 'hidden',
                                            transition: 'opacity 0.3s ease, visibility 0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <Box>
                                            <Typography variant="h6" sx={{
                                                fontWeight: '700',
                                                fontSize: {xs: '14px', sm: '22px'},
                                                color: '#fff'
                                            }}>
                                                {property.name}
                                            </Typography>
                                            <Box sx={{mt: 0.5, display: 'flex', alignItems: 'center'}}>
                                                <Typography sx={{
                                                    fontWeight: '400',
                                                    fontSize: {xs: '12px', sm: '13px'},
                                                    color: '#fff'
                                                }}>{property.location}</Typography>
                                            </Box>
                                        </Box>

                                        <Box sx={{display: 'flex', justifyContent: 'start', gap: 1, my: 2}}>
                                            <IconButton
                                                onClick={(e) => {
                                                    e.stopPropagation(); // prevents click from bubbling to Card
                                                    setSelectedImage(property.image);
                                                    setOpenDialog(true);
                                                }}
                                                sx={{
                                                    backgroundColor: '#fff',
                                                    '&:hover': {backgroundColor: '#EFBA1D'},
                                                    width: {xs: 18, sm: 45},
                                                    height: {xs: 18, sm: 45},
                                                    borderRadius: '5px',
                                                    color: '#000',
                                                    p: {xs: 2, sm: 0}
                                                }}
                                            >
                                                <ZoomOutMap/>
                                            </IconButton>
                                            <IconButton
                                                sx={{
                                                    backgroundColor: '#fff',
                                                    '&:hover': {backgroundColor: '#EFBA1D'},
                                                    width: {xs: 18, sm: 45},
                                                    height: {xs: 18, sm: 45},
                                                    borderRadius: '5px',
                                                    color: '#000',
                                                    p: {xs: 2, sm: 0}
                                                }}
                                            >
                                                <Search/>
                                            </IconButton>
                                            <IconButton onClick={() => navigate(`/property/${property.id}`)}
                                                        sx={{
                                                            backgroundColor: '#fff',
                                                            '&:hover': {backgroundColor: '#EFBA1D'},
                                                            width: {xs: 18, sm: 45},
                                                            height: {xs: 18, sm: 45},
                                                            borderRadius: '5px',
                                                            color: '#000',
                                                            p: {xs: 2, sm: 0}
                                                        }}
                                            >
                                                <ArrowForward/>
                                            </IconButton>
                                        </Box>
                                    </Box>
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
