import { Link } from "react-router-dom";

const HomeAboutUsTextContent = () => {
  return (
    <div className="flex font-semibold lg:font-normal flex-col justify-center xl:pr-0">
      <div className="mb-6">
        <p className="text-[#26BFC7] text-sm text-start tracking-widest font-semibold">
          About us
        </p>
        <h2 className="text-2xl mb-4  title text-start text-gray-800 capitalize lg:text-3xl dark:text-white">
          What we do for you
        </h2>
        <p className="  text-justify">
          At Selosias, we{"'"}re more than just a technology company – we{"'"}
          re your digital partner. Founded with a vision to empower businesses
          through innovative web solutions, we have evolved into a passionate
          team of tech enthusiasts. With years of experience, we have
          successfully delivered cutting-edge websites, e-commerce platforms,
          and IT solutions that drive growth and success. Our dedication to
          excellence, creativity, and client satisfaction is at the core of
          everything we do.
        </p>
      </div>
      <div>
        <Link
          to={"/about"}
          aria-label=""
          className="flex text-start items-center text-[#26BFC7]"
        >
          Learn more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default HomeAboutUsTextContent;
