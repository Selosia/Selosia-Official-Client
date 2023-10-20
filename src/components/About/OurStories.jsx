import ourStories from "../../assets/image/ourStories.jpg";

const OurStories = () => {
  return (
    <div className="font-semibold lg:mx-0 mx-10">
      <div className="grid lg:grid-cols-2 max-w-screen-xl mx-auto gap-10 grid-cols-1">
        <div className="lg:hidden">
          <img src={ourStories} className="w-" alt="" />
        </div>
        <div className="lg:mt-12">
          <h1 className="text-2xl mb-4 title text-start text-gray-800 capitalize lg:text-3xl dark:text-white">
            Our stories
          </h1>
          <p>
            Selosias emerged from the shared dreams and aspirations of a group
            of tech enthusiasts. We were young, full of ideas, and armed with a
            deep understanding of the digital realm. Our early days were filled
            with challenges. We worked tirelessly, often burning the midnight
            oil, to develop our first software solution. It was our commitment
            to quality, creativity, and user-centric design that set us apart.
            As our first project took shape, we realized we were onto something
            special.
          </p>
        </div>
        <div className="hidden lg:block">
          <img src={ourStories} className="w-" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurStories;
