import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Error = () => {
  return (
    <section>
      <Navbar />
      <div className="main my-24 md:my-48 mx-6 md:mx-40 md:flex justify-center items-center">
        <div className="left-error">
          <img
            className="h-80"
            src="https://i.ibb.co/ZmjCr6p/website-page-not-found-error-404-robot-character-broken-chatbot-mascot-disabled-site-on-technical-wo.jpg"
            alt=""
          />
        </div>
        <div className="right-error">
          <h2 className="text-4xl font-bold title">Sorry! Page not found</h2>
          <p className="my-6 font-medium">
            The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can
            return back to the site’s homepage and see if you can find what you are looking for.
          </p>
          <Link to="/">
            <button className="btn bg-[#26BEC7] hover:bg-[#26BFC7] text-white">Back To Homepage</button>
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Error;
