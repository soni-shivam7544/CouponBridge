import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import Main from './Main.jsx';
import { useRef, useEffect} from 'react';

function Home() {

    const categoryRef = useRef(null);
    const howItWorksRef = useRef(null);

    useEffect(() => {
        const target = sessionStorage.getItem("scrollTo");

        if (target === "categories" && categoryRef.current) {
            // wait for layout to settle
            requestAnimationFrame(()=> {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        categoryRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                        });
                    });
                });
            });
        }
        
        if( target === "how-it-works" && howItWorksRef.current) {

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        howItWorksRef.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    });
                });
            });
        }

        sessionStorage.removeItem("scrollTo");
    }, []);

    return (
        <>
            <Navbar/>
            <Main categoryRef= {categoryRef} howItWorksRef= {howItWorksRef}/>
            <Footer/>
        </>
    )
}

export default Home;