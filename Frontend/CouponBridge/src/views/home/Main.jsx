import HeroSection from './HeroSection.jsx';
import CouponSection from './CouponSection.jsx';
import ConcludingSection from './ConcludingSection.jsx';
import CategorySection from './CategorySection.jsx';
import HowItWorks from './HowItWorks.jsx';
import { useAuth } from '../../hooks/useAuth.js';

const Main = ({ categoryRef, howItWorksRef}) => {
  const { user } = useAuth();
  return (
    <>
        <HeroSection/>
        <CouponSection/>
        <CategorySection categoryRef={categoryRef}/>
        <HowItWorks howItWorksRef = {howItWorksRef}/>
        { !user && <ConcludingSection/>}
    </>
  )
}

export default Main