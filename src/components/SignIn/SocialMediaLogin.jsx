import { useContext } from "react";
import fb from "../../assets/icon/facebook.png";
import gl from "../../assets/icon/google.png";
import twitter from "../../assets/icon/twitter.png";
import instagram from "../../assets/icon/instagram.png";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { postAUserInSignUp } from "../../apis/userOperations";
import { AuthContext } from "../../context/AuthProvider";


const SocialMediaLogin = () => {
  const navigate  = useNavigate()
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const { googleSignIn, facebookSignIn } = useContext(AuthContext)
    
    //   google login

    const handleGoogleLogin =() => {
    googleSignIn()
    .then(result =>{
      const googleLogin = result.user;


      const userData = {
        name : googleLogin?.displayName,
        email : googleLogin?.email,
        password : 'N/A',
        image: googleLogin?.photoURL,
        number: 0,
        role: "User",
        status: "Google Login"
    }


    postAUserInSignUp(userData)
    .then(() => {
        navigate(from, { replace: true });
        toast.success("successfully Email Login", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        })
    })


    })
    .catch(err => console.log(err))
  }

  // facebook login
  
  const handleFacebookLogin = () => {
    facebookSignIn()
    .then(result => {
      const facebookUser = result.user;
      console.log(facebookUser)
      toast("Facebook login successful")
      navigate(from, { replace: true });
    })
    .catch(err => console.error(err))
  }
  // Twitter login
  const handleTwitterLogin = () => {
  
  }
  // instagram login
  const handleInstagramLogin = () => {
  
  }

    return (
        <div>
        <ul className="flex justify-center gap-4 mt-4">
          <div onClick={handleGoogleLogin} className="cursor-pointer" >
            
            <img className="w-8" src={gl} alt="" />
          </div>
          <div onClick={handleFacebookLogin} className="cursor-pointer" >
            
            <img className="w-8" src={fb} alt="" />
          </div>
          <div onClick={handleTwitterLogin} className="cursor-pointer" >
            
            <img className="w-8" src={twitter} alt="" />
          </div>
          <div onClick={handleInstagramLogin} className="cursor-pointer" >
            
            <img className="w-8" src={instagram} alt="" />
          </div>
        </ul>
      </div>
    );
};

export default SocialMediaLogin;