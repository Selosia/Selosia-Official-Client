import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import brandLogo from "../../assets/selosiaLOGO.png";
import useUserType from "../../hooks/useUserType";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MobileScreenNav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userType, loading] = useUserType(user?.email);

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/authentication/login");
    Swal.fire({
      icon: "error",
      title: "",
      text: "Logout Successful!",
    });
  };

  return (
    <header className="lg:hidden flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#26BFC7] text-sm py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold text-white" href="#">
            <img
              className="h-16"
              src="https://i.ibb.co/jWSxHpr/logo-BW-removebg-preview.png"
              alt="brandLOGO"
            />
          </a>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-white/[.25] font-medium bg-zinc-400 text-white shadow-sm align-middle hover:bg-white/[.15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400  transition-all text-sm"
              data-hs-collapse="#navbar-primary"
              aria-controls="navbar-primary"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="navbar-primary"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <nav className="space-y-5">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 border-b-4 w-12 block text-start"
                    : "text-gray-800 block text-start"
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 border-b-4 w-12 block text-start"
                    : "text-gray-800 block text-start"
                }
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-gray-800 border-b-4 w-12 block text-start"
                    : "text-gray-800 block text-start"
                }
                to="/blog"
              >
                Blogs
              </NavLink>

              {userType === "Admin" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 border-b-4 w-12 block text-start"
                      : "text-gray-800 block text-start"
                  }
                  to="/admin-profile/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
              {userType === "Buyer" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 border-b-4 w-12 block text-start"
                      : "text-gray-800 block text-start"
                  }
                  to="/actual-buyer/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
              {userType === "User" && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 border-b-4 w-12 block text-start"
                      : "text-gray-800 block text-start"
                  }
                  to="/user/dashboard"
                >
                  Dashboard
                </NavLink>
              )}

              <NavLink
                className="text-gray-800 block text-start"
                onClick={handleLogOut}
              >
                Logout
              </NavLink>

              {!user?.uid && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-gray-800 border-b-4 w-12 block text-start"
                      : "text-gray-800 block text-start"
                  }
                  to="/authentication/logIn"
                >
                  Login
                </NavLink>
              )}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MobileScreenNav;
