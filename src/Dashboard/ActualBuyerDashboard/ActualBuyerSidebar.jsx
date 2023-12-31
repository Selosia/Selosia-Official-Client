import { useContext } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { FaUserAlt } from "react-icons/fa";
import {
  BsFillCartCheckFill,
  BsFillDoorOpenFill,
  BsSoundwave,
  BsStackOverflow,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const ActualBuyerSidebar = () => {
  const { logOut } = useContext(AuthContext);
  // console.log(user);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/authentication/login");
  };
  return (
    <Scrollbars>
      <div className="rounded-md min-h-screen dark:bg-black dark:text-white">
        {/* Top Card */}
        <div className="border-b mr-3">
          <Link
            to="/"
            className="flex mx-10 py-5 text-2xl dark:hover:text-cyan-500 hover:text-gray-900 text-semibold"
          >
            <span className="mx-3 dark:text-black rounded-lg bg-white p-2">
              <BsSoundwave className="mt-1" />
            </span>
            <span className="mt-2">SELOSIA</span>
          </Link>
        </div>

        {/* Sidebar Link */}
        <ul className="title">
          <li>
            <Link
              to="/actual-buyer/dashboard"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <FaUserAlt className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2">Profile</span>
            </Link>
          </li>

          <li>
            <Link
              to="/actual-buyer/dashboard/order-now"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsStackOverflow className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2">Order Now</span>
            </Link>
          </li>

          <li>
            <Link
              to="/actual-buyer/dashboard/my-orders"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsFillCartCheckFill className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2">My Orders</span>
            </Link>
          </li>

          <li onClick={handleLogOut}>
            <p className="flex mx-10 my-5 group  hover:text-red-500  text-semibold">
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsFillDoorOpenFill className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2">Log Out</span>
            </p>
          </li>
        </ul>
      </div>
    </Scrollbars>
  );
};

export default ActualBuyerSidebar;
