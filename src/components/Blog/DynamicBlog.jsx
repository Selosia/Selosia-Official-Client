import axios from "axios";
import { useEffect, useState } from "react";
// import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import BlogCommentPostModal from "../../modals/BlogCommentPostModal";
import { BiCommentDots } from "react-icons/bi";
import Loader from "../../shared/Loader";

const DynamicBlog = ({ dynamicBlogs }) => {
  console.log(dynamicBlogs);
  // modal submit
  const [modalData, setModalData] = useState();
  const handleCommentModal = (data) => {
    setModalData(data);
  };

  return (
    <div className="max-w-screen-xl h-full space-y-12">
      <div className="space-y-12 lg:space-y-0">
        {dynamicBlogs?.map((data, i) => (
          <div key={i + 1}>
            <div className="flex flex-col lg:mt-10 md:flex-row  gap-8">
              <div className="w-full ">
                <img className="h-60 w-full" src={data?.blogImage} alt="pic" />
              </div>
              <div className="w-full space-y-3">
                <h2 className="flex gap-2 items-center">
                  {/* <BsCalendarDate className="w-6 h-6"></BsCalendarDate> */}
                  <span>{data?.dates}</span>
                </h2>
                <h2 className="text-2xl title font-semibold">{data?.title}</h2>

                <p>{data?.description.slice(0, 219)}....</p>
                <div className="flex justify-between">
                  <Link
                    to={`/dynamic-blog/${data?._id}`}
                    className="text-[#26BFC7]  font-semibold  border-black pb-1 border-b-2 "
                  >
                    Read more
                  </Link>

                  <div className="flex gap-8">
                    {/* modal open button */}
                    <label
                      onClick={() => handleCommentModal(data)}
                      htmlFor="CommentForABlogModal"
                      className="cursor-pointer flex font-bold text-[#26BFC7]"
                    >
                      leave comment
                      <BiCommentDots className="mt-1 text-xl ml-2" />
                    </label>
                  </div>
                </div>
                <div>
                  <hr />
                  <div className="flex mt-2 justify-between">
                    <h1 className="title">{data?.authorName}</h1>
                    <h1 className="font-semibold">
                      {data?.date.slice(0, 10).split("-").reverse().join("-")}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* //!  modal body  */}
        <BlogCommentPostModal modalData={modalData} />
      </div>
    </div>
  );
};

export default DynamicBlog;
