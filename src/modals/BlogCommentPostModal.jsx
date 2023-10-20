import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const BlogCommentPostModal = ({modalData}) => {

    const {user} = useContext(AuthContext)
    const date = new Date();
    const dateFormate = date.toLocaleDateString()


    const handleSubmit =(event)=>{
        event.preventDefault()

        const comment = event.target.comment.value;

        const commentData = {
           blogID: modalData?._id,
           comment,
           commenterName: user?.displayName,
            dateTime:dateFormate
        }

        fetch(`https://web-tech-official-server.vercel.app/blogsComments`,{
            method:'post',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(commentData)
        })
        .then(res => res.json())
        .then(result => {
            // console.log(result)
            event.target.reset()
            toast.success(result.message)
        })


    }

    return (
        <div>
            <input
                type="checkbox"
                id="CommentForABlogModal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box relative ">
                <label
                    htmlFor="CommentForABlogModal"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                    ✕
                </label>

                <div>
                    <h1 className="text-center">Leave comment for
                        <p className="text-amber-400">{modalData?.title}</p>
                    </h1>

                    <div className="text-gray-700 py-3">
                    <form onSubmit={()=>handleSubmit(event)}>
                    <textarea 
                    className="textarea textarea-warning w-full" 
                    placeholder="Write your comment"
                    name="comment"
                    required
                    ></textarea>

                
                <button  type="submit" className="btn btn-sm">
                    <label
                    htmlFor="CommentForABlogModal"
                        >
                        submit
                    </label>
                </button>
             
                   
                    </form>
                    </div>
                </div>
                </div>
            </div>
    </div>
    );
};

export default BlogCommentPostModal;