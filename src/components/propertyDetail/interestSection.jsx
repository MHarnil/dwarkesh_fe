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
import {useTranslation} from "react-i18next";

const InterestSection = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const property = propertyFloorPlans(t).find((item) => item.id === Number(id));
    return (
        <Container maxWidth="lg" sx={{py: 6}}>
            <Grid container spacing={3} alignItems="start" justifyContent="center">
                <Grid item xs={12} sm={6} md={6}
                      sx={{backgroundColor: '#EBEBEB', p: 5, width: {xs: '100%', md: '48%'} }}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom sx={{fontSize:{xs:'28px',md:'38px'}, fontWeight: '700'}}>
                        {t('contact.contact.form.title')}
                    </Typography>
                    <Typography sx={{color: '#CA7306', mb: 2, fontSize: '15px', fontWeight: '700'}}>
                        {t('contact.contact.form.subtitle')}
                    </Typography>

                    <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '45px'}}>
                        <OutlinedInput
                            placeholder={t('contact.contact.form.placeholders.project')}
                            sx={{
                                height: '45px',
                                border: 'none',
                                borderRadius: '0px',
                                color: '#CA7306',
                                '& fieldset': {
                                    border: 'none',
                                },
                                '& input::placeholder': {
                                    color: '#CA7306',
                                    opacity: 1,
                                },
                            }}
                        />

                    </FormControl>

                    <Box sx={{display: 'flex', gap: 2, flexDirection: {xs: 'column', sm: 'row'}}}>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '45px'}}>
                            <OutlinedInput
                                placeholder={t('contact.contact.form.placeholders.firstName')}
                                sx={{
                                    height: '45px',
                                    border: 'none',
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '45px'}}>
                            <OutlinedInput
                                placeholder={t('contact.contact.form.placeholders.lastName')}
                                sx={{
                                    height: '45px',
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
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '45px'}}>
                            <OutlinedInput
                                placeholder={t('contact.contact.form.placeholders.contactNo')}
                                sx={{
                                    height: '45px',
                                    border: 'none',
                                    borderRadius: '0px',
                                    '& fieldset': {
                                        border: 'none',
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '45px'}}>
                            <OutlinedInput
                                placeholder={t('contact.contact.form.placeholders.email')}
                                sx={{
                                    height: '45px',
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
                            placeholder={t('contact.contact.form.placeholders.message')}
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
                        {t('contact.contact.form.submit')}
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
                        <Typography>+91 {property.phoneNo}</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" pb={2} my={2} sx={{borderBottom: '2px solid #CA730680'}}>
                        <RoomIcon sx={{color: '#CA7306', mr: 1, fontSize: '28px'}}/>
                        <Typography>
                            {property.address}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default InterestSection;
