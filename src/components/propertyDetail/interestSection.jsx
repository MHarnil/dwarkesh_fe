import React from 'react';
import {
    Grid,
    Typography,
    Button,
    Box,
    FormControl,
    OutlinedInput,
    Container
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import RoomIcon from '@mui/icons-material/Room';
import {useParams} from "react-router-dom";
import propertyFloorPlans from '../propertyFloorPlans';

const InterestSection = () => {
    const { id } = useParams();
    const property = propertyFloorPlans.find((item) => item.id === Number(id));
    return (
        <Container maxWidth="lg" sx={{py: 6}}>
            <Grid container spacing={3} alignItems="start" justifyContent="center">
                <Grid item xs={12} sm={6} md={6}
                      sx={{backgroundColor: '#EBEBEB', p: 5, width: {xs: '100%', md: '48%'} }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{fontSize:{xs:'28px',md:'38px'}, fontWeight: '700'}}>
                        Show Your Interest
                    </Typography>
                    <Typography sx={{color: '#CA7306', mb: 2, fontSize: '15px', fontWeight: '700'}}>
                        Provide your details below to submit your interest.
                    </Typography>

                    <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '50px'}}>
                        <OutlinedInput
                            placeholder="Project Interested For – Dwarkesh"
                            sx={{
                                height: '50px',
                                border: 'none',
                                borderRadius: '0px',
                                '& fieldset': {
                                    border: 'none',
                                },
                            }}
                        />
                    </FormControl>

                    <Box sx={{display: 'flex', gap: 2, flexDirection: {xs: 'column', sm: 'row'}}}>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '50px'}}>
                            <OutlinedInput
                                placeholder="First Name *"
                                sx={{
                                    height: '50px',
                                    border: 'none',
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '50px'}}>
                            <OutlinedInput
                                placeholder="Last Name *"
                                sx={{
                                    height: '50px',
                                    border: 'none',
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                    </Box>

                    <Box sx={{display: 'flex', gap: 2, flexDirection: {xs: 'column', sm: 'row'}}}>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '50px'}}>
                            <OutlinedInput
                                placeholder="Contact No *"
                                sx={{
                                    height: '50px',
                                    border: 'none',
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '50px'}}>
                            <OutlinedInput
                                placeholder="Email ID *"
                                sx={{
                                    height: '50px',
                                    border: 'none',
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                    </Box>

                    <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF'}}>
                        <OutlinedInput
                            placeholder="Your Message *"
                            multiline
                            rows={4}
                            sx={{
                                border: 'none',
                                borderRadius: '0px',
                                '& fieldset': {
                                    border: 'none',
                                },
                                padding: '12px 14px',
                            }}
                        />
                    </FormControl>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 2,
                            background: 'linear-gradient(to bottom, #CDA049, #675025)',
                            color: '#fff',
                            width: {xs: '200px', sm: '225px', md: '250px'},
                            height: {xs: '60px', sm: '72px', md: '65px'},
                            fontSize: {xs: '16px', sm: '18px', md: '22px'},
                            padding: {xs: '10px 20px', sm: '12px 24px', md: '14px 28px'},
                            fontWeight: '500',
                            textTransform: 'none',
                            borderRadius: '5px',
                            '&:hover': {
                                background: 'linear-gradient(to bottom, #B5943F, #4F3B21)',
                            },
                        }}
                    >
                        Submit Interest
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6} md={6} sx={{width: {xs: '100%', md: '48%'}}}>
                    {property.mapEmbedUrl && (
                    <Box
                        sx={{
                            width: '100%',
                            height: {xs: 300, md: 460},
                            overflow: 'hidden',
                            mb: 3,
                        }}
                    >
                        <iframe
                            src={property.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{border: 'none'}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Karunesh Business Center"
                        ></iframe>
                    </Box>
                    )}

                    <Box display="flex" alignItems="center" pb={2} my={2} sx={{borderBottom: '2px solid #CA730680'}}>
                        <PhoneIcon sx={{color: '#CA7306', mr: 1, fontSize: '28px'}}/>
                        <Typography>+91 96018 15727</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" pb={2} my={2} sx={{borderBottom: '2px solid #CA730680'}}>
                        <RoomIcon sx={{color: '#CA7306', mr: 1, fontSize: '28px'}}/>
                        <Typography>
                            6XW2+RJ, Pasodara, Surat, Gujarat 394236
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InterestSection;
