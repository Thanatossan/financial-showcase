import { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { RouterDefinition } from './route/RouterDefinition'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    }
  }
})
const theme = createTheme({
  palette: {
    primary: {
      main: '#d94d99',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
})


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={RouterDefinition}>
          </RouterProvider>
        </ThemeProvider>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
