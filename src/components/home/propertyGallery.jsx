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


const PropertyGallery = () => {
    const [activeFilter, setActiveFilter] = useState('ALL');
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const filters = ['ALL', '2 BHK', '3 BHK', '4 BHK', 'ShowRooms', 'Office'];

    const filteredProperties =
        activeFilter === 'ALL'
            ? propertyFloorPlans
            : propertyFloorPlans.filter(property =>
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
                                key={filter}
                                variant={activeFilter === filter ? 'contained' : 'outlined'}
                                onClick={() => setActiveFilter(filter)}
                                sx={{
                                    minWidth: 'auto',
                                    border: 'none',
                                    boxShadow: 'none',
                                    px: {xs: 1.5, sm: 2},
                                    py: {xs: 0.5, sm: 0.75},
                                    borderRadius: '5px',
                                    fontSize: {xs: '13px', sm: '14px', md: '16px'},
                                    fontWeight: 400,
                                    backgroundColor: activeFilter === filter ? '#000' : 'transparent',
                                    color: activeFilter === filter ? '#fff' : '#747474',
                                    '&:hover': {
                                        backgroundColor: activeFilter === filter ? '#000' : '#f0f0f0',
                                    },
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {filter}
                            </Button>
                        ))}
                    </Stack>

                </Box>

                <Grid container spacing={2}>
                    {filteredProperties?.map((property) => (
                        <Grid item size={{xs: 6, md: 4, lg: 3}} key={property.id}>
                            <Card
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
                                                onClick={() => {
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

export default PropertyGallery;
