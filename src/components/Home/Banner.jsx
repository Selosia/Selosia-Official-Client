import HomeBannerContent from "../../utils/HomeBanner/HomeBannerContent";
import Lottie from "lottie-react";
import bannerAnimation from "./../../assets/Animations/bannerAnimation.json";

const Banner = () => {
    return (
        <div className="container m-auto lg:mt-20 mt-12">

            <div className="flex lg:flex-row flex-col justify-center items-center font-sans">
            <HomeBannerContent />
    
            <div className="lg:w-1/2">
                <Lottie animationData={bannerAnimation} loop={true} />
            </div>
            </div>
        </div>
    );
};

export default Banner;