import blogBg from "../../assets/Image/blogbg.jpg";

const BlogBanner = () => {
  return (
    <div>
      <div className="bg-cover bg-center text-center bg-black bg-blend-multiply ">
        <img
          className="h-52 w-full object-cover bg-black bg-blend-multiply blur-sm opacity-40"
          src={blogBg}
          alt=""
        />
      </div>
      <div className="text-center -mt-36 space-y-2 text-white">
        <h2 className="text-4xl">Our Blogs</h2>
        <p>Fueling Your Imagination Through Our Blog Network</p>
      </div>
    </div>
  );
};

export default BlogBanner;
