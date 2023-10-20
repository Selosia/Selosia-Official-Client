import axios from "axios";
import AddShowCaseProjectField from "./AddShowCaseProjectField";

const SubmitCompletedProject = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const link = form.link.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const date = new Date();
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=3dfa6bf115a66c0ef7ead0628ac833e3`;
    axios
      .post(url, formData)
      .then((res) => {
        const imageUrl = res.data.data.display_url;
        const orderInfo = { title, link, description, imageUrl, date };
        console.log(orderInfo);
        axios
          .post(
            `https://web-tech-official-server.vercel.app/post/new/showcase/project
        `,
            orderInfo
          )
          .then((res) => {
            if (res.data.data.insertedId) {
              alert("Your Projects Successfully Submitted");
              form.reset();
            }
          })
          .catch((err) => {
            if (err) {
              alert("Something Went Wrong");
            }
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <div className="p-8">
        <h1 className="text-2xl font-semibold text-center">
          Submit Completed Projects
        </h1>
      </div>

      <div className="mx-auto max-w-[600px] px-4  pb-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <AddShowCaseProjectField handleSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default SubmitCompletedProject;
