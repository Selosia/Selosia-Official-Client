import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import BuyerOrderProcess from "../components/Home/BuyerOrderProcess";
import ContactUS from "../components/Home/ContactUS";
import "../css/backgroundImgAnimation.css"
import FAQ from "../components/Home/FAQ";
import OurServices from "../components/Home/OurServices";
import ProcessWeFollow from "../components/Home/ProcessWeFollow";
import ScrollTopButton from "../components/Home/ScrollTopButton";


const Home = () => {
    
    return (
        <div>
            <Banner />
            <AboutUs />
            <OurServices />
            <BuyerOrderProcess />
            <ProcessWeFollow />
            <FAQ />
            <ContactUS />
            <ScrollTopButton />
        </div>
    );
};

export default Home;