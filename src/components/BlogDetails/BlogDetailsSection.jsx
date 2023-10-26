import { BiCommentDots } from "react-icons/bi";
import BlogCommentPostModal from "../../modals/BlogCommentPostModal";
import BlogComments from "../BlogDetails/BlogComments";
import RestOfBlogs from "./RestOfBlogs";
import { useState } from "react";

const BlogDetailsSection = ({ blogInfo }) => {
  console.log(blogInfo);
  const [modalData, setModalData] = useState();
  const handleCommentModal = (data) => {
    setModalData(data);
  };
  return (
    <div>
      <div className="bg-amber-50 max-w-screen-lg mx-auto p-3">
        <div className="w-full h-96 overflow-hidden rounded">
          <img
            className="w-full"
            src={blogInfo?.data?.blogImage}
            alt="blogPic"
          />
        </div>

        <div className="space-y-5 ">
          <div className="flex justify-between">
            <h1 className="font-semibold mt-5">{blogInfo?.data?.dates}</h1>
          </div>
          <h1 className="font-semibold title text-3xl">
            {blogInfo?.data?.title}
          </h1>
          <p className="w-full  whitespace-break-spaces ">
            {blogInfo?.data?.description}
          </p>
        </div>

        {/* blog comment section  */}

        <div className=" text-center h-72 mt-20">
          <BlogComments blogID={blogInfo?.data?._id} />

          {/* modal open button */}
          <label
            onClick={() => handleCommentModal(blogInfo?.data)}
            htmlFor="CommentForABlogModal"
            className=" text-center mt-2 flex justify-center font-bold text-[#26BFC7]"
          >
            leave comment
            <BiCommentDots className="mt-1 text-xl ml-2" />
          </label>
          <BlogCommentPostModal modalData={modalData} />
        </div>
      </div>

      {/* load other rest of the blog...... */}
      <div>
        <RestOfBlogs excludeBlog={blogInfo?.data} />
      </div>
    </div>
  );
};

export default BlogDetailsSection;
