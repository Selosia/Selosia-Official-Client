import { useContext, useEffect, useState } from "react";
import {
  BsBookmarkStarFill,
  BsBoxArrowInUpLeft,
  BsCheck2Circle,
  BsChevronBarDown,
  BsDiamondHalf,
  BsEscape,
  BsFillDoorOpenFill,
  BsFillGearFill,
  BsFillShieldSlashFill,
  BsFillXDiamondFill,
  BsLayerBackward,
  BsMicrosoftTeams,
  BsStackOverflow,
  BsStopwatchFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { AuthContext } from "../../context/AuthProvider";
import { MdDashboardCustomize } from "react-icons/md";
import signOut from "../../assets/image/signOut.png";
// import AdditionalSidebar from "../AdminDashboard/AdditionalSidebar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import AdminSidebar from "../AdminDashboard/AdminSidebar";
import { SiBloglovin } from "react-icons/si";
// import MobileAdminDrawerSide from "../../Utilities/DashboardSearchNav/MobileAdminDrawerSide";
// import useUserType from "../../hooks/useUserType";
// import MobileUserDrawerSide from "../../Utilities/DashboardSearchNav/MobileUserDrawerSide";
// import MobileBuyerDrawerSide from "../../Utilities/DashboardSearchNav/MobileBuyerDrawerSide";

const DashboardSearchNav = () => {
  const { user, theme, logOut, setTheme } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  // get user type .. form custom hook .. userUserType()
  // const [userType] = useUserType(user?.email);

  // console.log(userType);

  //! Time Adjustments
  const time = String(new Date().toLocaleString());

  //* set toggle button local storage for fixed with toggle
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    applyTheme(newMode);
  };

  const applyTheme = (darkMode) => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  useEffect(() => {
    applyTheme(isDarkMode);
  }, [isDarkMode]);
  //* END fix toggle button

  //* Dark Mode create by toggle
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  //* END

  const handleLogOut = () => {
    logOut();
    navigate("/authentication/login");
  };

  return (
    <div className="border lg:mx-5 h-20 rounded-md bg-white dark:bg-black dark:text-white">
      <div className="flex justify-around py-5">
        {/* (Dashboard) Accordion large screen drawer */}
        <div className="drawer w-36 ">
          <input
            id="additional-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <label
            htmlFor="additional-drawer"
            className="drawer-content flex group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold cursor-pointer"
          >
            <span className="mx-3 h-8 flex items-center dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white group-hover:text-[#26BFC7] p-2 group-hover:scale-110 duration-700">
              <MdDashboardCustomize className="group-hover:scale-110 duration-700" />
            </span>
            <span className=" cursor-pointer mt-2">Additional</span>
          </label>

          {/* Additional Sidebar  */}
          {/* Nested menu with drawer */}
          <div className="drawer-side title lg:z-0 z-20">
            <label
              htmlFor="additional-drawer"
              className="drawer-overlay"
            ></label>

            <ul className="space-y-1  menu min-h-full dark:bg-gray-800 bg-base-200 text-base-content">
              <label
                htmlFor="additional-drawer"
                className="cursor-pointer text-2xl  hover:text-gray-800 m-5 flex justify-end"
              >
                <AiOutlineArrowLeft />
              </label>

              <li>
                <Link
                  to="/admin-profile/dashboard"
                  className="flex  mt-5 lg:hidden  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsBookmarkStarFill className=" group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Profile</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/control-panel"
                  className="flex   group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsFillGearFill className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Control Panel</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/daily-scrum"
                  className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsFillShieldSlashFill className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Scrum house</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/new-order-request"
                  className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsFillXDiamondFill className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Order request list</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/new-task-list"
                  className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsLayerBackward className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">New Task List</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/working-all-projects-list"
                  className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsDiamondHalf className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Working Task List</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/submit-completed-task"
                  className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsCheck2Circle className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Submit completed projects</span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/our-all-buyer-list"
                  className="flex lg:hidden  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsMicrosoftTeams className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2 group-hover:translate-x-2 duration-700">
                    Our Buyers
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/all-completed-project"
                  className="flex lg:hidden  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsStackOverflow className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2 ml-1 group-hover:translate-x-2 duration-700">
                    All completed project
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/add-service"
                  className="flex lg:hidden  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsEscape className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2 group-hover:translate-x-2 duration-700">
                    Add Service
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/add/showcase-project"
                  className="flex lg:hidden  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsBoxArrowInUpLeft className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2 group-hover:translate-x-2 duration-700">
                    Add Showcase Project
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-profile/dashboard/add-blog"
                  className="flex lg:hidden  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <SiBloglovin className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2 group-hover:translate-x-2 duration-700">
                    Add Blog
                  </span>
                </Link>
              </li>

              {/* <li onClick={handleLogOut}>
                <p className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent">
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsFillDoorOpenFill className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2 group-hover:translate-x-2 duration-700">
                    Log Out
                  </span>
                </p>
              </li> */}

              <li>
                <Link
                  to="/admin-profile/dashboard/trash-bin"
                  className="flex  group  dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
                >
                  <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                    <BsTrash3Fill className="group-hover:scale-125 duration-700" />
                  </span>
                  <span className="mt-2">Trash</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Time */}
        <div className=" hidden md:flex lg: text-[#26BFC7]">
          <BsStopwatchFill className="mx-2 text-2xl text-base-300" />
          <span>{time?.slice(0, 16)} </span>
          <span className="mx-1">{time?.slice(19, 22)}</span>
          <BsChevronBarDown className="mx-2 mt-1 cursor-pointer text-xl hover:text-black" />
        </div>

        {/* Drawer For Mobile Device */}
        {/* {
          userType === 'Admin' && */}
        <div className="navbar-end p-2 md:hidden">
          <div className="drawer">
            <input
              id="admin-drawer"
              type="checkbox"
              className="drawer-toggle"
            />

            {/* <MobileAdminDrawerSide /> */}
          </div>
        </div>
        {/* } */}

        {/* Drawer For Mobile Device */}
        {/* {
          userType === 'Buyer' && */}
        <div className="navbar-end p-2 md:hidden">
          <div className="drawer">
            <input
              id="buyer-drawer"
              type="checkbox"
              className="drawer-toggle"
            />

            {/* <MobileBuyerDrawerSide /> */}
          </div>
        </div>
        {/* } */}

        {/* {
          userType === 'User' && */}
        <div className="navbar-end p-2 md:hidden">
          <div className="drawer">
            <input id="user-drawer" type="checkbox" className="drawer-toggle" />

            {/* <MobileUserDrawerSide /> */}
          </div>
        </div>
        {/* } */}

        {/* user image */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} className="border" />
            </div>
          </label>

          {/* Dropdown by clicking user image */}
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2   shadow menu menu-sm dropdown-content  rounded-box w-60"
          >
            <li>
              <a className="flex justify-start font-bold  h-10 ">
                {user?.displayName}
              </a>
            </li>

            <li onClick={handleLogOut}>
              <div className="flex py-2">
                <img className="w-6 h-6" src={signOut} alt="" />
                <a className="font-bold text-red-500">Logout</a>
              </div>
            </li>

            {/* Theme change mood */}
            <li className="grid grid-cols-3 gap-3">
              <span>Light</span>
              <input
                type="checkbox"
                className="toggle"
                onClick={handleThemeSwitch}
                checked={isDarkMode}
                onChange={toggleMode}
              />
              <span>Dark</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSearchNav;
