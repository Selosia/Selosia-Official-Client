import { useContext, useEffect, useState } from "react";
// import useUserType from "../hooks/useUserType";
import { AuthContext } from "../../context/AuthProvider";
import OthersMailSenderModal from "../../modals/OthersMailSenderModal";
import AdminsMailSenderModal from "../../modals/AdminsMailSenderModal";
import BuyersMailSenderModal from "../../modals/BuyersMailSenderModal";
import { getCurrentUserInfo } from "../../apis/userOperations";
import admin from "../../assets/icon/admin.png";
import developer from "../../assets/icon/developer.png";
import buyer from "../../assets/icon/client.png";
import other from "../../assets/icon/other.png";
import meet from "../../assets/icon/meet.png";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [scrumLink, setScrumLink] = useState();

  //* get user type .. form custom hook .. userUserType()
  const [logUser, setLogUser] = useState();

  useEffect(() => {
    getCurrentUserInfo(user).then((response) => {
      console.log(response?.data);
      setLogUser(response?.data);
    });
  }, [user]);

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
    <div className="flex items-center    justify-center min-h-[600px]">
      <div className="w-full">
        <div className="  max-w-screen-lg  mx-auto     rounded-lg text-gray-900">
          <div className="md:flex-col gap-1">
            {/* Body */}
            <div className="text-center rounded-t-lg p-12 ">
              <img
                className="avatar w-24 h-24 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <div className="py-3">
                <div className="flex justify-center">
                  <p className="text-3xl font-normal title text-black ">
                    {user?.displayName}
                  </p>
                  <p className="text-base hidden lg:block font-semibold  gap-2">
                    <span className="text-[#26BFC7] font-bold title">
                      {logUser?.role}
                    </span>
                  </p>
                </div>
                <p className="text-md font-bold text-black ">{user?.email}</p>
              </div>
              <div className="flex lg:hidden flex-col gap-4">
                <p className="text-base font-semibold flex gap-2">
                  <span className="font-bold text-xl">Role :</span>
                  <span className="title text-xl text-[#26BFC7]">
                    {logUser?.role}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons  */}

            <div className="flex md:block md:space-y-5 mx-5 space-y-2 flex-col px-1 pb-5  ">
              {/* Admin official meet */}
              <>
                {/* {
                userType === 'Admin' && */}
                <div className="gap-2 md:hidden btn btn-outline flex cursor-pointer hover:bg-[#26BFC7] title hover:border-[#26BFC7]">
                  <img className="w-8 h-8" src={meet} alt="" />
                  <a
                    title="Click to join the meeting"
                    href={scrumLink?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="font-bold title">
                      Selosia Official Meet
                    </span>
                    <span className="animate-ping">...</span>
                  </a>
                </div>
                {/* }  */}
              </>

              {/* {
                userType === 'Admin' && */}

              <>
                <div className="grid lg:grid-cols-3  grid-cols-1 lg:space-y-0 space-y-2 lg:gap-3   lg:w-full  ">
                  <button
                    className="btn btn-outline w-full transition-all duration-500 hover:bg-[#26BFC7] title hover:border-[#26BFC7]"
                    data-hs-overlay="#Admin-Mail-Sender-Modal"
                  >
                    <img className="w-10 h-10" src={admin} alt="" />
                    Mail to Admins
                  </button>
                  <button
                    className="btn btn-outline transition-all duration-500 hover:bg-[#26BFC7] title  w-full hover:border-[#26BFC7]"
                    data-hs-overlay="#Developers-Mail-Sender-Modal"
                  >
                    <img className="w-10 h-10" src={developer} alt="" />
                    Mail to Developer
                  </button>
                  <button
                    className="btn btn-outline transition-all duration-500 hover:bg-[#26BFC7] title w-full  hover:border-[#26BFC7]"
                    data-hs-overlay="#Buyers-Mail-Sender-Modal"
                  >
                    <img className="w-10 h-10" src={buyer} alt="" />
                    Mail to Buyers
                  </button>
                  <button
                    className="btn btn-outline transition-all duration-500 hover:bg-[#26BFC7] title w-full  hover:border-[#26BFC7]"
                    data-hs-overlay="#Others-Mail-Sender-Modal"
                  >
                    <img className="w-10 h-10" src={other} alt="" />
                    Mail to Others
                  </button>
                  {/* <button
                  type="button"
                  className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block"
                  data-hs-overlay="#Admin-Mail-Sender-Modal"
                >
                  Mail to Admins
                </button> */}

                  {/* <button
                  type="button"
                  className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block"
                  data-hs-overlay="#Developers-Mail-Sender-Modal"
                >
                  Mail to Developers
                </button> */}

                  {/* <button
                  type="button"
                  className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block"
                  data-hs-overlay="#Buyers-Mail-Sender-Modal"
                >
                  Mail to Buyers
                </button> */}

                  {/* <button
                  type="button"
                  className="rounded bg-red-400 text-white hover:scale-90 duration-700 hidden md:block"
                  data-hs-overlay="#Others-Mail-Sender-Modal"
                >
                  Mail to Others
                </button> */}
                </div>
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
        {/* <div className="mt-5 space-y-3 md:hidden m-1">
          <div>
            <button
              type="button"
              className="rounded bg-red-400 text-white hover:scale-90 duration-700  w-full mx-auto"
              data-hs-overlay="#Admin-Mail-Sender-Modal"
            >
              Mail to Admins
            </button>
          </div>

          <div>
            <button
              type="button"
              className="rounded bg-red-400 text-white hover:scale-90 duration-700 w-full mx-auto"
              data-hs-overlay="#Developers-Mail-Sender-Modal"
            >
              Mail to Developers
            </button>
          </div>

          <div>
            <button
              type="button"
              className="rounded bg-red-400 text-white hover:scale-90 duration-700 w-full mx-auto"
              data-hs-overlay="#Buyers-Mail-Sender-Modal"
            >
              Mail to Buyers
            </button>
          </div>

          <div>
            <button
              type="button"
              className="rounded bg-red-400 text-white hover:scale-90 duration-700 w-full mx-auto"
              data-hs-overlay="#Others-Mail-Sender-Modal"
            >
              Mail to Others
            </button>
          </div>
        </div> */}
        {/* } */}
      </div>
    </div>
  );
};

export default Profile;
