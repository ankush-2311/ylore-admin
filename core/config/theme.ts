import { createTheme } from '@mui/material/styles'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6967F6',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#f9fafb',
    },
    common: {
      white: '#FFFFFF',
    },
    text: {
      primary: '#111827',
      secondary: '#6b7280',
    },
  },
  typography: {
    fontFamily: ['sans-serif', 'Arial', 'Helvetica', poppins.style.fontFamily].join(','),
    h1: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: '1.875rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  breakpoints: {
    values: {
      xs: 480,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '0.5rem',
          textTransform: 'none',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
})

export default theme
