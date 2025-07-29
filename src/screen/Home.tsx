import { Box, Grid, Typography } from "@mui/material";

export const HomeScreen = () => {
    return (
        <Grid container size={{}}>
            <Box p={2} >
                <Typography variant="h4">Overview</Typography>
                <Typography variant="body1">This is the overview screen.</Typography>
            </Box>
        </Grid>
    );
}