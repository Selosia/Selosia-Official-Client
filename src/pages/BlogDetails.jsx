import { useLoaderData } from "react-router-dom";
import BlogBanner from "../components/Blog/BlogBanner";
import BlogsRightSide from "../components/Blog/BlogsRightSide";
import BlogDetailsSection from "../components/BlogDetails/BlogDetailsSection";
import BlogComments from "../components/BlogDetails/BlogComments";

const BlogDetails = () => {
  const blog = useLoaderData();
  // console.log("blog details " , blog);
  return (
    <div className="space-y-20 lg:mt-32">
      <BlogBanner />

      {/* Dynamic Blog will display in this section */}
      <div>
        <BlogDetailsSection blogInfo={blog} />
        <BlogComments />
      </div>
    </div>
  );
};

export default BlogDetails;
