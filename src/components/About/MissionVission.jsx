import missionVision from "../../assets/image/mission.jpg";

const MissionVission = () => {
  return (
    <div className="font-semibold lg:mx-0 mx-10">
      <div className="grid lg:grid-cols-2 max-w-screen-xl mx-auto gap-10 grid-cols-1">
        <div>
          <img src={missionVision} alt="" />
        </div>
        <div className="lg:mt-12">
          <h1 className="text-2xl mb-4 title text-start text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our Mission & Vision
          </h1>
          <div>
            <p>
              At Selosias, our mission is to empower businesses with innovative
              and reliable technology solutions. We are dedicated to delivering
              cutting-edge software and services that enhance efficiency, foster
              growth, and drive success in an ever-evolving digital landscape.
              We strive to be a trusted partner for our clients, providing them
              with the tools and expertise they need to thrive in the modern
              world.
            </p>
            <br />
            <p>
              Our vision is to lead the way in shaping the future of technology.
              We aspire to be a driving force behind digital transformation,
              constantly pushing the boundaries of what is possible. We envision
              a world where technology is a force for good, where businesses of
              all sizes can harness its power to achieve their goals. WebTech
              Solutions aims to be at the forefront of this transformation,
              setting new standards of excellence and innovation in the software
              industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;
