import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import contactAnimation from "../../assets/Animations/contactAnimation.json";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";

const ContactUS = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email service ID, template ID, and user ID from your EmailJS account
    const serviceID = "service_escsztl";
    const templateID = "template_qa0lowm";
    const publicKey = "_prA7kjFtlKPC2o6w";

    const templateParams = {
      from_name: e.target.user_name.value,
      from_email: e.target.user_email.value,
      message: e.target.message.value,
    };

    console.log(templateParams);
    setLoading(true);
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        // console.log('Email sent successfully!', response);
        Swal.fire("WOW 😲", "Message sent Successfully", "success");

        e.target.reset();
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            icon: "error",
            title: "OOOPS 👎",
            text: "Something went wrong!",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="container font-semibold mx-auto sm:mb-12">
      <div className="text-center">
        <div className="space-y-2">
          <h1 className="text-2xl mb-4  title text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            Get in touch
          </h1>
          <div className="w-24 h-[2px] bg-[#26BEC7] mx-auto my-5"></div>
          <p className="">
            Send us a message and we will get back to your shortly
          </p>
        </div>
      </div>
      <section className="flex flex-wrap lg:items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          className="w-full px-4  sm:px-6 sm:py-16 lg:w-1/2 lg:px-8"
        >
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-0 mt-8 max-w-md space-y-16"
          >
            <div className="space-y-4">
              <div className="">
                <label className="">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full py-4 text-sm text-[#26BEC7] font-semibold bg-transparent border-b border-b-black focus:outline-none"
                  placeholder="Your Name"
                  defaultValue={user?.displayName}
                  readOnly
                />
              </div>
              <div className="">
                <label className="">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full py-4 text-sm text-[#26BEC7] font-semibold bg-transparent border-b border-b-black focus:outline-none"
                  placeholder="hello@gmail.com"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              <div className="">
                <label htmlFor="message" className="">
                  Message
                </label>
                <input
                  type="text"
                  name="message"
                  required
                  className="w-full py-4 text-sm bg-transparent border-b border-b-black focus:outline-none"
                  placeholder="Start typing here..."
                />
              </div>
            </div>

            <div className="-mb-32">
              <button
                type="submit"
                className="inline-block  rounded-md title bg-[#26BEC7] lg:px-12 lg:py-3 px-8 py-4 text-white text-base font-semibold"
              >
                {isLoading ? (
                  <div className="flex gap-2">
                    <h1>Sending</h1>
                    <span className="loading loading-dots loading-md"></span>
                  </div>
                ) : (
                  <div>Send your message</div>
                )}
              </button>
            </div>
          </form>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="2500"
          data-aos-easing="ease-out"
          className="w-full lg:w-1/2 lg:my-0 my-36 bg-[#dbf7f8] px-8 rounded-md grid lg:grid-cols-2"
        >
          <div className="lg:h-44 lg:mt-20">
            <div className="mt-8 lg:mt-0">
              <h3 className="text-base font-bold text-gray-900 sm:text-xl">
                SELOSIA SUPPORT
              </h3>
              <div className="mt-4">
                <p className="max-w-[40ch] text-sm text-gray-800">
                  <span className="flex gap-2 mb-2">
                    <FiPhone className="text-base " /> +88 01869-870467
                  </span>
                  <span className="flex gap-2">
                    <FiMail className="text-base mt-[2px]" />{" "}
                    selosiait@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-96 lg:h-96 lg:-mt-32 lg:-ml-10">
            <Lottie animationData={contactAnimation} loop={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUS;
