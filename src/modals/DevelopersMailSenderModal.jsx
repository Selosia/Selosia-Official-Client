import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { AuthContext } from "../context/AuthProvider";

const DevelopersMailSenderModal = () => {
  const { user } = useContext(AuthContext);
  const [developerEmails, setDeveloperEmail] = useState();

  // get developer from all users
  useEffect(() => {
    fetch("https://web-tech-official-server.vercel.app/all-users")
      .then((res) => res.json())
      .then((data) => {
        const developer = data.filter((user) => {
          return user?.role.includes("developer");
        });
        setDeveloperEmail(developer);
      });
  }, []);

  // Send Mail function
  const sendMailToDeveloper = (e) => {
    e.preventDefault();
    const form = e.target;
    const developerMail = form.email.value;
    const mailPurpose = form.purpose.value;
    const purposeDetails = form.purposeDetails.value;
    // console.log(developerMail, mailPurpose, purposeDetails);

    axios
      .post(
        `https://selosia-official-server.vercel.app/api/v1/sendMail/mailToDev`,
        {
          sender: user?.email,
          developerMail,
          mailPurpose,
          purposeDetails,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div
        id="Developers-Mail-Sender-Modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto font-mono"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-end mt-5 mx-10">
              <button
                type="button"
                className="hs-dropup-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                data-hs-overlay="#Developers-Mail-Sender-Modal"
              >
                <span className="sr-only">Close</span>
                <BsXLg className="text-xl font-bold" />
              </button>
            </div>

            <div>
              <div className="m-5">
                <h1 className="title">Developers list...</h1>

                <ol>
                  {developerEmails?.map((developerEmail, idx) => (
                    <li key={idx} className="flex gap-2 font-semibold">
                      <span>{idx + 1}</span>
                      <span>{developerEmail?.email}</span>
                    </li>
                  ))}
                </ol>

                <form onSubmit={sendMailToDeveloper} className="space-y-3 mt-5">
                  <div className="border border-gray-500 rounded-lg flex items-center">
                    {/* <span className="ml-2">To:</span> */}
                    <input
                      type="email"
                      name="email"
                      placeholder="Developer Email"
                      className="w-full px-3 py-2 rounded-lg bg-white focus outline-none  "
                      required
                    />
                  </div>

                  <div className="border border-gray-500 rounded-lg flex items-center">
                    {/* <span className="ml-2">Subject:</span> */}
                    <input
                      type="text"
                      name="purpose"
                      placeholder="Your Purpose"
                      className="w-full px-3 py-2 rounded-lg bg-white focus outline-none  "
                      required
                    />
                  </div>

                  <div className="border border-gray-500 rounded-lg flex items-center">
                    {/* <span className="ml-2 -mt-20">Body:</span> */}
                    <textarea
                      name="purposeDetails"
                      placeholder="Purpose Details"
                      cols="30"
                      className="w-full px-3 py-2 rounded-lg bg-white focus outline-none"
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
    </div>
  );
};

export default DevelopersMailSenderModal;
