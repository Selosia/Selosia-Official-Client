import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { postNewBlog } from "../../../apis/blogOperation";
import { handleImgBBUpload } from "../../../apis/imageUploadOperatio";

const AddBlog = () => {
  const { user } = useContext(AuthContext);
  const [imgURL, setImgURL] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const date = new Date();
  let dates = date.toLocaleDateString("en-US");

  //! Image upload
  const handleImageUpload = async (event) => {
    const image = event.target.files[0];

    // preview uploaded image
    if (image) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };

      reader.readAsDataURL(image);
    }
    // preview uploaded image end

    handleImgBBUpload(image).then((response) => {
      // console.log(response);
      setImgURL(response);
    });
  };

  // ! Form Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;

    const blogData = {
      authorName: user?.displayName,
      authorEmail: user?.email,
      authorImage: user?.photoURL,
      title,
      description,
      date: dates,
      blogImage: imgURL,
    };
    setLoading(true);

    postNewBlog(blogData)
      .then(() => {
        setImagePreview(null);
        form.reset();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="px-12 py-12 items-center">
      <div className="text-center">
        <h1 className="title text-3xl ">Add Blog</h1>
        <p className="mt-1 font-semibold">
          Write, Share, Connect, Begin Your Blogging Adventure
        </p>
      </div>
      <form onSubmit={handleSubmit} className="md:w-2/4 mt-10 mx-auto">
        {/* Title */}

        <div className="md:flex gap-8">
          <div className="mb-4 w-full">
            <label htmlFor="name" className="block mb-2 font-semibold">
              Blog Title
            </label>
            <input
              id="name"
              type="text"
              name="title"
              required
              className="border border-[#1DE8B1] focus:outline-[#1DE8B1] rounded px-3 py-2 w-full text-black"
              placeholder="Enter title"
            />
          </div>
        </div>

        {/* Text area form */}

        <div className="w-full">
          <label htmlFor="description" className="block mb-2 font-semibold">
            Blog Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            className="border border-[#1DE8B1] focus:outline-[#1DE8B1] h-40 rounded px-3 py-2 w-full text-black"
            placeholder="Blog Description"
            style={{ whiteSpace: "pre-wrap" }}
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
              onChange={handleImageUpload}
              id="dropzone-file"
              type="file"
              required
              className="hidden"
            />
          </label>
        </div>
        <div className="flex justify-center ">
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full max-h-32 my-2"
            />
          )}
        </div>
        {/* Submit Button */}

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
              <div>Add Blog</div>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
