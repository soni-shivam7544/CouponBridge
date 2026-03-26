import './CouponSection.css';
import '../../App.css';
import CouponCard from '../../components/CouponCard.jsx';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CouponSection() {

    const [coupons, setCoupons] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        axios.get('http://localhost:5050/cb/v1/api/coupons')
            .then(res => {
                let data = res.data.data;
                let newData = [];
                for(let i=0;i<data.length && i<4;i++) {
                    newData.push(data[i]);
                }
            setCoupons(newData);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="coupon-section">
                <div className="coupon-header-section">
                    <div className="coupon-header">
                        <p className="header-title section-heading">Featured Coupons</p>
                        <p className="header-desc sub-heading">Hand-picked deals from our top sellers</p>
                    </div>
                    <div className="view-all sub-heading" onClick={ ()=> navigate('/coupons')}>
                        View All
                        <ArrowForwardIcon  sx={{marginLeft: '1rem'}}/>
                    </div>
                </div>
                <div className="coupon-list">
                    { coupons.map( coupon => {
                        return <CouponCard key={ coupon._id} data={ coupon }/>
                    } ) }
                </div>
            </div>
        </>
    );
}


export default CouponSection;