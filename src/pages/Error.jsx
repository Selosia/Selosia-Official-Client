const Error = () => {
  const divStyle = {
    backgroundImage: 'url("https://i.ibb.co/1d9fJVJ/brett-jordan-XWar9-Mb-NGUY-unsplash.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <section className=" h-screen" style={divStyle}>
      <div className="bg-black opacity-80 h-screen">
        <div className="flex flex-col justify-center items-center myComponent pt-32">
          <div className="">
            <img
              className="w-28 h-28 rounded-full"
              src="https://i.ibb.co/GJZRbRp/mulyadi-Zn-Lpr-In-KM7s-unsplash.jpg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-[#26BCE7] mt-10 text-5xl">Opps 404</h3>
          </div>
          <div className="mt-20 animate-bounce transition duration-1000 ease-in-out">
            <p className="text-3xl font-bold text-[#26BCE7]">Page not found</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
