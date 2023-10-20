import { useEffect, useState } from "react";
import BlogBanner from "../components/Blog/BlogBanner";
import BlogsRightSide from "../components/Blog/BlogsRightSide";
import DynamicBlog from "../components/Blog/DynamicBlog";
import Loader from "../shared/Loader";
import { getAllBlogs } from "../apis/blogOperation";

const Blog = () => {
  const [dynamicBlogs, setDynamicBlogs] = useState([]);
  const [sideData, setSideData] = useState([]);

  useEffect(() => {
    getAllBlogs().then((res) => {
      setDynamicBlogs(res?.data);
      setSideData(res?.data);
    });
  }, []);

  return (
    <div className="space-y-20 mt-32">
      <BlogBanner />
      <div>
        {sideData?.length === 0 && dynamicBlogs?.length === 0 ? (
          <div className="mt-72 flex justify-center ">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 max-w-screen-xl mx-auto gap-20 px-10 py-20">
            <div className="md:col-span-9">
              <DynamicBlog dynamicBlogs={dynamicBlogs} />
            </div>
            <div className="md:col-span-3">
              <BlogsRightSide sideData={sideData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
