import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AlertProvider } from './context/AlertContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ThemeProvider } from '@mui/material/styles'
import { muiTheme } from './theme/muiTheme.js'
import { ThemeModeProvider } from './context/ThemeModeContext.jsx'
import { CategoryProvider } from './context/CategoryContext.jsx'
import { PopupProvider } from './context/PopupContext.jsx'
import { CartProvider } from './context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme= {muiTheme}>
        <ThemeModeProvider>
            <AuthProvider>
                <CartProvider>
                    <PopupProvider>
                        <CategoryProvider>
                                <AlertProvider>
                                    <App/>   
                                </AlertProvider>
                        </CategoryProvider>
                    </PopupProvider>
                </CartProvider>
            </AuthProvider>
        </ThemeModeProvider>
    </ThemeProvider>
)
