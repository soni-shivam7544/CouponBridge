import './CategorySection.css';

import RestaurantIcon from '@mui/icons-material/Restaurant';
import FlightIcon from '@mui/icons-material/Flight';
import SpeakerIcon from '@mui/icons-material/Speaker';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import ExploreIcon from '@mui/icons-material/Explore';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { useGlobalCategory } from '../../hooks/useGlobalCategory';
import { useNavigate } from 'react-router-dom';

library.add(fas, far, fab)

const CategorySection = () => {

    const {changeGlobalCategory} = useGlobalCategory();
    const navigate = useNavigate();

    const handleCategoryClick = (e) => {
        console.log(e.currentTarget.getAttribute('name'));
        changeGlobalCategory(e.currentTarget.getAttribute('name'));
        navigate('/coupons');
    }
  return (
    <div className="category-section">
      <p className="section-heading">Browse by Category</p>
      <p className="sub-heading">Find deals in your favorite categories</p>
      <div className="category-container text">
        <div className="category-item" name='Food' onClick={handleCategoryClick}>
            <RestaurantIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Food</p>
        </div>
        <div className="category-item" name='Travel' onClick={handleCategoryClick}>
            <FlightIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Travel</p>
        </div>
        <div className="category-item" name='Electronics' onClick={handleCategoryClick}>
            <SpeakerIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Electronics</p>
        </div>
        <div className="category-item" name='Fashion' onClick={handleCategoryClick}>
            <FontAwesomeIcon icon="fa-solid fa-shirt" style={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Fashion</p>
        </div>
        <div className="category-item" name='Health' onClick={handleCategoryClick}>
            <FavoriteIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Health</p>
        </div>
        <div className="category-item" name='Entertainment' onClick={handleCategoryClick}>
            <CameraRollIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Entertainment</p>
        </div>
        <div className="category-item" name='Home' onClick={handleCategoryClick}>
            <HomeIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Home</p>
        </div>
        <div className="category-item" name='Other' onClick={handleCategoryClick}>
            <ExploreIcon sx={{color: 'var(--color-primary)', backgroundColor: 'var(--color-primary-light)', borderRadius:'50%', padding: '0.5rem', marginBottom: '0.5rem', fontSize:'1.5rem'}}/>
            <p>Other</p>
        </div>
        
      </div>
    </div>
  );
};

export default CategorySection;