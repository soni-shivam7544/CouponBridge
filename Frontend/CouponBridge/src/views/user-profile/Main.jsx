import './Main.css';

import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GradingIcon from '@mui/icons-material/Grading';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Button from '@mui/material/Button';
import CouponCard from '../../components/CouponCard';
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { usePopup } from '../../hooks/usePopup';
import axios from 'axios';
import OrderCard from '../../components/OrderCard';

const Main= () => {

  const navigate = useNavigate();

  const {showPopup} = usePopup();
  const {user, updateUser, logout} = useAuth();
  const role = localStorage.getItem('role');
  const [option, setOption] = useState('profile');
  const [editMode,setEditMode] = useState(false);
  const [purchased, setPurchased] = useState([]);
  const [sold, setSold] = useState([]);
  const [active, setActive] = useState([]);
  const [orders, setOrders] = useState([]);
  const [isDeleteRequest, setDeleteRequest] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: '',
    email: '',
    type: '',
    createdAt:'',
    picture:''
  });

  const handleSave = () => {
    // axios call

    axios.put(`http://localhost:5050/cb/v1/api/${role}s/${user._id}`, personalData)
    .then(res => {
      console.log(res);
      updateUser(res.data.data);
    }).catch(err => {
      console.log(err.response);
    })

    setEditMode(false);
    const inputs = document.querySelectorAll('form input');
    inputs.forEach(input => {
      input.classList.add('edit-saved');
    });
  }
  const handleCancel = () => {
    // no axios call
    const prevUser = user;
    updateUser({
      ...prevUser
    });

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const imageData = new FormData();
    imageData.append('image', file);

    axios.post('http://localhost:5050/cb/v1/api/upload',imageData)
    .then(res=>{
      const updatedData = {
        ...personalData,
        picture: res.data.data.imageUrl
      }
      axios.put(`http://localhost:5050/cb/v1/api/${role}s/${user._id}`,updatedData)
      .then(res => {
        axios.get(`http://localhost:5050/cb/v1/api/${role}s/${user._id}`)
        .then(res=>{
          updateUser(res.data.data);
        }).catch(err=> console.log(err.response));

      })
      .catch(err => console.log(err.response))

    }).catch(err => console.log(err.response));
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  }

  const handleDelete = async() => {
    const response = await showPopup('Delete-Confirm', {message: 'All your data will be deleted permanantly!'});

    if (!response) return null;

    axios.delete(`http://localhost:5050/cb/v1/api/${role}s/${user._id}`)
    .then(() =>{
      logout();
      navigate('/signup');
    }).catch(err=>console.log(err.response));
  }

  const handleDeleteActive = () => {
    setDeleteRequest({
      request: true
    });
  }

  useEffect(()=>{
    if(user){
      const date = new Date(user.createdAt);
      const memberSince = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
      setPersonalData({
        name: user.name,
        email: user.email,
        type: role || null,
        createdAt: memberSince,
        picture: user.picture || null
      })
    }

    if(role === 'customer'){

      axios.get(`http://localhost:5050/cb/v1/api/coupons/purchased`,{
        headers:{
          authorization: localStorage.getItem('token')
        }
      }).then(res=>{
        setPurchased(res.data.data);

      }).catch(err=>{
        console.log(err.response);
      });

      axios.get(`http://localhost:5050/cb/v1/api/orders`,{
        headers:{
          authorization: localStorage.getItem('token')
        }
      }).then(res=>{
        setOrders(res.data.data);
      }).catch(err => {
        console.log(err.response);
      })
    }
    if(role === 'provider'){

      axios.get('http://localhost:5050/cb/v1/api/coupons/active',{
        headers: {
          authorization: localStorage.getItem('token')
        }
      }).then(res=>{
        setActive(res.data.data);
      }).catch(err=>{
        console.log(err.response);
      });

      axios.get('http://localhost:5050/cb/v1/api/coupons/sold',{
        headers:{
          authorization: localStorage.getItem('token')
        }
      }).then(res=>{
        setSold(res.data.data);
      }).catch(err=> {
        console.log(err.response);
      })

    }

  },[user, role, isDeleteRequest]);

  return (
    <div className='profile-container'>
      <div className="profile-container-left text">
        <div className="profile-left-info">
          <div className="profile-left-info-header">
            <div className="profile-left-img">
              {user && user.picture ? 
              <img src={user.picture} alt='img'/>
              :
              <PersonOutlinedIcon sx={{fontSize:'3.5rem', backgroundColor:'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom:'0.5rem'}}/>
              }
              
            </div>
            <div className="profile-left-img-edit">
              <label htmlFor='file-upload'>
                <ModeEditOutlineOutlinedIcon sx={{fontSize:'1.5rem', backgroundColor: 'var(--color-bg)', padding: '0.5rem', borderRadius:'50%'}}/>
              </label>
              <input
                id='file-upload'
                type='file'
                onChange={handleFileChange}
              />
            </div>
          </div>
          <p className='lg-heading'>{user ? user.name :null}</p>
          <p>{user ? user.email : null}</p>
          <span style={{backgroundColor:'var(--color-bg)', borderRadius:'1rem', color:'var(--color-accent)', padding: '0rem 1rem', marginTop:'0.5rem'}}>{role ? role :null}</span>
        </div>
        <div className="profile-left-actions">
          <Button variant="text" className="profile-left-actions-item" style={{color: 'var(--color-text-secondary)'}} onClick={()=>navigate(`/users/${user._id}/favourites`)}>
            <FavoriteBorderOutlinedIcon sx={{marginRight:'1rem'}}/>
            <span>Favourites</span>
          </Button>
          <Button variant="text" className="profile-left-actions-item" style={{color: 'var(--color-danger)'}} onClick={handleLogout}>
            <LogoutIcon sx={{ marginRight:'1rem'}}/>
            <span>Logout</span>
          </Button>
          <Button variant="text" className="profile-left-actions-item" style={{color: 'var(--color-danger)'}} onClick={handleDelete}>
            <DeleteOutlineOutlinedIcon sx={{ marginRight:'1rem'}}/>
            <span>Delete Account</span>
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

            { role === 'customer' && <>
            <input id='orders' 
              type='radio' 
              name='profileOption'
              value='orders'
              checked={option == 'orders'}
              onChange={handleOptionChange}
            />
            <label htmlFor='orders' className={`profile-right-options-item ${option === 'orders'? "profile-right-options-active":""}`} style={{color:'var(--color-text-primary)'}}>
              <GradingIcon sx={{ marginRight:'1rem'}}/>
              <span>Orders ({orders && orders.length})</span>
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
              <span>Purchase ({purchased && purchased.length})</span>
            </label>
            </>}

            { role === 'provider' && 
            <>
              <input id='active' 
                type='radio' 
                name='profileOption'
                value='active'
                checked={option == 'active'}
                onChange={handleOptionChange}
              />
              <label htmlFor='active' className={`profile-right-options-item ${option === 'active'? "profile-right-options-active":""}`} style={{color:'var(--color-text-primary)'}}>
                <GradingIcon sx={{ marginRight:'1rem'}}/>
                <span>Active ({active && active.length})</span>
              </label>

              <input id='sold' 
                type='radio' 
                name='profileOption'
                value='sold'
                checked={option == 'sold'}
                onChange={handleOptionChange}
              />
              <label htmlFor='sold' className={`profile-right-options-item ${option === 'sold'? "profile-right-options-active":""}`} style={{color:'var(--color-text-primary)', marginRight:'0'}}>
                <FavoriteBorderOutlinedIcon sx={{ marginRight:'1rem'}}/>
                <span>Sold ({sold && sold.length})</span>
              </label>
            </>
            }
            
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
          {orders.map(order => {
            return <OrderCard key={order._id} data = {order}/>
          })}
        </div>: ''}
        {option == 'purchase' ?<div className="purchase-container">
          {purchased.map(item => {
            return <CouponCard key={item._id} data = { item }/>
          })}
        </div>: ''}
        {option == 'sold' ?<div className="sold-container">
          {sold.map(item => {
            return <CouponCard key={item._id} data = { item }/>
          })}
        </div>: ''}
        {option == 'active' ?<div className="active-container">
          {active.map(item => {
            return <CouponCard key={item._id} data = { item } onDelete={handleDeleteActive}/>
          })}
        </div>: ''}
      </div>
    </div>
  );
};

export default Main;