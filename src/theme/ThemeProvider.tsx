import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { useEffect, useMemo, type ReactNode } from 'react';
import { darkTheme, lightTheme } from './theme';
import { useThemeStore } from '../stores/useThemeStore';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const mode = useThemeStore((state) => state.mode);

    const theme = useMemo(() => (mode === 'dark' ? darkTheme : lightTheme), [mode]);

    useEffect(() => {
        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const listener = (e: MediaQueryListEvent) => {
            const newMode = e.matches ? 'dark' : 'light';
            useThemeStore.getState().setMode(newMode);
        };
        media.addEventListener('change', listener);
        return () => media.removeEventListener('change', listener);
    }, []);

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
};
