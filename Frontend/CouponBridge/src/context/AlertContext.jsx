import { createContext, useState } from "react";

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [type, setType] = useState('success');
    const [message, setMessage] = useState('This is success alert!');
    const [open, setOpen] = useState(false);

    const showAlert = ( { type, message})=> {
        setType(type);
        setMessage(message);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    return (
        <AlertContext.Provider value = {{showAlert}}>
            { children }
            <div>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal:'right' }}>
                    <Alert
                    onClose={handleClose}
                    severity={type}
                    variant="filled"
                    sx={{ width: '100%' }}
                    >
                    {message}
                    </Alert>
                </Snackbar>
            </div>
        </AlertContext.Provider>
    );
};