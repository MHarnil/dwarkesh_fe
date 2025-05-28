import React, {useState} from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Card,
    CardMedia,
    IconButton,
    Stack, Modal
} from '@mui/material';
import {ZoomOutMap, Search, ArrowForward} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";
import propertyFloorPlans from "../propertyFloorPlans.js";
import {useTranslation} from "react-i18next";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const PropertyGallery = () => {
    const {t} = useTranslation();
    const [activeFilter, setActiveFilter] = useState('ALL');
    const navigate = useNavigate();

    const filters = [
        {key: 'all', label: 'ALL'},
        {key: '2bhk', label: '2 BHK'},
        {key: '3bhk', label: '3 BHK'},
        {key: 'showrooms', label: 'ShowRooms'},
        {key: 'office', label: 'Office'},
        {key: 'commercial', label: 'Commercial'}
    ];


    const filteredProperties =
        activeFilter === 'ALL'
            ? propertyFloorPlans(t)
            : propertyFloorPlans(t).filter(property =>
                property.categories.includes(activeFilter)
            );

    return (
        <Box sx={{py: 10, backgroundColor: '#FAFBFF'}}>
            <Container maxWidth="xl">
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Stack
                        direction="row"
                        spacing={{xs: 1, sm: 2, md: 2}}
                        sx={{
                            mb: {xs: 2, sm: 3},
                            pb: 1,
                            overflowX: 'auto',
                            maxWidth: '100%',
                            '&::-webkit-scrollbar': {
                                height: '4px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#bdbdbd',
                                borderRadius: '10px',
                            },
                        }}
                    >
                        {filters?.map((filter) => (
                            <Button
                                key={filter.key}
                                variant={activeFilter === filter.label ? 'contained' : 'outlined'}
                                onClick={() => setActiveFilter(filter.label)}
                                sx={{
                                    minWidth: 'auto',
                                    border: 'none',
                                    boxShadow: 'none',
                                    px: { xs: 1.5, sm: 2 },
                                    py: { xs: 0.5, sm: 0.75 },
                                    borderRadius: '5px',
                                    fontSize: { xs: '13px', sm: '14px', md: '16px' },
                                    fontWeight: 400,
                                    backgroundColor: activeFilter === filter.label ? '#000' : 'transparent',
                                    color: activeFilter === filter.label ? '#fff' : '#747474',
                                    '&:hover': {
                                        backgroundColor: activeFilter === filter.label ? '#000' : '#f0f0f0',
                                    },
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {t(`filters.${filter.key}`)}
                            </Button>

                        ))}
                    </Stack>
                </Box>

                <Grid
                    container
                    spacing={3}
                    justifyContent="center"
                >
                    {filteredProperties?.map((property) => (
                        <Grid
                            item
                            key={property.id}  size={{xs:12, sm:6, lg:4}}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center', // center card horizontally
                            }}
                        >
                            <Card
                                onClick={() => navigate(`/property/${property.id}`)}
                                sx={{
                                    width: '100%',
                                    height: '100%', // increased height
                                    borderRadius: 3,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                    overflow: 'hidden',
                                    p:3,
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
                                        <Typography sx={{fontSize:'26px', fontWeight:700,mb:1}} >Contact for Price</Typography>
                                        <Grid container spacing={2}>
                                            <Grid size={4}>
                                                <Box sx={{border:'1px solid #000', borderRadius: 3, p:1}}>
                                                    <img
                                                        src={'https://sqfthub.com/_next/static/media/Bedroom.2287479b.svg'}/>
                                                    <Typography sx={{fontSize:{xs:'16px',sm:'14px',md:'16px'}}}>3 BHK</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid size={4}>
                                                <Box sx={{border:'1px solid #000', borderRadius: 3, p:1}}>
                                                    <img
                                                        src={'https://sqfthub.com/_next/static/media/Size.94e286aa.svg'}/>
                                                    <Typography sx={{fontSize:{xs:'16px',sm:'14px',md:'16px'}}}>2155 sqft.</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid size={4}>
                                                <Box sx={{border:'1px solid #000', borderRadius: 3, p:1}}>
                                                    <img
                                                        src={'https://sqfthub.com/_next/static/media/Possession.b467376a.svg'}/>
                                                    <Typography sx={{fontSize:{xs:'16px',sm:'14px',md:'16px'}}}>Possession</Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        startIcon={<WhatsAppIcon />}
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
        </Box>
    );
};

export default PropertyGallery;
