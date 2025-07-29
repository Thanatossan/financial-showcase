import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#1E88E5' },
    secondary: { main: '#00ACC1' },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
    text: {
      primary: '#E0E0E0',
      secondary: '#9E9E9E',
    },
    success: { main: '#4CAF50' },
    error: { main: '#E53935' },
    divider: '#2C2C2C',
    action: {
      hover: '#2C2C2C',
      selected: '#424242',
      focus: '#424242',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1565C0' },
    secondary: { main: '#00838F' },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
    success: { main: '#43A047' },
    error: { main: '#D32F2F' },
    divider: '#E0E0E0',
    action: {
      hover: '#F5F5F5',
      selected: '#E3F2FD',
      focus: '#E3F2FD',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
