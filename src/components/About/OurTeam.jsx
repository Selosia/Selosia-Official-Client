import { useEffect, useState } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
const OurTeam = () => {
  const [members, setMember] = useState([]);
  useEffect(() => {
    fetch(`https://codexriddle-official-server.vercel.app/api/v1/teamMember/all-teamMembers`)
      .then((res) => res.json())
      .then((data) => setMember(data?.data));
  }, []);
  return (
    <div>
      <section className="bg-white max-w-screen-xl font-semibold mx-auto dark:bg-gray-900">
        <div className="container px-6  mx-auto">
          <div className="space-y-2">
            <h1 className="text-2xl mb-4  title text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our Executive Team
            </h1>
            <div className="w-24 h-[2px] bg-[#26BEC7] mx-auto my-5"></div>

            <p className="max-w-2xl mx-auto  text-center  dark:text-gray-300">
              Exceptional Individuals, United by Passion, Forming an Extraordinary Team, Defining Selosia{"'"}s Success
            </p>
          </div>

          <div className="grid mt-10  grid-cols-1 gap-8   lg:grid-cols-3">
            {members
              ?.filter((member) => member.status === "Active")
              .map((member) => (
                <div
                  key={member._id}
                  className="flex flex-col items-center p-8 hover:scale-105 transform hover:text-white transition-all duration-500  border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#26BFC7] dark:border-gray-700 dark:hover:border-transparent"
                >
                  <img
                    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                    src={member?.image}
                    alt=""
                  />

                  <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize hover:text-white dark:text-white group-hover:text-white">
                    {member?.name}
                  </h1>

                  <p className="  capitalize dark:text-gray-300 ">{member?.title}</p>

                  <div className="flex gap-4 mt-3 -mx-2">
                    <a href={member?.facebook}>
                      <BsFacebook className="text-2xl hover:text-white" />
                    </a>
                    <a href={member?.linkedin}>
                      <BsLinkedin className="text-2xl" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
