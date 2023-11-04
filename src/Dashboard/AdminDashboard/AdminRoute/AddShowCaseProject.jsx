import AddShowCaseProjectField from "./AddShowCaseProjectField";

const AddShowCaseProject = () => {
  return (
    <section>
      <div className="p-8 text-center">
        <h1 className="text-3xl title ">Add Showcase Project</h1>
        <p className="font-semibold mt-2">Teamwork in Every Line of Code</p>
      </div>

      <div className="mx-auto max-w-[600px] px-4  pb-8 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <AddShowCaseProjectField />
          <div className="flex justify-center "></div>
        </div>
      </div>
    </section>
  );
};

export default AddShowCaseProject;
