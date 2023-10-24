
import { useLoaderData } from "react-router-dom";



const DynamicProvableBuyerProfile = () => {
  const profile = useLoaderData();


  
//   useEffect(() => {
//     fetch(`https://selosia-official-server.vercel.app/api/v1/user/provableBuyer?email=${profile?.data?.email}`)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [profile?.data?.email]);
//   console.log(data)
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

export default DynamicProvableBuyerProfile;
