import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";
import { AuthContext } from "../context/AuthProvider";

const AdminsMailSenderModal = () => {
  const { user } = useContext(AuthContext);
  const [adminsEmail, setAdminsEmail] = useState();

  useEffect(() => {
    fetch("https://web-tech-official-server.vercel.app/all-users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const admins = data?.filter((user) => {
          return user?.role.includes("Admin");
        });
        setAdminsEmail(admins);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const receiver = form.email.value;
    const receiverName = form.name.value;
    const subject = form.subject.value;
    const message = form.message.value;

    axios
      .post(
        `https://codexriddle-official-server.vercel.app/api/v1/sendMail/mailToDev`,
        {
          sender: user.email,
          receiver,
          receiverName,
          subject,
          message,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      id="Admin-Mail-Sender-Modal"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto font-mono"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-end mt-5 mx-10">
            <button
              type="button"
              className="hs-dropup-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              data-hs-overlay="#Admin-Mail-Sender-Modal"
            >
              <span className="sr-only">Close</span>
              <BsXLg />
            </button>
          </div>

          <div>
            <div className="m-5">
              <h1 className="title">Admin list...</h1>

              <ol>
                {adminsEmail?.map((adminEmail, idx) => (
                  <li key={idx} className="flex gap-2 font-semibold">
                    <span>{idx + 1}.</span>
                    <span className="title">{adminEmail?.email}</span>
                  </li>
                ))}
              </ol>

              <form onSubmit={handleSubmit} className="space-y-3 mt-5">
                <div className="border border-gray-500 rounded-md flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Admin Email"
                    className="w-full px-3 py-2 rounded-xl bg-white focus outline-none  "
                    required
                  />
                </div>

                <div className="border border-gray-500 rounded-md flex items-center">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Mail Purpose"
                    className="w-full px-3 py-2 rounded-xl bg-white focus outline-none  "
                    required
                  />
                </div>

                <div className="border border-gray-500 rounded-md flex items-center">
                  <textarea
                    name="message"
                    placeholder="Purpose Details"
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

export default AdminsMailSenderModal;
