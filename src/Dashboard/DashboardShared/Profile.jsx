import { useContext, useEffect, useState } from "react";
// import useUserType from "../hooks/useUserType";
import { SiGooglemeet } from "react-icons/si";
import { AuthContext } from "../../context/AuthProvider";
import OthersMailSenderModal from "../../modals/OthersMailSenderModal";
import AdminsMailSenderModal from "../../modals/AdminsMailSenderModal";
import BuyersMailSenderModal from "../../modals/BuyersMailSenderModal";
import { getCurrentUserInfo } from "../../apis/userOperations";

const Profile = () => {
  const { user } = useContext(AuthContext);
  
  const [scrumLink, setScrumLink] = useState();

  //* get user type .. form custom hook .. userUserType()
  const [logUser, setLogUser] = useState()

  useEffect(()=>{
      getCurrentUserInfo(user)
      .then((response)=> {
          console.log(response?.data);
          setLogUser(response?.data);
      })
  },[user])


  useEffect(() => {
    fetch(
      "https://web-tech-official-server.vercel.app/get/daily/scrum/64d9d45d62466067d1e61980"
    )
      .then((res) => res.json())
      .then((data) => {
      // console.log(data?.data);
        setScrumLink(data?.data);
      });
  }, []);


  return (
    <div className="w-full">
      <div className="max-w-5xl mx-4 sm:max-w-sm md:max-w-3xl lg:max-w-xl xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-[#6b6b6bdc] shadow-xl rounded-lg text-gray-900">
        <div className="md:flex gap-1">
          {/* Body */}
          <div className="text-center rounded-l-lg p-12 bg-zinc-200">
            <img
              className="avatar w-24 h-24 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <div className="py-3">
              <p className="text-xl font-normal text-black ">
                {user?.displayName}
              </p>
              <p className="text-xs text-black ">{user?.email}</p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-base font-semibold flex gap-2">
                <span>Role :</span>
                <span className="text-amber-500">{logUser?.role}</span>
              </p>
            </div>
            
          </div>



          {/* Side border */}
          <div className="flex md:block md:space-y-5 flex-col px-1 pb-5 mr-1 justify-center items-center">

            {/* Admin official meet */}
            <>
              {/* {
                userType === 'Admin' && */}
              <div className="gap-2 md:hidden flex cursor-pointer py-5">
                <SiGooglemeet className="mt-1" />
                <a
                  title="Click to join the meeting"
                  href={scrumLink?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#000]"
                >
                  <span>Official Scrum</span>
                  <span className="animate-ping">...</span>
                </a>
              </div>
              {/* }  */}
              </>

              {/* {
                userType === 'Admin' && */}

                <>
                    <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block" data-hs-overlay="#Admin-Mail-Sender-Modal">
                    Mail to Admins
                    </button>

                    <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block" data-hs-overlay="#Developers-Mail-Sender-Modal">
                    Mail to Developers
                    </button>

                    <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block" data-hs-overlay="#Buyers-Mail-Sender-Modal">
                    Mail to Buyers
                    </button>

                    <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block" data-hs-overlay="#Others-Mail-Sender-Modal">
                    Mail to Others
                    </button>
                </>
              {/* } */}


            
          </div>


        <OthersMailSenderModal />
        <AdminsMailSenderModal />
        <BuyersMailSenderModal />

        </div>
      </div>
      

      {/* {
        userType === 'Admin' && */}
        <div className="mt-5 space-y-3 md:hidden m-1">
        <div>
        <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700  w-full mx-auto" data-hs-overlay="#Admin-Mail-Sender-Modal">
          Mail to Admins
          </button>
        </div>

            <div>
            <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 w-full mx-auto" data-hs-overlay="#Developers-Mail-Sender-Modal">
            Mail to Developers
            </button>
            </div>

            <div>
            <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 w-full mx-auto" data-hs-overlay="#Buyers-Mail-Sender-Modal">
            Mail to Buyers
            </button>
            </div>

            <div>
            <button type="button" className="rounded bg-red-400 text-white hover:scale-90 duration-700 w-full mx-auto" data-hs-overlay="#Others-Mail-Sender-Modal">
            Mail to Others
            </button>
            </div>
        </div>
      {/* } */}


    </div>
  );
};

export default Profile;
