import { useContext, useEffect, useState } from "react";
import {
  FaCreativeCommonsSa,
  FaLock,
  FaRegEye,
  FaRegEyeSlash,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import SocialMediaLogin from "./SocialMediaLogin";
import { toast } from "react-toastify";
import app from "../../firebase/Firebase.init";
import { AuthContext } from "../../context/AuthProvider";

const auth = getAuth(app);

const LoginFormField = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.form.pathname || "/";
  const { userSingIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  //!/* ----------------------------- show password ---------------------------- */

  const handleShow = () => {
    setShow(!show);
  };

  //?/* ------------------------------   checkbox ----------------------------- */

  //!/* --------- Load saved email and password when the component mounts -------- */

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
    }
  }, []);

  //!/* --------  Update localStorage when the rememberMe state changes -------- */

  useEffect(() => {
    if (rememberMe) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
  }, [email, password, rememberMe]);

  //!/* ----------------------------  handle login ---------------------------- */

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userSingIn(email, password)
      .then((result) => {
        const userLoggin = result.user;
        console.log(userLoggin);
        toast("User logged in successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err);
      });
  };

  //! /* ----------------------- handle Forget Password ----------------------- */

  const handleEmailForResetPassword = (e) => {
    const email = e.target.value;
    setUserEmail(email);

    // console.log(email);
  };

  //!/* ----------------------------  handle forget password ---------------------------- */

  const handleForgetPassword = () => {
    if (!userEmail) {
      alert("Please enter your email address");
    } else {
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          toast("password reset sent");
        })
        .catch((er) => {
          toast(er.message);
          console.error(er);
        });
    }
  };

  return (
    <div
      className="px-12 py-12 rounded-bl-3xl rounded-tr-3xl"
      style={{ boxShadow: "5px 2px 5px #d1cdcd" }}
    >
      <div className="w-72 ">
        <h2 className="text-center uppercase text-3xl mb-8">User Login</h2>
        <form onSubmit={handleLogin}>
          <div className="space-y-4">
            <div className="border border-gray-500 rounded-xl flex items-center">
              <FaCreativeCommonsSa className="ml-2 text-xl"></FaCreativeCommonsSa>
              <input
                type="email"
                name="email"
                id="email"
                onBlur={handleEmailForResetPassword}
                placeholder="E-mail"
                className="w-full px-3 py-2 rounded-xl bg-white focus outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="border border-gray-500 rounded-xl flex items-center">
              <FaLock className="ml-2"></FaLock>
              <input
                type={!show ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                className="w-full px-3 py-2 rounded-xl bg-white focus outline-none "
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div onClick={handleShow} className="mr-4">
                {!show ? (
                  <FaRegEye className="text-xl"></FaRegEye>
                ) : (
                  <FaRegEyeSlash className="text-xl"></FaRegEyeSlash>
                )}
              </div>
            </div>
            {error ? <p className="text-red-600">incorrent password</p> : ""}
          </div>
          <div className="flex justify-between mt-4 mx-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <h2 className="ml-2">Remember</h2>
            </div>
            <div>
              <h2
                onClick={handleForgetPassword}
                className="hover:underline cursor-pointer"
              >
                Forgot Password ?
              </h2>
            </div>
          </div>
          <div className="mt-6">
            <div>
              <button
                type="submit"
                className="w-full  title px-3 py-2 text-white rounded-md bg-[#27E8B3]"
              >
                Login
              </button>
            </div>
          </div>
          <Link
            to="/authentication/register"
            className="hover:underline text-[#3d49ef] hover:text-[#0011ff]"
          >
            Do not have an account?
          </Link>
        </form>

        <div>
          <h2 className="text-center mt-4">Sign Up With</h2>
          <SocialMediaLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginFormField;
