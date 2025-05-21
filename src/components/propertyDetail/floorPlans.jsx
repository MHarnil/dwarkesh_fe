import React, { useState } from 'react';
import {
    Grid,
    Typography,
    Box,
    Container,
    Modal,
} from '@mui/material';
import propertyFloorPlans from '../propertyFloorPlans.js';
import { useParams } from "react-router-dom";
import {useTranslation} from "react-i18next";

const FloorPlansSection = () => {
    const { id } = useParams();
    const floorData = propertyFloorPlans.find(plan => plan.id === Number(id));
    const { t } = useTranslation();

    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (img) => {
        setSelectedImage(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage(null);
    };

    if (!floorData) {
        return (
            <Container sx={{ mt: 10 }}>
                <Typography variant="h5" align="center">No Floor Plans Found</Typography>
            </Container>
        );
    }

    return (
        <Box sx={{ padding: 3, mt: 10 }}>
            <Container>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                        fontSize: { xs: '30px', sm: '40px', md: '50px' },
                        fontWeight: '700',
                    }}
                >
                    {t('floorPlans.title')}
                </Typography>

                <Grid container spacing={3} justifyContent="center">
                    {floorData?.floorPlans?.map((plan, index) => (
                        <Grid item size={{xs:6,sm:4}} key={index}>
                            <Box onClick={() => handleOpen(plan.img)} sx={{ cursor: 'pointer' }}>
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <img
                                        src={plan.img}
                                        alt={plan.title}
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'contain',
                                            display: 'block',
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(to bottom, #D841004D, #D841004D)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            '&:hover': {
                                                opacity: 1,
                                            },
                                        }}
                                    />
                                </Box>

                                <Typography
                                    variant="h6"
                                    align="start"
                                    sx={{
                                        marginTop: 3,
                                        borderBottom: '2px solid #C4C4C4',
                                        pb: 1,
                                        color: '#CA7306',
                                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                        fontWeight: '700',
                                    }}
                                >
                                    {plan.title}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Modal open={open} onClose={handleClose}>
                <Box
                    onClick={handleClose}
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1300,
                        p: 2,
                    }}
                >
                    {selectedImage && (
                        <Box
                            component="img"
                            src={selectedImage}
                            alt="Fullscreen"
                            sx={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    )}
                </Box>
            </Modal>

        </Box>
    );
};

export default FloorPlansSection;
