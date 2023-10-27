const AllSubmittedTaskHeading = ({ task, Heading, numberHeading }) => {
  return (
    <div>
      <div className=" text-start    p-5 pb-5">
        <div>
          <h1 className="text-3xl title">{Heading}</h1>
        </div>
        <div>
          <p className="text-md font-semibold">
            {numberHeading} : {task}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllSubmittedTaskHeading;
