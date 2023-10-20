import { BiSupport } from "react-icons/bi";
import { BsServer } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { LuMonitorSmartphone } from "react-icons/lu";

const HomeOurServicesCards = () => {
  return (
    <div className="grid gap-4 font-semibold lg:font-normal row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div className="flex flex-col justify-evenly p-5 border rounded shadow-md hover:scale-95 duration-500 hover:-translate-y-2 hover:shadow-xl bg-[#F2F2F2]">
        <div>
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-[inset_-12px_-8px_40px_#46464620] text-[#26BEC7]">
            <LuMonitorSmartphone className="text-4xl" />
          </div>
          <div>
            <h6 className="mb-2 text-xl font-bold">Web Development</h6>
            <p className="mb-3  text-gray-900">
              Elevate your online presence with our expertly crafted websites.
              We design stunning, user-friendly, and responsive sites that
              captivate and engage visitors, ensuring a lasting impact for your
              online storefront.
            </p>
          </div>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col justify-evenly p-5 border rounded shadow-md hover:scale-95 duration-500 hover:-translate-y-2 hover:shadow-xl bg-[#F2F2F2]">
        <div>
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-[inset_-12px_-8px_40px_#46464620] text-[#26BEC7]">
            <CgWebsite className="text-4xl" />
          </div>
          <h6 className="mb-2 text-xl font-bold">E-Commerce Solutions</h6>
          <p className="mb-3  text-gray-900">
            Boost your online store{"'"}s success with our e-commerce expertise.
            We develop secure, scalable, and robust platforms that optimize
            sales and elevate the shopping journey for your customers.
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col justify-evenly p-5 border rounded shadow-md hover:scale-95 duration-500 hover:-translate-y-2 hover:shadow-xl bg-[#F2F2F2]">
        <div>
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-[inset_-12px_-8px_40px_#46464620] text-[#26BEC7]">
            <BsServer className="text-4xl" />
          </div>
          <h6 className="mb-2 text-xl font-bold">Hosting and Maintenance</h6>
          <p className="mb-3  text-gray-900">
            Relax, we{"'"}ve got your technical needs covered. Our services
            include web hosting and maintenance, ensuring your site remains
            secure, up-to-date, and runs seamlessly, allowing you to focus on
            your business worry-free.
          </p>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col justify-evenly p-5 border rounded shadow-md hover:scale-95 duration-500 hover:-translate-y-2 hover:shadow-xl bg-[#F2F2F2]">
        <div>
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-[inset_-12px_-8px_40px_#46464620] text-[#26BEC7]">
            <BiSupport className="text-4xl" />
          </div>
          <h6 className="mb-2 text-xl font-bold">Tech support</h6>
          <p className="mb-3  text-gray-900">
            At Selosias, our dedication to your success goes beyond the launch.
            We provide comprehensive support and maintenance, ensuring the
            seamless operation of your IT systems.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default HomeOurServicesCards;
