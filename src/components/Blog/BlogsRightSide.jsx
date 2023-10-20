import { Link } from "react-router-dom";
import empty from "../../assets/icon/empty.png";
import Loader from "../../shared/Loader";
import { useState } from "react";

const BlogsRightSide = ({ sideData }) => {
  console.log(sideData);
  const [searchQuery, setSearchQuery] = useState("");

  //! search Function
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //! filter data according to search query
  const filteredData = sideData?.filter((data) => {
    if (data && data?.title && searchQuery) {
      return data?.title?.toLowerCase().includes(searchQuery?.toLowerCase());
    }
    return false;
  });

  return (
    <div className="w-full h-full">
      <div className="w-full flex gap-1">
        <input
          className="w-full border-2 border-black py-2 px-3 rounded-lg focus:outline-none"
          placeholder=" Search"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Display filtered results */}
      <div className="">
        {filteredData?.length === 0 && searchQuery !== "" && (
          <div className="mt-5 text-red-800 font-bold">
            <img src={empty} className="w-10 h-10 mx-auto my-auto" alt="" />
            <p className="text-center mt-1 "> No search results found.</p>
          </div>
        )}
        {(searchQuery === "" ? sideData : filteredData)
          ?.slice(0, 5)
          ?.reverse()
          ?.map((data, idx) => (
            <div key={idx}>
              <Link to={`/dynamic-blog/${data?._id}`}>
                <div className="my-3  font-semibold text-[#26BFC7] hover:underline">
                  {data?.title}
                </div>
              </Link>
              <hr />
            </div>
          ))}
      </div>

      {/* Latest Posts */}
      {/* <div className="space-y-4 text-[#5A5A5A] py-8">
        <h3 className="text-3xl ">Latest Posts</h3>
        <hr />
      </div> */}
      {/* Category */}
      {/* <div className="space-y-4 text-[#5A5A5A] py-8">
        <h3 className="text-3xl ">Category</h3>
        <hr />
        <h3 className="text-xl">Category 1</h3>
        <hr />
        <h3 className="text-xl">Category 2</h3>
        <hr />
        <h3 className="text-xl">Category 3</h3>
        <hr />
        <h3 className="text-xl">Category 4</h3>
        <hr />
        <h3 className="text-xl">Category 5</h3>
        <hr />
      </div> */}
    </div>
  );
};

export default BlogsRightSide;
