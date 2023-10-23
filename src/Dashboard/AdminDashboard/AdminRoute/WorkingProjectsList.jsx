// import axios from "axios";
import { useEffect, useState } from "react";
import WorkingProjectsListHeader from "../../../utils/DashBoardUtilities/AdminUtilities/WorkingProjectsList/WorkingProjectsListHeader";
import WorkingProjectsListTable from "../../../utils/DashBoardUtilities/AdminUtilities/WorkingProjectsList/WorkingProjectsListTable";

const WorkingProjectsList = () => {
  const [workingProjects, setWorkingProject] = useState([]);
  useEffect(() => {
    fetch(
      `https://selosia-official-server.vercel.app/api/v1/project/all-approvedOrders`
    )
      .then((res) => res.json())
      .then((data) => setWorkingProject(data?.data));
  }, []);

  console.log(workingProjects);

  return (
    <div>
      <div>
        {/* Header */}
        <WorkingProjectsListHeader workingProjects={workingProjects} />

        {/* Table */}
        <WorkingProjectsListTable workingProjects={workingProjects} />
      </div>
    </div>
  );
};

export default WorkingProjectsList;
