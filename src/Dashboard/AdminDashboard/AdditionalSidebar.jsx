import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  BsCheck2Circle,
  BsDiamondHalf,
  BsFillGearFill,
  BsFillShieldSlashFill,
  BsFillXDiamondFill,
  BsLayerBackward,
  BsTrash3Fill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const AdditionalSidebar = () => {
  return (
    <div>
      {/* Nested menu with drawer */}
      <div className="drawer-side">
        <label htmlFor="additional-drawer" className="drawer-overlay"></label>

        <ul className="space-y-1 menu min-h-full dark:bg-gray-800 bg-base-200 text-base-content">
          <label
            htmlFor="additional-drawer"
            className="cursor-pointer text-2xl text-gray-400 hover:text-gray-800 m-5 flex justify-end"
          >
            <AiOutlineArrowLeft />
          </label>

          <li>
            <Link
              to="/admin-profile/dashboard/control-panel"
              className="flex mx-10 mt-5 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
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
              className="flex mx-10 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
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
              className="flex mx-10 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
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
              className="flex mx-10 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
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
              className="flex mx-10 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
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
              className="flex ml-10 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
            >
              <span className="mx-3 dark:text-black shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-lg bg-white p-2 group-hover:scale-125 duration-700">
                <BsCheck2Circle className="group-hover:scale-125 duration-700" />
              </span>
              <span className="mt-2">Submit completed projects</span>
            </Link>
          </li>

          <li>
            <Link
              to="/admin-profile/dashboard/trash-bin"
              className="flex mx-10 group text-gray-500 dark:text-white dark:hover:text-cyan-500 hover:text-cyan-500 text-semibold hover:bg-transparent"
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
  );
};

export default AdditionalSidebar;
