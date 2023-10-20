import { useEffect, useState } from "react";
import { BsXLg } from "react-icons/bs";


const BuyersMailSenderModal = () => {

    
    const [buyersEmail, setBuyersEmail] = useState()

    useEffect(()=>{
        fetch('https://web-tech-official-server.vercel.app/all-users')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const admins = data?.filter((user) => {
                return(
                    user?.role.includes('Buyer')
                )
            })
            setBuyersEmail(admins);
        })
    },[])



    return (
        <div
        id="Buyers-Mail-Sender-Modal"
        className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto font-mono"
    >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div className="flex justify-end mt-5 mx-10">
                    <button
                        type="button"
                        className="hs-dropup-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                        data-hs-overlay="#Buyers-Mail-Sender-Modal"
                    >
                        <span className="sr-only">Close</span>
                        <BsXLg />
                    </button>
                </div>

                <div>
                    <div className="m-5">

                        <h1>Buyer list...</h1>

                        <ol>
                        {
                        buyersEmail?.map((adminEmail, idx) => <li key={idx} className="flex gap-2 font-semibold">
                            <span>{idx + 1 }</span>
                            <span>{adminEmail?.email}</span>
                        </li>)
                        }
                        </ol>

                        <form className="space-y-3 mt-5">
                            <div className="border border-gray-500 rounded-xl flex items-center">
                                <span className="ml-2">To:</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="user email..."
                                    className="w-full px-3 py-2 rounded-xl bg-white focus outline-none  "
                                    required
                                />
                            </div>


                            <div className="border border-gray-500 rounded-xl flex items-center">
                                <span className="ml-2 -mt-20">Body:</span>
                                <textarea name="message"
                                placeholder="message..."
                                cols="30"
                                className="w-full px-3 py-2 rounded-xl bg-white focus outline-none"
                                rows="5">
                                </textarea>
                            </div>


                            <button className="bg-[#27E8B3] w-full h-10 rounded-lg">Send</button>
                        </form>
                    </div>

                    <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                        <button
                            type="button"
                            className="hs-dropup-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                            data-hs-overlay="#Buyers-Mail-Sender-Modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BuyersMailSenderModal;