// import Lottie from "lottie-react";
// import registerAnimation from "../assets/Animations/registerAnimation.json"
import RegisterFormField from "../components/SignUp/RegisterFormField";
import RegisterFormFieldSocialMedia from "../utils/RegisterFormField/RegisterFormFieldSocialMedia";


const SignUp = () => {
    return (
        <div className="md:flex h-screen py-10">
          <div className="md:w-[40%] flex items-center justify-center">
            <RegisterFormFieldSocialMedia />
          </div>

          <div className="md:w-[60%] flex justify-center items-center text-black ">
            <RegisterFormField />
          </div>
      </div>
    );
};

export default SignUp;