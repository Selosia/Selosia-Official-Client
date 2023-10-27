import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const OrderNowInputField = ({
  handleSubmit,
  isUploading,
  setConvertedDatetime,
}) => {
  const { user } = useContext(AuthContext);

  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const selectedDate = new Date(value);

    //! Format the date as "DD-Month-YYYY"
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${selectedDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${
      months[selectedDate.getMonth()]
    }-${selectedDate.getFullYear()}`;

    //! Format the time as "HH:MM AM/PM"
    const hours = selectedDate.getHours() % 12 || 12;
    const minutes = selectedDate.getMinutes().toString().padStart(2, "0");
    const ampm = selectedDate.getHours() < 12 ? "AM" : "PM";
    const formattedTime = `${hours}:${minutes} ${ampm}`;

    setConvertedDatetime(`${formattedDate} ${formattedTime}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* User Info */}
      <div className="flex gap-2">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Buyer Name
          </label>
          <input
            id="name"
            type="text"
            name="buyerName"
            defaultValue={user?.displayName}
            readOnly
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
            placeholder="Enter Project Name"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="email" className="block mb-2 font-semibold">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="buyerEmail"
            defaultValue={user?.email}
            readOnly
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
            placeholder="Enter Your Email"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block mb-2 font-semibold">
            Project Name
          </label>
          <input
            required
            id="name"
            type="text"
            name="projectName"
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
            placeholder="Enter Project Name"
          />
        </div>

        <div className="mb-4 w-full">
          <label htmlFor="domainName" className="block mb-2 font-semibold">
            Domain Name (optional)
          </label>
          <input
            id="domainName"
            type="text"
            name="domainName"
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
            placeholder="Enter Domain Name"
          />
        </div>
      </div>

      <div className="flex gap-2">
        {/* deliveryDate */}
        <div className="mb-4 w-full">
          <label htmlFor="deliveryDate" className="block mb-2 font-semibold">
            Delivery Date
          </label>

          <input
            type="datetime-local"
            id="datetime"
            name="datetime"
            value={inputValue}
            onChange={handleInputChange}
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
          />
        </div>

        {/* Category */}
        <div className="mb-4 w-full">
          <label htmlFor="Category" className="block mb-2 font-semibold">
            Category
          </label>
          <select
            id="subCategory"
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
            name="category"
            required
          >
            <option>Select Category</option>
            <option value="Business Website">Business Website</option>
            <option value="E-commerce Website">E-commerce Website</option>
            <option value="Garments Buying House">Garments Buying House</option>
            <option value="Education Website">Education Website</option>
            <option value="Industrial Website">Industrial Website</option>
            <option value="News Portal Website">News Portal Website</option>
            <option value="Personal Website">Personal Website</option>
            <option value="Portfolio Website">Portfolio Website</option>
          </select>
        </div>
      </div>

      {/* area form */}
      <div className="w-full">
        <label htmlFor="description" className="block mb-2 font-semibold">
          Description
        </label>
        <textarea
          required
          id="description"
          name="description"
          className="border border-[#1DE8B1] focus:outline-[#1DE8B1] h-40 rounded px-3 py-2 w-full"
          placeholder="Enter Description"
        ></textarea>
      </div>

      {/* File input */}
      <h3 className="block mb-2 font-semibold mt-2"> Upload Image</h3>
      <div className="flex items-center justify-center w-full  mb-4">
        <label className="flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span>
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            name="image"
            className="hidden"
            required
          />
        </label>
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full bg-[#1DE8B1] py-3 rounded-md title text-white font-semibold"
        >
          {isUploading ? (
            <div className="flex gap-1">
              <h1 className="">Uploading</h1>
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            <div>Submit</div>
          )}
        </button>
      </div>
    </form>
  );
};

export default OrderNowInputField;
