import { useLoaderData } from "react-router-dom";
import BlogBanner from "../components/Blog/BlogBanner";
import BlogsRightSide from "../components/Blog/BlogsRightSide";
import BlogDetailsSection from "../components/BlogDetails/BlogDetailsSection";

const BlogDetails = () => {
  const blog = useLoaderData();
  // console.log(blog);
  return (
    <div className="space-y-20">
      <BlogBanner />

      {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 px-10 py-20"> */}
      {/* Dynamic Blog will display in this section */}
      <div className="md:col-span-9">
        <BlogDetailsSection blogInfo={blog} />
      </div>
      {/*  This is the sidebar */}
      {/* <div className="md:col-span-3 ">
          <BlogsRightSide />
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default BlogDetails;
