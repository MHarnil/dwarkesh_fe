import {useEffect, useState} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    useMediaQuery,
    useTheme,
    Container,
    Switch
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo/IMG_9066 3.png';
import phone from '../../assets/images/icon/proicons_call.png';
import {useNavigate} from "react-router-dom";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [language, setLanguage] = useState('english');

    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navItems = ['Gallery', 'About Us', 'Contact Us'];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const handleLanguageToggle = () => {
        setLanguage(prev => prev === 'english' ? 'gujarati' : 'english');
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: scrolled ? '#111' : 'transparent',
                    transition: 'background-color 0.3s ease'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar
                        sx={{
                            justifyContent: 'space-between',
                            padding: {xs: '0.5rem 1rem', md: '1rem 2rem'}
                        }}
                    >
                        <Box onClick={() => navigate('/')} sx={{width: '100px', height: '100px', cursor: 'pointer'}}>
                            <Box component="img" src={logo} sx={{width: '100%', height: '100%'}}/>
                        </Box>
                        {!isMobile && (
                            <Box sx={{display: 'flex', alignItems: 'center', gap: {md: 2, lg: 6}}}>
                                {navItems.map((item) => (
                                    <Typography
                                        key={item}
                                        sx={{
                                            cursor: 'pointer',
                                            textTransform: 'none',
                                            fontSize: '20px',
                                            fontWeight: 400,
                                            color: '#fff'
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                ))}
                            </Box>
                        )}
                        <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                            <Box sx={{display: {xs: 'none', md: 'flex'}, alignItems: 'center', gap: 1, mr: 4}}>
                                <Typography sx={{color: '#fff', fontSize: '20px'}}>Gujarati</Typography>
                                <Switch
                                    checked={language === 'english'}
                                    onChange={handleLanguageToggle}
                                    color="default"
                                    sx={{
                                        '& .MuiSwitch-thumb': {
                                            backgroundColor: '#000',
                                        },
                                        '& .MuiSwitch-track': {
                                            backgroundColor: '#fff',
                                        },
                                    }}
                                />
                                <Typography sx={{color: '#fff', fontSize: '20px'}}>English</Typography>
                            </Box>
                            <Box sx={{width: '35px', height: '35px'}}>
                                <Box component="img" src={phone} sx={{width: '100%', height: '100%'}}/>
                            </Box>

                            {isMobile && (
                                <>
                                    <IconButton edge="end" sx={{ color: '#fff' }} onClick={toggleDrawer(true)}>
                                        <MenuIcon />
                                    </IconButton>
                                    <Drawer
                                        anchor="left"
                                        open={drawerOpen}
                                        onClose={toggleDrawer(false)}
                                        PaperProps={{
                                            sx: {
                                                background: '#000',
                                                color: '#fff',
                                                width: 300,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between',
                                                position: 'relative',
                                            },
                                        }}
                                    >
                                        <IconButton
                                            onClick={toggleDrawer(false)}
                                            sx={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 10,
                                                color: '#fff',
                                                zIndex: 10,
                                            }}
                                        >
                                            ✕
                                        </IconButton>

                                        <Box
                                            sx={{ width: '100%', pt: 6 }}
                                            role="presentation"
                                            onClick={toggleDrawer(false)}
                                            onKeyDown={toggleDrawer(false)}
                                        >
                                            <List>
                                                {navItems.map((text) => (
                                                    <ListItem button key={text}>
                                                        <ListItemText
                                                            primary={text}
                                                            primaryTypographyProps={{ sx: { color: '#fff' } }}
                                                        />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 4 }}>
                                            <Typography sx={{ color: '#fff', fontSize: '20px' }}>Gujarati</Typography>
                                            <Switch
                                                checked={language === 'english'}
                                                onChange={handleLanguageToggle}
                                                color="default"
                                                sx={{
                                                    '& .MuiSwitch-thumb': {
                                                        backgroundColor: '#000',
                                                    },
                                                    '& .MuiSwitch-track': {
                                                        backgroundColor: '#fff',
                                                    },
                                                }}
                                            />
                                            <Typography sx={{ color: '#fff', fontSize: '20px' }}>English</Typography>
                                        </Box>
                                    </Drawer>
                                </>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
