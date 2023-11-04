import { useState } from "react";
import OrderNowInputField from "./OrderNowInputField";
import { orderNewProject } from "../../apis/orderOperation";
import { handleImgBBUpload } from "../../apis/imageUploadOperatio";

const OrderNow = () => {
  const [convertedDatetime, setConvertedDatetime] = useState("");
  const [isUploading, setUploading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const projectName = form.projectName.value;
    const buyerEmail = form.buyerEmail.value;
    const buyerName = form.buyerName.value;
    const domainName = form.domainName.value;
    const category = form.category.value;
    const description = form.description.value;
    const image = form.image.files[0];
    const OrderDate = String(new Date().toLocaleString());
    setUploading(true);
    handleImgBBUpload(image)
      .then((res) => {
        const imageUrl = res;

        console.log("imageUrl", imageUrl);

        const orderInfo = {
          projectName,
          orderSenderEmail: buyerEmail,
          orderSenderName: buyerName,
          domainName,
          category,
          description,
          imageUrl,
          status: "pending",
          OrderDate,
          deliveryDate: convertedDatetime,
        };

        orderNewProject(orderInfo).then((response) => {
          console.log(response);
          form.reset();
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <div>
      <div>
        <section>
          <div className="p-8">
            <h1 className="text-2xl font-semibold text-center">Order Now</h1>
          </div>
          <div className="mx-auto max-w-[600px] px-4  pb-8 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <OrderNowInputField
                isUploading={isUploading}
                handleSubmit={handleSubmit}
                setConvertedDatetime={setConvertedDatetime}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OrderNow;
