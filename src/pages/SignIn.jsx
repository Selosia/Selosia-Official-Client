import Lottie from "lottie-react";
import loginAnimation from "../assets/Animations/login.json"
import LoginFormField from "../components/SignIn/LoginFormField";

const SignIn = () => {
    return (
        <div className="md:flex h-screen">
      <div className="md:w-[50%]">
        <Lottie animationData={loginAnimation} loop={true}></Lottie>
      </div>
      <div className="md:w-[50%] flex justify-center items-center bg-white text-black">
        <LoginFormField />
      </div>
    </div>
    );
};

export default SignIn;