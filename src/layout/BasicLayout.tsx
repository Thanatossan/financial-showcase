import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <IconButton color="inherit" edge="start" sx={{ mr: 2 }} onClick={() => {
                            setOpen(!open);
                        }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Financial Showcase
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: 240,
                            boxSizing: 'border-box',
                        },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Overall" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
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