import { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCommentPostModal from "../../modals/BlogCommentPostModal";

const RestOfBlogs = ({ excludeBlog }) => {
  // console.log(excludeBlog._id);

  const [restOfBlogs, setRestBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://selosia-official-server.vercel.app/api/v1/blog/rest-blogs/${excludeBlog._id}`
      )
      .then((res) => {
        setRestBlogs(res?.data?.data);
      });
  }, [excludeBlog]);

  // modal submit
  const [modalData, setModalData] = useState();
  const handleCommentModal = (data) => {
    setModalData(data);
  };

  return (
    <div className=" mx-auto p-3 h-full space-y-5">
      <h2 className="text-xl title  ">Suggestion Blogs</h2>
      {restOfBlogs?.slice(0, 6).map((data, i) => (
        <div key={i + 1}>
          <div className="bg-white p-4 shadow-md rounded-lg ">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="text-lg title mb-2">{data?.title}</h3>
                <p className="text-gray-600">
                  {data?.description.slice(0, 100)}...
                </p>
                <Link
                  to={`/dynamic-blog/${data?._id}`}
                  className="text-[#1DE8B1] title mt-2 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* modal body start */}
      <BlogCommentPostModal modalData={modalData}></BlogCommentPostModal>

      {/* modal body end */}
    </div>
  );
};

export default RestOfBlogs;
