import { useContext, useState } from "react";
import { FaCreativeCommonsSa, FaLock, FaRegEye, FaRegEyeSlash, FaUserCog } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";
import { postAUserInSignUp } from "../../apis/userOperations";
import { handleImagePreview, handleImgBBUpload } from "../../apis/imageUploadOperatio";
import { FileUploader } from "react-drag-drop-files";
import { BsFillTelephoneFill } from "react-icons/bs";





const RegisterFormField = () => {
    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';
    const fileTypes = ["JPG", "JPEG", "PNG", "GIF", "WEBP"];
    const [imagePreview, setImagePreview] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [show2, setShow2] = useState(false);
    const [error, setError] = useState(false);
    const [passError, setPassError] = useState();
    const [show, setShow] = useState(false);
    const [imgURL, setImgURL] = useState();
    const [file, setFile] = useState(null);


    //* Handle Image Remove From Preview
    const handleRemoveImage = () => {
        setImgURL(null);
        setImagePreview('');
    };


    //* Handle Image Upload
    const handleImageUpload = async (file) => {
        setFile(file);
        const image = file[0];
        setIsLoading(true);
        handleImgBBUpload(image)
        .then((response) => {
            setImgURL(response)
            //* Set Image Preview
            if(response){
                handleImagePreview(image, setImagePreview, setIsLoading)
            }
        })
    };


    //* toggle function
    const hnadleShow = () => {
        setShow(!show);
    };
    const hnadleShow2 = () => {
        setShow2(!show2);
    };


    const handlePassword = e => {
        console.log(e.target.value.length);
        setPassError(e.target.value)
    }


    //* register function
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const number = form.number.value;


        if (password !== confirmPassword) {
            setError(!error);
            return;
        }

        console.log('imgURL', imgURL);

        if (imgURL) {
            createUser(email, password)
            .then(() => {
                const photoURL = imgURL;
                updateUserDetails(name, photoURL);

                const userData = {
                    name,
                    email,
                    password,
                    image: photoURL,
                    number,
                    role: "User",
                    status: "Email Login"
                }



                postAUserInSignUp(userData)
                .then((response) => {

                    if(response?.status === 'success' && response.insertedId) {
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
                    }
                })
            })
            .catch((err) => {
                console.log(err);
                setError();
            });
        }

    };


    //* handle profile update with name and photoURL
    const updateUserDetails = (name, photoURL) => {
    updateUser(name, photoURL)
        .then(() => {
        navigate("/");
        })
        .catch((error) => {
        console.error(error);
        });
    };

    return (
        <div className="px-12 py-12">

            <div>
                <h2 className="text-center uppercase mb-8 mt-12 hue-rotate-15 text-7xl font-bold lg:text-white drop-shadow-lg shadow-black text-black">
                    Sign Up
                </h2>

                <form onSubmit={handleRegister}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <div className="border border-gray-500 rounded-xl flex items-center">
                                <FaUserCog className="ml-2 text-xl"></FaUserCog>
                                <input
                                type="text"
                                name="name"
                                id="text"
                                placeholder="User full name"
                                className="w-full px-3 py-3 rounded-xl bg-white focus outline-none  "
                                required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <div className="border border-gray-500 rounded-xl flex items-center">
                                <FaCreativeCommonsSa className="ml-2 text-xl"></FaCreativeCommonsSa>
                                <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail"
                                className="w-full px-3 py-3 rounded-xl bg-white focus outline-none"
                                required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="border border-gray-500 rounded-xl flex items-center">
                                <FaLock className="ml-2"></FaLock>
                                <input
                                type={!show ? "password" : "text"}
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full px-3 py-3 rounded-xl bg-white focus outline-none "
                                onChange={handlePassword}
                                required
                                />
                                <div onClick={hnadleShow} className="mr-4">
                                {!show ? (
                                    <FaRegEye className="text-xl"></FaRegEye>
                                ) : (
                                    <FaRegEyeSlash className="text-xl"></FaRegEyeSlash>
                                )}
                                </div>
                            </div>
                            {
                            !passError ? 
                            <p className="text-red-500"></p> 
                            : 
                            <p className="text-green-500">
                            {
                            passError?.length < 6 ? 
                            <p className="text-red-500">password should be at least in 6 characters</p> 
                            : 
                            <p className="text-green-500">Successfully set the password</p>
                            }
                            </p>
                            }
                            
                        </div>
                        
                        <div>
                            <label className="label">
                                    <span className="label-text">Confirm password</span>
                            </label>
                            <div className="border border-gray-500 rounded-xl flex items-center">
                                <FaLock className="ml-2"></FaLock>
                                <input
                                type={!show2 ? "password" : "text"}
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirm password"
                                className="w-full px-3 py-3 rounded-xl bg-white focus outline-none"
                                required
                                />
                                <div onClick={hnadleShow2} className="mr-4">
                                {!show2 ? (
                                    <FaRegEye className="text-xl"></FaRegEye>
                                ) : (
                                    <FaRegEyeSlash className="text-xl"></FaRegEyeSlash>
                                )}
                                </div>
                            </div>
                            {error ? <p className="text-red-600">Wrong password</p> : ""}
                        </div>
                    </div>


                    <div className="lg:grid lg:grid-cols-2 gap-2">
                        <div>
                            <div>
                                <label className="label">
                                    <span className="label-text">Number</span>
                                </label>
                                <div className="border border-gray-500 rounded-xl flex items-center">
                                    <BsFillTelephoneFill className="ml-2 text-xl" />
                                    <input
                                    type="number"
                                    name="number"
                                    placeholder="Enter your phone number"
                                    className="w-full px-3 py-3 rounded-xl bg-white focus:outline-none"
                                    required
                                />
                                </div>
                            </div>

                            {/* Profile input */}
                            <div className="">
                                <label className="label">
                                    <span className="label-text">Profile</span>
                                </label>
                                <div>
                                    <FileUploader
                                    multiple={true}
                                    handleChange={handleImageUpload}
                                    name="file"
                                    types={fileTypes}
                                    />
                                    <p className="text-start">
                                    {file ? `File name: ${file[0].name}` : ""}
                                    </p>
                                </div>
                            </div>

                            {/* Sign Up Button and login page link */}
                            <div className="">
                                <div className="mt-6">
                                    <button type="submit" className="w-full text-xl px-3 py-2 text-white rounded-xl bg-[#26BFC7]">
                                    Sign Up
                                    </button>
                                </div>
                                <Link to="/authentication/logIn" className="hover:underline text-[#3d49ef] hover:text-[#0011ff] mt-6">
                                Already have an account?
                                </Link>
                            </div>
                        </div>

                        {/* Image Preview */}
                        <div className="lg:flex justify-start lg:mt-4 hidden">
                            <>
                                { isLoading ?
                                    <p className="text-green-500">Uploading...</p>
                                    :
                                    <>
                                    { imgURL ? 
                                        <div
                                        style={{ position: 'relative', display: 'inline-block' }}>
                                            <img src={imagePreview} 
                                            className="object-cover h-64 w-96 bg-teal-50 rounded"
                                            alt="Preview" />

                                            <button
                                            onClick={handleRemoveImage}
                                            className="bg-slate-100 hover:scale-90 duration-500 m-2 text-20 rounded-full w-7 h-7"
                                            style={{
                                                position: 'absolute',
                                                top: '0',
                                                right: '0',
                                                border: 'none',
                                                cursor: 'pointer',
                                            }}
                                            >
                                            &times;
                                            </button>
                                        </div>
                                        :
                                        <div>
                                            <img src="https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg" 
                                            className="object-cover rounded"
                                            alt="Preview" />
                                        </div>
                                    }
                                    </>
                                }
                            </>
                        </div>
                    </div>
                </form>

                
            </div>
        </div>
    );
};

export default RegisterFormField;