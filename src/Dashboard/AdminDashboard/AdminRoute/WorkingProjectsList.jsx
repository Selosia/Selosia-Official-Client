// import axios from "axios";
import { useEffect, useState } from "react";
import WorkingProjectsListHeader from "../../../utils/DashBoardUtilities/AdminUtilities/WorkingProjectsList/WorkingProjectsListHeader";
import WorkingProjectsListTable from "../../../utils/DashBoardUtilities/AdminUtilities/WorkingProjectsList/WorkingProjectsListTable";
import ReactPaginate from "react-paginate";

const WorkingProjectsList = () => {
    const [workingProjects, setWorkingProjects] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 4;
    useEffect(() => {
        const getSubmittedProject = async () => {
          const res = await fetch(
            `https://codexriddle-official-server.vercel.app/api/v1/project/all-approvedOrders?_page=1&_limit=${limit}`
          );
          const data = await res.json();
          const total = res.headers.get("x-total-count");
          setpageCount(Math.ceil(total / limit));
    
          setWorkingProjects(data.data);
        };
    
        getSubmittedProject();
      }, [limit]);

      const fetchSubmittedProject = async (currentPage) => {
        const res = await fetch(
          `https://codexriddle-official-server.vercel.app/api/v1/project/all-approvedOrders?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
      };

      const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1;
        const submittedProjectFromServer = await fetchSubmittedProject(currentPage);
        setpageCount(Math.ceil(submittedProjectFromServer.total / limit));
        setWorkingProjects(submittedProjectFromServer.data);
      };

    console.log(workingProjects);

    return (
        <div>
        <div>
            {/* Header */}
            <WorkingProjectsListHeader workingProjects={workingProjects} />

            {/* Table */}
            <WorkingProjectsListTable workingProjects={workingProjects} />
        </div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={20}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"join"}
          pageClassName={"btn"}
          pageLinkClassName={"btn"}
          previousClassName={" btn"}
          previousLinkClassName={"btn"}
          nextClassName={" btn"}
          nextLinkClassName={"btn"}
          breakClassName={" btn"}
          breakLinkClassName={"btn"}
          activeClassName={"active"}
        />
        </div>
    );
};

export default WorkingProjectsList;
