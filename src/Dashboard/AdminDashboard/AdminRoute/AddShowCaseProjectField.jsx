import axios from "axios";
import { useState } from "react";
import { handleImgBBUpload } from "../../../apis/imageUploadOperatio";
import Swal from "sweetalert2";

const AddShowCaseProjectField = () => {
  const [imgPreview, setImgPreview] = useState(null);
  // console.log(imgPreview);
  const [imgURL, setImgUrl] = useState();
  const [isLoading, setLoading] = useState(false);

  const handleImgPreview = async (e) => {
    const form = e.target;

    const image = form.files[0];
    console.log(image);
    if (image) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImgPreview(event.target.result);
      };

      reader.readAsDataURL(image);
    }
    handleImgBBUpload(image).then((res) => {
      setImgUrl(res);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const link = form.link.value;
    const description = form.description.value;

    const date = new Date();

    const projectData = {
      title,
      link,
      description,
      imageUrl: imgURL,
      date,
    };
    setLoading(true);
    axios
      .post(
        `https://web-tech-official-server.vercel.app/post/new/showcase/project
          `,
        projectData
      )
      .then((res) => {
        if (res.data.data.insertedId) {
          Swal.fire("Wow😲", "Project successfully added", "success");
          setImgPreview(null);
          form.reset();
        }
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops👎",
            text: "Something went wrong!",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // console.log(imgPreview);
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 w-full">
        <label htmlFor="name" className="block mb-2 font-semibold">
          Title
        </label>
        <input
          id="name"
          type="text"
          name="title"
          className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
          placeholder="Enter Title"
        />
      </div>
      <div className="mb-4 w-full">
        <label htmlFor="domainName" className="block mb-2 font-semibold">
          Important Link
        </label>
        <input
          id="domainName"
          type="text"
          name="link"
          className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full"
          placeholder="Enter Important Link"
        />
      </div>
      {/* area form */}
      <div className="w-full">
        <label htmlFor="description" className="block mb-2 font-semibold">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="border border-[#1DE8B1] focus:outline-[#1DE8B1] h-40 rounded px-3 py-2 w-full"
          placeholder="Enter Description"
        ></textarea>
      </div>
      {/* File input */}
      <h3 className="block mb-2 font-semibold mt-2">Upload Image</h3>
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
            onChange={handleImgPreview}
            id="dropzone-file"
            type="file"
            required
            className="hidden"
          />
        </label>
      </div>
      <div className="flex justify-center ">
        {imgPreview && (
          <img
            src={imgPreview}
            alt="Preview"
            className="max-w-full max-h-32 my-2"
          />
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex title transition-all duration-500 btn hover:border-[#1DE8B1] btn-outline items-center justify-center w-full hover:bg-[#1DE8B1] py-3 rounded-md  font-semibold"
        >
          {isLoading ? (
            <div className="flex gap-2">
              <h1 className="mt-1">Uploading</h1>
              <span className="loading loading-dots loading-md"></span>
            </div>
          ) : (
            <div>Add Project</div>
          )}
        </button>
      </div>
    </form>
  );
};

export default AddShowCaseProjectField;
