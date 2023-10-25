import axios from "axios";
import AddShowCaseProjectField from "./AddShowCaseProjectField";
import Swal from "sweetalert2";

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
              Swal.fire("Wow😲", `${title} successfully submitted`, "success");
              form.reset();
            }
          })
          .catch((err) => {
            if (err) {
              Swal.fire({
                icon: "error",
                title: "Oops👎",
                text: "Something went wrong!",
              });
            }
          });
      })
      .catch((err) => console.log(err));
  };
  return (
    <section>
      <div className="p-8 text-center">
        <h1 className="text-3xl title font-semibold text-center">
          Submit Completed Projects
        </h1>
        <p className="font-semibold mt-1">
          We Want to See Your Finished Projects
        </p>
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
