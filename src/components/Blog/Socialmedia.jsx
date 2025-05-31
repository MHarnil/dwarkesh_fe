import React from 'react';
import { Box, Button, Stack } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Socialmedia = () => {
    return (
        <Box sx={{ py: { xs: 2, sm: 4 }, px: 2 }}>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
            >
                <Button
                    variant="contained"
                    startIcon={<FacebookIcon />}
                    sx={{
                        bgcolor: '#1877f2',
                        '&:hover': { bgcolor: '#155ab6' },
                        borderRadius: 3,
                        px: 3,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        width: { xs: '100%', sm: 'auto' },
                    }}
                >
                    Facebook
                </Button>

                <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    sx={{
                        bgcolor: '#ff0000',
                        '&:hover': { bgcolor: '#cc0000' },
                        borderRadius: 3,
                        px: 3,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        width: { xs: '100%', sm: 'auto' },
                    }}
                >
                    You Tube
                </Button>

                <Button
                    variant="contained"
                    startIcon={<InstagramIcon />}
                    sx={{
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        '&:hover': {
                            background: 'linear-gradient(45deg, #e6683c, #dc2743)',
                        },
                        borderRadius: 3,
                        px: 3,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        color: 'white',
                        width: { xs: '100%', sm: 'auto' },
                    }}
                >
                    Instagram
                </Button>

                <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                        bgcolor: '#25D366',
                        '&:hover': { bgcolor: '#1ebe5d' },
                        borderRadius: 3,
                        px: 3,
                        fontWeight: 'bold',
                        textTransform: 'none',
                        width: { xs: '100%', sm: 'auto' },
                        position: 'relative',
                    }}
                >
                    Whatsapp
                   
                </Button>
            </Stack>
        </Box>
    );
};

export default Socialmedia;
