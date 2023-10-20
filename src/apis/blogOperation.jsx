import instance from "../axios";

//* .......... Save a new blog ..........
export const postNewBlog = async (blogData) => {
  try {
    const response = await instance.post("api/v1/blog/create-blog", blogData);
    const data = await response;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

//* .......... Get all blog posts ..........
export const getAllBlogs = async () => {
  try {
    const response = await instance.get("api/v1/blog/all-blogs");
    const data = await response;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
