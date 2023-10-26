import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "../BlogDetails/CommentCard";
import { FaComments } from "react-icons/fa";
const BlogComments = ({ blogID }) => {
  const [commentData, setCommentData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://web-tech-official-server.vercel.app/blogsComments/${blogID}`
      )
      .then((res) => {
        setCommentData(res?.data?.data);
      });
  }, [blogID]);
  // console.log(commentData);
  return (
    <div className="">
      {commentData?.length > 0 ? (
        commentData?.map((data) => (
          <CommentCard key={data._id} data={data}></CommentCard>
        ))
      ) : (
        <div className=" text-center  text-md title text-red-500">
          <FaComments className="w-1/2 mx-auto text-6xl" />
          No Comments <br />
          Be the first to comment
        </div>
      )}
    </div>
  );
};

export default BlogComments;
