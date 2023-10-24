import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-toastify";
import "../../css/navbar.css";
import signOut from "../../assets/image/logOut.png";

import useUserType from "../../hooks/useUserType";

const LargeScreenNav = ({ logUser }) => {
  const { user, logOut } = useContext(AuthContext);
  const [userType,loading] = useUserType(user?.email) 
  

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/authentication/login");
    toast.error("logged out!", {
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
    <div className="m-auto fixed right-0 left-0  top-10 z-30 navbar hidden lg:flex backdrop-blur-xl bg-transparent">
      <div className=" w-full  flex justify-evenly">
        <div className="">
          <img className="h-16" src='https://i.ibb.co/nkH6hMK/logo2-removebg-preview.png' alt="brandLOGO" />
        </div>

        <nav className="space-x-12 font-bold">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
            }
            to="/about"
          >
            About
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
            }
            to="/blog"
          >
            Blogs
          </NavLink>

            {
                userType === 'Admin'
                  &&   
                  <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
                }
                to="/admin-profile/dashboard"
              >
                 Dashboard
              </NavLink>
            }
            {
              userType === 'Buyer'
              &&  
              <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
              }
              to="/actual-buyer/dashboard"
            >
               Dashboard
            </NavLink>

            }
            {
              userType === 'User'
              && 

              <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
              }
              to="/user/dashboard"
            >
               Dashboard
            </NavLink>
            }

            {
              !user?.uid && 
              
                <NavLink
                className={({ isActive }) =>
                  isActive ? "text-[#26BFC7] cursor-text" : "text-gray-800 nav"
                }
                to="/authentication/logIn"
              >
                Login
              </NavLink>
            }
           
        
        </nav>

        <div className="">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="cursor-pointer avatar tooltip tooltip-bottom tooltip-success ring rounded-full"
              data-tip="click"
            >
              <div className="w-10 rounded-full">
                {user?.uid ? (
                  <img src={user?.photoURL} />
                ) : (
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkA7r1pd3h80Lq9uOByb2ALq5FoOAe-Mq0j3_EZzmOo4tXO0CUkRHQrbXMruyClSGA87E&usqp=CAU" />
                )}
              </div>
            </label>

            {user?.uid ? (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#e6feff] rounded-box w-56"
              >
                <li>
                  <a className="flex justify-center font-bold items-center h-10 ">
                    {user?.displayName}
                    <span className="badge text-white bg-[#26BFC7]">
                      {logUser?.role}
                    </span>
                  </a>
                </li>
                <li onClick={handleLogOut}>
                  <div className="flex">
                    <img className="w-7 h-7" src={signOut} alt="" />
                    <a className="font-bold">Logout</a>
                  </div>
                </li>
              </ul>
            ) : (
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/authentication/login">Login</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeScreenNav;
