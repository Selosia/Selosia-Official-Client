import { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import {
  BsBookmarkStarFill,
  BsFillDoorOpenFill,
  BsSoundwave,
  BsStackOverflow,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const UserDashboardSidebar = () => {
  const { logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
    toast.error("logged out successfully done", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <Scrollbars>
      <div className="rounded-md min-h-screen dark:bg-black dark:text-white">
        {/* Top Card */}
        <div className="border-b mr-3">
          <Link
            to="/"
            className="flex mx-10 py-5 text-2xl text-gray-500 dark:hover:text-cyan-500 hover:text-gray-900text-semibold"
          >
            <span className="mx-3 dark:text-black rounded-lg bg-white p-2">
              <BsSoundwave className="mt-1" />
            </span>
            <span className="mt-2">SELOSIA</span>
          </Link>
        </div>

        {/* Sidebar Link */}
        <ul>
          <li>
            <Link
              to="/user-profile/dashboard"
              className="flex mx-10 my-5 text-gray-500 dark:hover:text-cyan-500 hover:text-gray-900text-semibold"
            >
              <span
                className="mx-3 dark:text-black 
                    shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] 
                    rounded-lg bg-white p-2"
              >
                <BsBookmarkStarFill />
              </span>
              <span className="mt-2">Profile</span>
            </Link>
          </li>

          <li>
            <Link
              to="/user-profile/dashboard/order-now"
              className="flex mx-10 my-5 dark:hover:text-cyan-500 hover:text-gray-900 text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
                <BsStackOverflow />
              </span>
              <span className="mt-2">Order Now</span>
            </Link>
          </li>

          <li onClick={handleLogOut}>
            <p className="flex mx-10 my-5 hover:text-red-500 cursor-pointer text-semibold">
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2">
                <BsFillDoorOpenFill />
              </span>
              <span className="mt-2">Log Out</span>
            </p>
          </li>
        </ul>
      </div>
    </Scrollbars>
  );
};

export default UserDashboardSidebar;
