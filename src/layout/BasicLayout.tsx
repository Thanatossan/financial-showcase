import { AppBar, Box, Toolbar, Typography } from '@mui/material';

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';

const BasicLayout = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Financial Showcase
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Sidebar />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, backgroundColor: '#fafafa', minHeight: '100vh' }}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default BasicLayout;