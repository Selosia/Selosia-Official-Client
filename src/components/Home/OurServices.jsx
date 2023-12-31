import HomeOurServicesHeadingsContent from "../../utils/HomeOurServices/HomeOurServicesHeadingsContent";
import HomeOurServicesCards from "../../utils/HomeOurServices/HomeOurServicesCards";



const OurServices = () => {
    return (
        <div>
            <div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
            <HomeOurServicesHeadingsContent />
            <HomeOurServicesCards />
            </div>
        </div>
    );
};

export default OurServices;