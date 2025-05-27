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


const PropertyGallery = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('ALL');
    const navigate = useNavigate();
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const filters = [
        { key: 'all', label: 'ALL' },
        { key: '2bhk', label: '2 BHK' },
        { key: '3bhk', label: '3 BHK' },
        { key: 'showrooms', label: 'ShowRooms' },
        { key: 'office', label: 'Office' },
        { key: 'commercial', label: 'Commercial' }
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
                                key={filter}
                                variant={activeFilter === filter.label ? 'contained' : 'outlined'}
                                onClick={() => setActiveFilter(filter.label)}
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
                            key={property.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center', // center card horizontally
                            }}
                        >
                            <Card
                                onClick={() => navigate(`/property/${property.id}`)}
                                sx={{
                                    width: 300,
                                    height: 500, // increased height
                                    borderRadius: 3,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
                                    overflow: 'hidden',
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
                                        height: 240, // increased image height proportionally
                                        objectFit: 'cover',
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
                                        px: 2,
                                        py: 3,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight={700}
                                        fontSize={20}
                                        sx={{ mb: 1 }}
                                    >
                                        {property.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        fontSize={15}
                                        sx={{ mb: 3 }}
                                    >
                                        {property.location}
                                    </Typography>

                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <IconButton
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedImage(property.image);
                                                setOpenDialog(true);
                                            }}
                                            sx={{
                                                backgroundColor: '#f5f5f5',
                                                '&:hover': { backgroundColor: '#EFBA1D' },
                                                width: 40,
                                                height: 40,
                                                borderRadius: 1,
                                                color: '#000',
                                            }}
                                        >
                                            <ZoomOutMap fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                backgroundColor: '#f5f5f5',
                                                '&:hover': { backgroundColor: '#EFBA1D' },
                                                width: 40,
                                                height: 40,
                                                borderRadius: 1,
                                                color: '#000',
                                            }}
                                        >
                                            <Search fontSize="small" />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => navigate(`/property/${property.id}`)}
                                            sx={{
                                                backgroundColor: '#f5f5f5',
                                                '&:hover': { backgroundColor: '#EFBA1D' },
                                                width: 40,
                                                height: 40,
                                                borderRadius: 1,
                                                color: '#000',
                                            }}
                                        >
                                            <ArrowForward fontSize="small" />
                                        </IconButton>
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
