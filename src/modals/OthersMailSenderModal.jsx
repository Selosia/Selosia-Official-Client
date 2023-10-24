import { BsXLg } from "react-icons/bs";
import other from "../../src/assets/icon/other.png";

const OthersMailSenderModal = () => {
  return (
    <div
      id="Others-Mail-Sender-Modal"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto font-mono"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-md dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-end mt-5 mx-10">
            <button
              type="button"
              className="hs-dropup-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#Others-Mail-Sender-Modal"
            >
              <span className="sr-only">Close</span>
              <BsXLg />
            </button>
          </div>

          <div>
            <div className="m-5">
              <div className=" flex gap-2 justify-center">
                <img className="h-10 w-10 mt-1" src={other} alt="" />
                <h1 className="title ">
                  Send Mail to <br /> Others
                </h1>
              </div>
              <form className="space-y-3 mt-5">
                <div className="border border-gray-500 rounded-md flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Receiver Email"
                    className="w-full px-3 py-2 rounded-md bg-white focus outline-none  "
                    required
                  />
                </div>

                <div className="border border-gray-500 rounded-md flex items-center">
                  <textarea
                    name="message"
                    placeholder="Message Details"
                    cols="30"
                    className="w-full px-3 py-2 rounded-md bg-white focus outline-none"
                    rows="5"
                  ></textarea>
                </div>

                <button
                  className=" transition-all duration-500 hover:border-[#27E8B3]  title btn btn-outline hover:bg-[#27E8B3] w-full h-10 rounded-lg"
                  type="submit"
                >
                  Send Mail
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersMailSenderModal;
