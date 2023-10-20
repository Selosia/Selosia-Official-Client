import BlogComments from "../BlogDetails/BlogComments";

const BlogDetailsSection = ({ blogInfo }) => {
  // console.log(blogInfo);
  return (
    <div>
      <div className="bg-amber-50 max-w-screen-lg mx-auto p-3">
        <h1 className="font-bold text-2xl mb-5 text-amber-400 underline underline-offset-4">
          {blogInfo?.data?.subCategory}
        </h1>
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
          <p className="w-full ">{blogInfo?.data?.description}</p>
        </div>

        {/* blog comment section  */}

        <BlogComments blogID={blogInfo?.data?._id} />
      </div>
      {/* load other rest of the blog...... */}

      {/* <div>
        <RestOfBlogs excludeBlog={blog?.data} />
      </div> */}
    </div>
  );
};

export default BlogDetailsSection;
