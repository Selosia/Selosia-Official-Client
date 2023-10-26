import { BiCommentDots } from "react-icons/bi";
import BlogCommentPostModal from "../../modals/BlogCommentPostModal";
import BlogComments from "../BlogDetails/BlogComments";
import RestOfBlogs from "./RestOfBlogs";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { LiaComments } from "react-icons/lia";

const BlogDetailsSection = ({ blogInfo }) => {
  // console.log(blogInfo.data._id);
  const [modalData, setModalData] = useState();
  const handleCommentModal = (data) => {
    setModalData(data);
  };

  const [commentData, setCommentData] = useState();
  // console.log(commentData);
  useEffect(() => {
    axios
      .get(
        `https://web-tech-official-server.vercel.app/blogsComments/${blogInfo?.data._id}`
      )
      .then((res) => {
        // console.log(res.data.data);
        setCommentData(res?.data?.data);
      });
  }, [blogInfo?.data?._id]);
  return (
    <div className="grid lg:grid-cols-12 grid-cols-1 mx-10 max-w-screen-2xl ">
      <div className="bg-amber-50 lg:col-span-8  p-3">
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

        <div className=" text-center mb-20 mt-10">
          <BlogComments blogID={blogInfo?.data?._id} />
          {commentData?.length === 0 && (
            <div className=" text-center  text-md title text-red-500">
              <LiaComments className="w-1/2 mx-auto text-6xl" />
              No Comments <br />
              Be the first to comment
            </div>
          )}
          {/* modal open button */}
          <label
            onClick={() => handleCommentModal(blogInfo?.data)}
            htmlFor="CommentForABlogModal"
            className=" text-center flex  mx-auto mt-2  w-1/4 duration-500 transition-all justify-center font-bold text-[#26BFC7]"
          >
            leave comment
            <BiCommentDots className="mt-1 text-xl ml-2" />
          </label>
          <BlogCommentPostModal modalData={modalData} />
        </div>
      </div>

      {/* load other rest of the blog...... */}
      <div className="lg:col-span-4">
        <RestOfBlogs excludeBlog={blogInfo?.data} />
      </div>
    </div>
  );
};

export default BlogDetailsSection;
