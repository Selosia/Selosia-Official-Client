const AboutBanner = () => {
  return (
    <section className="bg-[#f0fbfc]">
      <div className="mx-auto max-w-screen-xl px-4 py-10 lg:flex lg:h-80 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Welcome to{" "}
            <strong className="font-extrabold text-[#26BFC7]">Selosia.</strong>
          </h1>

          <p className="mt-4 lg:text-lg text-gray-800">
            At Selosia, We are a group of enthusiastic people who share the goal of providing website services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
