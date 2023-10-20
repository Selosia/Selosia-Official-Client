import HomeAboutUsImages from "../../utils/HomeAboutUs/HomeAboutUsImages";
import HomeAboutUsTextContent from "../../utils/HomeAboutUs/HomeAboutUsTextContent";

const AboutUs = () => {
    return (
        <div className="container m-auto pb-24">
            <div className="grid gap-2 lg:grid-cols-2 z-30">
                <HomeAboutUsImages />
                <HomeAboutUsTextContent />
            </div>
        </div>
    );
};

export default AboutUs;