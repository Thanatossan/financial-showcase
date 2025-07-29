import { AppBar, Box, Toolbar, Typography, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideMenu } from '../components/Sidebar';

const BasicLayout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                        <Typography variant="h6" noWrap component="div">
                            Financial Showcase
                        </Typography>
                    </Toolbar>
                </AppBar>
                <SideMenu
                    isMobile={isMobile}
                    mobileOpen={mobileOpen}
                    onDrawerToggle={handleDrawerToggle}
                />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, minHeight: '100vh' }}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default BasicLayout;