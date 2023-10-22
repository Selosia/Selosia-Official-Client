import { useLoaderData } from "react-router-dom";

const DynamicActualBuyerProfile = () => {
  const profile = useLoaderData();
  console.log(profile);
  return (
    <div>
      <div className="bg-green-300	h-28 mt-10 md:w-[54rem] mx-auto w-auto	"></div>
      <div className="">
        <img
          className="h-16 w-16 rounded-full mx-auto -mt-9  "
          src={profile.data.image}
          alt=""
        />
      </div>
      <div className="text-center mt-3">
        <h1 className="text-3xl font-bold ">{profile.data.name}</h1>
        <p className="font-bold">{profile.data.email}</p>
      </div>
      <div>
        <p className="my-4 ml-12 text-sm font-semibold">Buyers Id :{profile.data._id} </p>
      </div>
    </div>
  );
};

export default DynamicActualBuyerProfile;
