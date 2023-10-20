import { useEffect, useState } from "react";
import AllApproveOrdersHeader from "../../../utils/DashBoardUtilities/AdminUtilities/AllApproveOrders/AllApproveOrdersHeader";
import AllApproveOrdersTable from "../../../utils/DashBoardUtilities/AdminUtilities/AllApproveOrders/AllApproveOrdersTable";
// import axios from "axios";

import ReactPaginate from "react-paginate";

const AllApproveOrders = () => {
    const [orderList, setOrderList] = useState([]);
    const [pageCount, setpageCount] = useState(0);

    let limit = 6;
    useEffect(() => {
      const getSubmittedProject = async () => {
        const res = await fetch(
          `https://codexriddle-official-server.vercel.app/api/v1/project/all-workingOrders?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setpageCount(Math.ceil(total / limit));
  
        setOrderList(data.data);
      };
  
      getSubmittedProject();
    }, [limit]);

    
    const fetchSubmittedProject = async (currentPage) => {
      const res = await fetch(
        `https://codexriddle-official-server.vercel.app/api/v1/project/all-workingOrders?_page=${currentPage}&_limit=${limit}`
      );
      const data = await res.json();
      return data;
    };

    const handlePageClick = async (data) => {
      console.log(data.selected);
      let currentPage = data.selected + 1;
      const submittedProjectFromServer = await fetchSubmittedProject(currentPage);
      setpageCount(Math.ceil(submittedProjectFromServer.total / limit));
      setOrderList(submittedProjectFromServer.data);
    };

    return (
        <div className="space-y-5">
        {/* Header */}
        <AllApproveOrdersHeader orderList={orderList} />
  
        {/* Table */}
        <AllApproveOrdersTable orderList={orderList} />
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

export default AllApproveOrders;