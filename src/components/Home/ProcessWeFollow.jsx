import { FaMedal } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { GrDeploy } from "react-icons/gr";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TbDeviceImacCode } from "react-icons/tb";
import { MdDeveloperBoard, MdSupportAgent } from "react-icons/md";

const ProcessWeFollow = () => {
  return (
    <div className="bg-[#dbf7f8]">
      <div className="container m-auto">
        <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full ">
          <div className="mb-20">
            <h1 className="text-2xl mb-4  title text-start text-gray-800 capitalize lg:text-3xl dark:text-white">
              Process We Follow
            </h1>
            <div className="underlineAnimation mt-3"></div>
            {/* <div className="flex mx-auto mt-6">
              <span className="inline-block w-40 h-1 bg-[#26BEC7] rounded-full"></span>
              <span className="inline-block w-3 h-1 mx-1 bg-[#26BEC7] rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-[#26BEC7] rounded-full"></span>
            </div> */}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <GiNotebook className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">1. Requirement Gathering</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    We follow the first and foremost priority of gathering
                    requirements, resources, and information to begin our
                    project.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <MdDeveloperBoard className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">2. UI/UX Design</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    We create catchy and charming designs with the latest tools
                    of designing to make it a best user-friendly experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <HiOutlineNewspaper className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">3. Prototype</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    After designing, you will get your prototype, which will be
                    sent ahead for the development process for the product.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <TbDeviceImacCode className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">4. Development</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    Development of mobile application/web/blockchain started
                    using latest tools and technologies with transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-3 lg:px-36 pt-20">
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <FaMedal className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">5. Quality Assurance</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    Hyperlink values quality and provides 100% bug-free
                    application with no compromise in it.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <GrDeploy className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">6. Deployment</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    After trial and following all processes, your app is ready
                    to launch on the App store or Play Store.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-left pb-10 bg-gray-50 rounded-2xl shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
              <div className="px-9">
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full shadow-sm bg-[#F2F2F2] -mt-10">
                  <MdSupportAgent className="text-4xl" />
                </div>
                <div className="mt-6">
                  <h2 className="mb-2 font-bold">7. Support & Maintenance</h2>
                  <p className="text-sm leading-5 text-gray-900">
                    Our company offers you all support and the team is always
                    ready to answer every query after deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessWeFollow;
