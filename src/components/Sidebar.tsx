import { Box, Typography, Drawer } from "@mui/material";
import { MENU_ITEMS } from "../constant";
import { Link } from "react-router";

interface SideMenuProps {
    isMobile?: boolean;
    mobileOpen?: boolean;
    onDrawerToggle?: () => void;
}

export const SideMenu = ({ isMobile = false, mobileOpen = false, onDrawerToggle }: SideMenuProps) => {
    const drawerContent = (
        <Box
            sx={{
                width: 240,
                height: '100vh',
                borderRight: isMobile ? 'none' : '1px solid',
                borderColor: 'divider',
                pt: '64px', // Account for AppBar height
                overflow: 'auto',
                backgroundColor: 'background.paper',
            }}
        >
            <Box sx={{ p: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {
                        MENU_ITEMS.map((item) => (
                            <Link key={item.path} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: 1.5,
                                        borderRadius: 1,
                                        cursor: 'pointer',
                                        transition: 'background-color 0.2s',
                                        '&:hover': { backgroundColor: 'action.hover' }
                                    }}
                                >
                                    <item.icon />
                                    <Typography marginLeft={2}>{item.label}</Typography>
                                </Box>
                            </Link>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );

    if (isMobile) {
        return (
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={onDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better mobile performance
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: 240,
                    },
                }}
            >
                {drawerContent}
            </Drawer>
        );
    }

    return (
        <Box
            component="nav"
            sx={{
                width: 240,
                flexShrink: 0,
                display: { xs: 'none', md: 'block' },
            }}
        >
            {drawerContent}
        </Box>
    );
}