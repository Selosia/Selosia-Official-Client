const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      {/* <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-purple-500"></div>
        <img
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
          className="rounded-full h-7 w-7"
        />
      </div> */}
      {/* <span className="loading loading-dots loading-lg"></span> */}
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};

export default Loader;
