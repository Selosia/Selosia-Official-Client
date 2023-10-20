import { useContext } from "react";
import {
  BsDiscord,
  BsFacebook,
  BsFillTelephoneForwardFill,
  BsLinkedin,
  BsMessenger,
} from "react-icons/bs";
import { SiFiverr } from "react-icons/si";
import { AuthContext } from "../context/AuthProvider";

const Header = () => {
  const { toggleLanguage, language } = useContext(AuthContext);
  return (
    <div className="bg-teal-950 hidden lg:flex text-white h-10 fixed top-0 left-0 right-0 z-30 px-10  justify-between">
      <h1 className="flex gap-2 items-center h-10 text-lg">
        <BsFillTelephoneForwardFill className="mt-1" />
        <span>{language === "english" ? "01869-870467" : "০১৮৬৯-৮৭০৪৬৭"}</span>
      </h1>

      <div className="flex gap-4 items-center h-10">
        <button onClick={toggleLanguage}>
          {language === "english" ? "Bangla" : "ইংরেজি"}
        </button>

        <label className="text-lg tooltip group tooltip-bottom hover:text-[#26BFC7] tooltip-success cursor-pointer">
          <BsMessenger className="group-hover:scale-150 duration-700" />
        </label>

        <label className="text-lg tooltip group tooltip-bottom hover:text-[#26BFC7] tooltip-success cursor-pointer">
          <BsDiscord className="group-hover:scale-150 duration-700" />
        </label>

        <label className="text-lg tooltip group tooltip-bottom hover:text-[#26BFC7] tooltip-success cursor-pointer">
          <BsFacebook className="group-hover:scale-150 duration-700" />
        </label>

        <label className="text-lg tooltip group tooltip-bottom hover:text-[#26BFC7] tooltip-success cursor-pointer">
          <BsLinkedin className="group-hover:scale-150 duration-700" />
        </label>

        <label className="text-lg tooltip group tooltip-right hover:text-[#26BFC7] tooltip-success cursor-pointer">
          <SiFiverr className="text-6xl group-hover:scale-125 duration-700" />
        </label>
      </div>
    </div>
  );
};

export default Header;
