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
    <div className="p-10 max-h-[73vh] overflow-auto min-h-[20vh]">
      {commentData?.map((data) => (
        <CommentCard key={data._id} data={data}></CommentCard>
      ))}
    </div>
  );
};

export default BlogComments;
