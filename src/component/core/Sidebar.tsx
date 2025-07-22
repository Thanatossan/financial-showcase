import { Box, Typography } from "@mui/material";
import { MENU_ITEMS } from "../../utils";
import { Link } from "react-router";



export const Sidebar = () => {
    return (
        <Box
            component="nav"
            sx={{
            width: 240,
            flexShrink: 0,
            }}
        >
            <Box
            sx={{
                width: 240,
                height: '100vh',
                backgroundColor: '#fff',
                borderRight: '1px solid #e0e0e0',
                pt: '64px', // Account for AppBar height
                overflow: 'auto',
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
                            '&:hover': { backgroundColor: '#f5f5f5' }
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
        </Box>
    );
}