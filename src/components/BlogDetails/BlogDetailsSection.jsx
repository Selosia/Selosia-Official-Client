import BlogComments from "../BlogDetails/BlogComments";
import RestOfBlogs from "./RestOfBlogs";

const BlogDetailsSection = ({ blogInfo }) => {
  // console.log(blogInfo);
  return (
    <div>
      <div className="bg-amber-50 max-w-screen-lg mx-auto p-3">
      
        <div className="w-full h-80 overflow-hidden rounded-lg">
          <img
            className="w-full"
            src={blogInfo?.data?.blogImage}
            alt="blogPic"
          />
        </div>

        <div className="space-y-2 p-4">
          <div className="flex justify-between">
            <h1 className="font-semibold mt-5">{blogInfo?.data?.dates}</h1>
          </div>
          <h1 className="font-semibold text-3xl">{blogInfo?.data?.title}</h1>
          <pre className="w-full whitespace-break-spaces font-serif">{blogInfo?.data?.description}</pre>
        </div>

        {/* blog comment section  */}

        <BlogComments blogID={blogInfo?.data?._id} />
      </div>
      {/* load other rest of the blog...... */}

      <div>
       
        <RestOfBlogs excludeBlog={blogInfo?.data} />
      </div>
    </div>
  );
};

export default BlogDetailsSection;
