import { useEffect, useState } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCommentPostModal from "../../modals/BlogCommentPostModal";

const RestOfBlogs = ({excludeBlog}) => {
    

    // console.log(excludeBlog._id);

    const [restOfBlogs, setRestBlogs] = useState([]);
    useEffect(() => {
      axios
        .get(`https://selosia-official-server.vercel.app/api/v1/blog/rest-blogs/${excludeBlog._id}`)
        .then((res) => {
            setRestBlogs(res.data.data);
        });
    }, [excludeBlog]);


     // modal submit
  const [modalData , setModalData] = useState()
  const handleCommentModal = (data) =>{
      setModalData(data)
  }

    return (
     
        <div className="max-w-screen-lg mx-auto p-3 h-full space-y-12">
        {
          restOfBlogs?.map((data, i) => (
          <div key={i + 1}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full ">
                <img className="h-60 w-full" src={data?.blogImage} alt="pic" />
              </div>
              <div className="w-full space-y-4">
                <h2 className="text-2xl">{data?.title}</h2>
                <hr />
                <p>
                  {data?.description.slice(0, 219)}
                  <Link to={`/dynamic-blog/${data?._id}`} className="text-[#1DE8B1]"> see more... </Link>
                </p>
                <div className="flex gap-8">
                  <h2 className="flex gap-2 items-center">
                    <BsCalendarDate className="w-6 h-6"></BsCalendarDate>
                    <span>{data?.dates}</span>
                  </h2>
                  {/* modal open button */}
                    <label
                      onClick={() => handleCommentModal(data)}
                      htmlFor="CommentForABlogModal"
                      className="cursor-pointer text-amber-400"
                    >
                     leave comment
                    </label>
                </div>
              </div>
            </div>
          </div>
        ))
        
        }
  
        {/* modal body start */}
        <BlogCommentPostModal modalData={modalData}></BlogCommentPostModal>
      
        {/* modal body end */}
      </div>
    );
};

export default RestOfBlogs;