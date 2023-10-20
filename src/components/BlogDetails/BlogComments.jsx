import axios from "axios";
import { useEffect, useState } from "react";
import CommentCard from "../BlogDetails/CommentCard";

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
    <div className={commentData ? "h-96 overflow-auto" : "hidden"}>
      {commentData?.map((data) => (
        <CommentCard key={data._id} data={data}></CommentCard>
      ))}
    </div>
  );
};

export default BlogComments;
