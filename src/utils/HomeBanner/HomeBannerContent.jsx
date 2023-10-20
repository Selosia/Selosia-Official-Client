import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const HomeBannerContent = () => {
  const { language } = useContext(AuthContext);
  return (
    <div className="lg:w-1/2 w-full lg:my-0 my-8 lg:text-start">
      <span className="text-teal-950 font-bold text-2xl">
        {language === "english" ? "BEST IT SOLUTION" : "এটি সেরা সমাধান"}
      </span>
      <br />
      <span className="text-[#26BFC7] text-sm tracking-widest">
        {language === "english" ? "WE HELP YOU" : "আমরা আপনাকে সাহায্য করি"}
      </span>
      <h1 className="font-bold lg:text-4xl text-3xl lg:text-start text-gray-800">
        {language === "english"
          ? "Unlock Your Online Presence with Selosia"
          : "সেলোসিয়ার সাথে আপনার অনলাইন উপস্থিতি আনলক করুন"}
      </h1>
      <p className="lg:w-4/6 text-justify mt-4 text-gray-600">
        {language === "english"
          ? "Welcome to our web site provider service, where we specialize in turning your digital dreams into reality.Our dedicated team of experts is committed meet your expectations."
          : "আমাদের ওয়েব সাইট প্রদানকারী পরিষেবায় স্বাগতম, যেখানে আমরা আপনার ডিজিটাল স্বপ্নকে বাস্তবে পরিণত করতে পারদর্শী। আমাদের বিশেষজ্ঞদের ডেডিকেটেড টিম আপনার প্রত্যাশা পূরণে প্রতিশ্রুতিবদ্ধ।"}
      </p>
      <a href="#contact">
        <button className="my-4 px-8 py-2 text-white font-semibold bg-[#26BFC7] hover:shadow-none shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] duration-700">
          {language === "english" ? "Contact Us" : "যোগাযোগ করুন"}
        </button>
      </a>
    </div>
  );
};

export default HomeBannerContent;
