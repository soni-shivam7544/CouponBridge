import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AlertProvider } from './context/AlertContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { muiTheme } from './theme/muiTheme.js'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme= {muiTheme}>
        <AuthProvider>
            <AlertProvider>
                <App/>   
            </AlertProvider>
        </AuthProvider>
    </ThemeProvider>
)
