import './deleteConfirmPopup.css';

import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';import Button from '@mui/material/Button';

const DeleteConfirmPopup = () => {
  return (
    <div className='popup-overlay'>
      <div className="popup-content">
        <WarningAmberOutlinedIcon sx={{fontSize:'4rem', color: 'var(--color-danger)', backgroundColor: 'var(--color-bg)', padding: '1rem', borderRadius: '50%'}}/>
        <p className='lg-heading' style={{color:'var(--color-danger)', margin: '0.5rem 0rem'}}>Confirm Delete!</p>
        <p className='sub-heading'>This action can not be undone.</p>
        <p className='sub-heading'> All your data will be deleted permanantly!</p>
        <div className="popup-action" style={{margin: '1.5rem 0rem 0rem'}}>
            <Button variant="contained" sx={{backgroundColor:'var(--color-danger)', ":hover":{backgroundColor:'var(--color-danger-hover)'}}}>Delete</Button>
            <Button variant="contained"sx={{backgroundColor:'var(--color-btn-secondary-bg)', color: 'var(--color-btn-secondary-text)'}}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmPopup;