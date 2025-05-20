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
import {useTranslation} from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <Container maxWidth="lg" sx={{py: 10}}>
            <Grid container spacing={3} alignItems="start" justifyContent="center">
                <Grid item xs={12} sm={6} md={6}
                      sx={{backgroundColor: '#EBEBEB', p: 5, width: {xs: '100%', md: '48%'}}}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom
                                sx={{fontSize: {xs: '28px', md: '38px'}, fontWeight: '700'}}>
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
                                '& fieldset': {
                                    border: 'none',
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
                    <Box
                        sx={{
                            width: '100%',
                            height: {xs: 300, md: 460},
                            overflow: 'hidden',
                            mb: 3,
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.860984618169!2d72.88394812151536!3d21.214237580554737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0006579271%3A0xdc2416181161d605!2sKarunesh%20Business%20Center%20KBC!5e0!3m2!1sen!2sin!4v1747035262178!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{border: 'none'}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Karunesh Business Center"
                        ></iframe>
                    </Box>
                    <Box display="flex" alignItems="center" pb={2} my={2} sx={{borderBottom: '2px solid #CA730680'}}>
                        <PhoneIcon sx={{color: '#CA7306', mr: 1, fontSize: '28px'}}/>
                        <Typography>{t('contact.contact.info.phone')}</Typography>
                    </Box>

                    <Box display="flex" alignItems="center" pb={2} my={2} sx={{borderBottom: '2px solid #CA730680'}}>
                        <RoomIcon sx={{color: '#CA7306', mr: 1, fontSize: '28px'}}/>
                        <Typography>
                            {t('contact.contact.info.address')}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
