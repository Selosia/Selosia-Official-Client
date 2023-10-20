const AllSubmittedTaskHeading = ({task, Heading, numberHeading}) => {
    return (
      <div>
        <div className="md:flex text-center  justify-between items-center  p-5 pb-5">
          <div>
            <h1 className="text-2xl font-semibold">{Heading}</h1>
          </div>
          <div>
          <p className="text-xl font-semibold">{numberHeading} : {task}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AllSubmittedTaskHeading;
  