// import CursorMovingAnimation from "../components/Home/CursorMovingAnimation";
import OurTeam from "../components/About/OurTeam";
import WhyChooseUs from "../components/About/WhyChooseUs";
import ValueWeHold from "../components/About/ValueWeHold";
import ExperienceTrust from "../components/About/ExperienceTrust";
import MissionVission from "../components/About/MissionVission";
import OurStories from "../components/About/OurStories";
import WhoWeAre from "../components/About/WhoWeAre";

const About = () => {
  return (
    <div className="space-y-10 mt-32">
      {/* <CursorMovingAnimation /> */}

      <div>
        <WhoWeAre />
      </div>
      <div>
        <OurStories />
      </div>
      <div>
        <MissionVission />
      </div>
      <div>
        <OurTeam />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <ValueWeHold />
      </div>
      <div>
        <ExperienceTrust />
      </div>
    </div>
  );
};

export default About;
