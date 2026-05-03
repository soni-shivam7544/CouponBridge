import HeroSection from './HeroSection.jsx';
import CouponSection from './CouponSection.jsx';
import ConcludingSection from './ConcludingSection.jsx';
import CategorySection from './CategorySection.jsx';

const Main = ({ categoryRef}) => {
  return (
    <>
        <HeroSection/>
        <CouponSection/>
        <CategorySection categoryRef={categoryRef}/>
        <ConcludingSection/>
    </>
  )
}

export default Main