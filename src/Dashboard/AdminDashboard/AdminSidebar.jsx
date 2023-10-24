import { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { FaUserAlt } from "react-icons/fa";
import {
  BsBoxArrowInUpLeft,
  BsEscape,
  BsFillDoorOpenFill,
  BsMicrosoftTeams,
  BsSoundwave,
  BsStackOverflow,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
// Initialization for ES Users
import { Dropdown, Ripple, initTE } from "tw-elements";
import { SiBloglovin } from "react-icons/si";

initTE({ Dropdown, Ripple });

const AdminSidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

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
            className="flex mx-5 py-5 text-2xl text-[#26BFC7] group text-semibold"
          >
            <span className="mx-3 dark:text-black rounded-lg bg-white p-2">
              <BsSoundwave className="mt-1 group-hover:scale-150 duration-500" />
            </span>
            <span className="mt-2">SELOSIA</span>
          </Link>
          {/* <div className="underlineAnimation"></div> */}
        </div>

        {/* Sidebar Link */}
        <ul className="title">
          <li>
            <Link
              to="/admin-profile/dashboard"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span
                className="mx-3 dark:text-black 
                    shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] 
                    rounded-lg bg-white p-2 group-hover:scale-125 duration-700"
              >
                <FaUserAlt className=" group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2">Profile</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-profile/dashboard/our-all-buyer-list"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsMicrosoftTeams className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2  duration-700">Our Buyers</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-profile/dashboard/all-completed-project"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsStackOverflow className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2 ml-1  duration-700">
                All completed project
              </span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-profile/dashboard/add-service"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsEscape className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2  duration-700">Add Service</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-profile/dashboard/add/showcase-project"
              className="flex ml-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsBoxArrowInUpLeft className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2  duration-700">Add Showcase Project</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-profile/dashboard/add-blog"
              className="flex mx-10 my-5 group  hover:text-cyan-500  text-semibold"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <SiBloglovin className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2  duration-700">Add Blog</span>
            </Link>
          </li>

          <li onClick={handleLogOut}>
            <p className="flex mx-10 my-5 group hover:text-red-500 cursor-pointer text-semibold">
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsFillDoorOpenFill className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2  duration-700">Log Out</span>
            </p>
          </li>
        </ul>

        {/* Bottom User Info */}
        {/* <div className="flex justify-center mx-5 px-5 mt-28 mb-5 py-5 bg-emerald-50 rounded-xl">
          <div>
            <div className="flex justify-center">
              <img src={user?.photoURL} className="h-12 w-12 rounded-full" />
            </div>
            <p className="text-center dark:text-gray-800">{user?.displayName}</p>
            <p className="text-center dark:text-gray-800">{user?.email}</p>
          </div>
        </div> */}
      </div>
    </Scrollbars>
  );
};

export default AdminSidebar;
