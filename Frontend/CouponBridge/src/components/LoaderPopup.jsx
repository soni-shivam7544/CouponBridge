import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Popup.css';

function LoaderPopup() {
    return(
        <div className='popup-overlay'>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress aria-label="Loading…"/>
            </Box>
        </div>
    )
}

export default LoaderPopup;