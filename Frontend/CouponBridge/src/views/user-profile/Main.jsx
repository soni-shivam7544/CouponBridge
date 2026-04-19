import './Main.css';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';import GradingIcon from '@mui/icons-material/Grading';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import Button from '@mui/material/Button';
import CouponCard from '../../components/CouponCard';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

const Main= () => {
  const {user} = useAuth();
  const role = localStorage.getItem('role');
  const [option, setOption] = useState('profile');
  const [editMode,setEditMode] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    type: '',
    createdAt:'',
  });

  const handleSave = () => {
    // axios call

    setEditMode(false);
    const inputs = document.querySelectorAll('form input');
    inputs.forEach(input => {
      input.classList.add('edit-saved');
    });
  }
  const handleCancel = () => {
    // no axios call
    setEditMode(false);
    const inputs = document.querySelectorAll('form input');
    inputs.forEach(input => {
      input.classList.add('edit-saved');
    });
  }

  const handleEdit = () => {
    setEditMode(true);
    const inputs = document.querySelectorAll('input.edit-saved');
    inputs.forEach(input => {
      input.classList.remove('edit-saved');
    });
  }
  const handlePersonalDataChange = (e) => {
    e.preventDefault();
    setPersonalData({...personalData, [e.target.name]:e.target.value});
  }

  const handleOptionChange = (e) => {
    setOption(e.target.value);
  }

  useEffect(()=>{
    if(user){
      const date = new Date(user.createdAt);
      const memberSince = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
      setPersonalData({
        name: user.name,
        email: user.email,
        type: role || null,
        createdAt: memberSince
      })
    }
  },[user, role]);

  return (
    <div className='profile-container'>
      <div className="profile-container-left text">
        <div className="profile-left-info">
          <PersonOutlinedIcon sx={{fontSize:'3.5rem', backgroundColor:'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom:'0.5rem'}}/>
          <p className='lg-heading'>{user ? user.name :null}</p>
          <p>{user ? user.email : null}</p>
          <span style={{backgroundColor:'var(--color-bg)', borderRadius:'1rem', color:'var(--color-accent)', padding: '0rem 1rem', marginTop:'0.5rem'}}>{role ? role :null}</span>
        </div>
        <div className="profile-left-actions">
          <Button variant="text" className="profile-left-actions-item" style={{color: 'var(--color-text-secondary)'}}>
            <FavoriteBorderOutlinedIcon sx={{marginRight:'1rem'}}/>
            <span>Favourites</span>
          </Button>
          <Button variant="text" className="profile-left-actions-item" style={{color: 'var(--color-danger)'}}>
            <LogoutIcon sx={{ marginRight:'1rem'}}/>
            <span>Logout</span>
          </Button>
        </div>
      </div>
      <div className="profile-container-right">
        <div className="profile-right-options-background">
          <div className="profile-right-options text">
            <input id='profile' 
              type='radio' 
              name='profileOption'
              value='profile'
              checked={option == 'profile'}
              onChange={handleOptionChange}
            />
            <label htmlFor='profile' className={`profile-right-options-item ${option === 'profile'? "profile-right-options-active":""}`} style={{color:'var(--color-text-primary)'}}>
              <SettingsOutlinedIcon sx={{ marginRight:'1rem'}}/>
              <span>Profile</span>
            </label>

            <input id='orders' 
              type='radio' 
              name='profileOption'
              value='orders'
              checked={option == 'orders'}
              onChange={handleOptionChange}
            />
            <label htmlFor='orders' className={`profile-right-options-item ${option === 'orders'? "profile-right-options-active":""}`} style={{color:'var(--color-text-primary)'}}>
              <GradingIcon sx={{ marginRight:'1rem'}}/>
              <span>Orders (1)</span>
            </label>

            <input id='purchase' 
              type='radio' 
              name='profileOption'
              value='purchase'
              checked={option == 'purchase'}
              onChange={handleOptionChange}
            />
            <label htmlFor='purchase' className={`profile-right-options-item ${option === 'purchase'? "profile-right-options-active":""}`} style={{color:'var(--color-text-primary)', marginRight:'0'}}>
              <FavoriteBorderOutlinedIcon sx={{ marginRight:'1rem'}}/>
              <span>Purchase (5)</span>
            </label>
            
          </div>
        </div>
        {option == 'profile' ?<div className="personal-container text">
          <div className="personal-container-header">
            <div className="personal-container-title">
              <p className='heading'><b>Personal Information</b></p>
              <p className='sub-heading'>Update your profile details</p>
            </div>
            {!editMode ?
              <Button variant="text" onClick={handleEdit}>
                <ModeEditOutlineOutlinedIcon sx={{marginRight: '0.5rem'}}/>
                <span>Edit</span>
              </Button>
            :
              <div>
                <Button variant="contained" onClick={handleSave} sx={{marginRight:'0.5rem'}}>
                  <DoneIcon sx={{marginRight: '0.5rem'}}/>
                  <span>Save</span>
                </Button>
                <Button variant="outlined" onClick={handleCancel} sx={{color:'var(--color-text-secondary)', borderColor: 'var(--color-text-secondary)'}}>
                  <CloseIcon sx={{marginRight: '0.5rem'}}/>
                  <span>Cancel</span>
                </Button>
              </div>
            }
            
          </div>
          <form className="personal-container-form">
            <label
              htmlFor='name'

            >Full Name
            </label>
            <input 
              id='name'
              name='name'
              value={personalData.name}
              onChange={handlePersonalDataChange}
              className='edit-saved'
              disabled={!editMode}
            />

            <label
              htmlFor='email'

            >Email
            </label>
            <input 
              id='email'
              name='email'
              value={personalData.email}
              onChange={handlePersonalDataChange}
              className='edit-saved'
              disabled={!editMode}
            />

            <label
              htmlFor='type'

            >Account Type
            </label>
            <input 
              id='type'
              name='type'
              value={personalData.type}
              className='edit-saved'
              disabled
            />

            <label
              htmlFor='createdAt'

            >Member Since
            </label>
            <input 
              id='createdAt'
              name='createdAt'
              value={personalData.createdAt}
              className='edit-saved'
              disabled
            />
          </form>
        </div>: ''}
        {option == 'orders' ?<div className="order-container">
          <p className='text'>Show Payments</p>
        </div>: ''}
        {option == 'purchase' ?<div className="purchase-container">
          <CouponCard/>
          <CouponCard/>
          <CouponCard/>
          <CouponCard/>
          <CouponCard/>
          <CouponCard/>
        </div>: ''}
      </div>
    </div>
  );
};

export default Main;