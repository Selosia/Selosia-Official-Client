import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { postAUserInSignUp } from "../../apis/userOperations";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2";

const RegisterFormFieldSocialMedia = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  // * ............ Google login ............
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const googleLogin = result.user;

        const userData = {
          name: googleLogin?.displayName,
          email: googleLogin?.email,
          password: "N/A",
          image: googleLogin?.photoURL,
          number: 0,
          role: "User",
          status: "Google Login",
        };

        postAUserInSignUp(userData).then(() => {
          navigate(from, { replace: true });
          Swal.fire("WoW 😲", "Sign Up successful", "success");
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops👎",
          text: "Something went wrong!",
        });
      });
  };

  //* facebook login
  const handleFacebookLogin = () => {
    alert("Facebook login is in developing mode!");
  };

  //* Instagram login
  const handleInstagramLogin = () => {
    alert("Instagram login is in developing mode!");
  };

  return (
    <div className="p-5" style={{ boxShadow: "5px 2px 5px #d1cdcd" }}>
      <h1 className="text-4xl font-bold uppercase my-6 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
          Sign Up With
        </span>
      </h1>
      <div>
        <ul className="lg:block lg:space-y-4 title grid grid-cols-2 gap-2">
          <div
            onClick={handleGoogleLogin}
            className="flex gap-2 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-xl rounded-md p-2 hover:bg-slate-100"
          >
            <FcGoogle className="text-4xl" />
            <p className="mt-1">Google</p>
          </div>
          <div
            onClick={handleFacebookLogin}
            className="flex gap-2 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-xl rounded-md p-2 hover:bg-slate-100"
          >
            <BsFacebook className="text-4xl text-blue-500" />
            <p className="mt-1">Facebook</p>
          </div>
          <div
            onClick={handleInstagramLogin}
            className="flex gap-2 cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-xl rounded-md p-2 hover:bg-slate-100"
          >
            <FaInstagram className="text-4xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white rounded-lg" />
            <p className="mt-1">Instagram</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default RegisterFormFieldSocialMedia;
