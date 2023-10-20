import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
