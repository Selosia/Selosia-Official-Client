import { useEffect, useState } from "react";
import AllApproveOrdersHeader from "../../../utils/DashBoardUtilities/AdminUtilities/AllApproveOrders/AllApproveOrdersHeader";
import AllApproveOrdersTable from "../../../utils/DashBoardUtilities/AdminUtilities/AllApproveOrders/AllApproveOrdersTable";
// import axios from "axios";

const AllApproveOrders = () => {
  const [approveOrders, setApproveOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://selosia-official-server.vercel.app/api/v1/project/all-workingOrders`
    )
      .then((res) => res.json())
      .then((data) => setApproveOrder(data?.data));
  }, []);

  return (
    <div className="space-y-5">
      {/* Header */}
      <AllApproveOrdersHeader orderList={approveOrders} />

      {/* Table */}
      <AllApproveOrdersTable orderList={approveOrders} />
    </div>
  );
};

export default AllApproveOrders;
