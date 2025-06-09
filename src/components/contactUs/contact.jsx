import React, {useState} from 'react';
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
import {useTranslation} from "react-i18next";
import axiosInstance from "../../axiosInstance.js";

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
         project: '',
         firstName: '',
         lastName: '',
         contactNo: '',
         email: '',
         message: ''
     });

     const handleChange = (field) => (e) => {
         setFormData({ ...formData, [field]: e.target.value });
     };

     const handleSubmit = async () => {
         try {
             const res = await axiosInstance.post('/api/contact', formData);
             console.log(res.data.data);

             // Clear form after successful submit
             setFormData({
                 project: '',
                 firstName: '',
                 lastName: '',
                 contactNo: '',
                 email: '',
                 message: ''
             });
         } catch (error) {
             console.error('Submission error:', error);
         }
     };
    return (
        <Container maxWidth="lg" sx={{py: 10}}>
            <Grid container spacing={3} alignItems="start" justifyContent="center">
                <Grid item xs={12} sm={6} md={6}
                      sx={{backgroundColor: '#EBEBEB', p: 5, width: {xs: '100%', md: '48%'}}}>
                    <Typography variant="h5" fontWeight="bold" gutterBottom
                                sx={{fontSize: {xs: '28px', md: '38px'}, fontWeight: '700'}}>
                        Show Your Interest
                    </Typography>
                    <Typography sx={{color: '#CA7306', mb: 2, fontSize: '15px', fontWeight: '700'}}>
                        Provide your details below to submit your interest.
                    </Typography>

                    <FormControl fullWidth sx={{mb: 2, backgroundColor: '#FFF', height: '45px'}}>
                        <OutlinedInput
                            placeholder='Project Interested For – Dwarkesh'
                            value={formData.project}
                            onChange={handleChange('project')}
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
                                placeholder='First Name *'
                                value={formData.firstName}
                                onChange={handleChange('firstName')}
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
                                placeholder='Last Name *'
                                value={formData.lastName}
                                onChange={handleChange('lastName')}
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
                                placeholder='Contact No *'
                                value={formData.contactNo}
                                onChange={handleChange('contactNo')}
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
                                placeholder='Email ID *'
                                value={formData.email}
                                onChange={handleChange('email')}
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
                            placeholder='Your Message *'
                            multiline
                            rows={4}
                            value={formData.message}
                            onChange={handleChange('message')}
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
                        onClick={handleSubmit}
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
                    <Box display="flex" alignItems="center" pb={2} my={5} sx={{borderBottom: '2px solid #CA730680'}}>
                        <PhoneIcon sx={{color: '#CA7306', mr: 1, fontSize: '28px'}}/>
                        <Typography>{t('contact.contact.info.phone')}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Contact;
