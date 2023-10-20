import Lottie from "lottie-react";
import whoWeAre from "../../assets/Animations/whoweare.json";
const WhoWeAre = () => {
  return (
    <div className="font-semibold lg:mx-0 mx-10">
      <div className="grid max-w-screen-xl mx-auto lg:grid-cols-2 grid-cols-1">
        <div className="mb-4">
          <Lottie animationData={whoWeAre} loop={true}></Lottie>
        </div>
        <div className="lg:mt-12">
          <h1 className="text-2xl  title text-start mb-4 text-gray-800 capitalize lg:text-3xl dark:text-white">
            Who we are
          </h1>
          <p>
            Selosia is a leading web development and IT services company
            specializing in diverse areas such as software development, website
            development, and customized website solutions. Our dedicated team is
            committed to turning your digital dreams into reality. With a focus
            on innovation and cutting-edge technology, we provide tailored
            services to individuals, startups, and businesses, ensuring their
            unique needs are met. Our ultimate goal is to accompany you on your
            journey to success, helping you achieve your dreams and aspirations
            in the digital landscape.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
