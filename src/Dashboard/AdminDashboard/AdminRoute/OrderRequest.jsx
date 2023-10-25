import { useEffect, useState } from "react";
import OrderRequestHeader from "../../../utils/DashBoardUtilities/AdminUtilities/OrderRequest/OrderRequestHeader";
import OrderRequestTable from "../../../utils/DashBoardUtilities/AdminUtilities/OrderRequestTable";
// import { getAllPendingOrders } from "../../../apis/orderOperation";
import ReactPaginate from "react-paginate";
const OrderRequest = () => {
  const [newOrderRequest, setNewOrderRequest] = useState([]);

  useEffect(() => {
    fetch(
      `https://selosia-official-server.vercel.app/api/v1/project/all-pendingOrders`
    )
      .then((res) => res.json())
      .then((data) => setNewOrderRequest(data?.data));
  }, []);

  const fetchSubmittedProject = async (currentPage) => {
    const res = await fetch(
      `https://codexriddle-official-server.vercel.app/api/v1/project/all-pendingOrders?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  // console.log(newOrderRequest);

  return (
    <div className="">
      {/* <h1>When a user or buyer send a order. The order will come in this page</h1> */}
      <OrderRequestHeader newOrderRequest={newOrderRequest} />
      <OrderRequestTable newOrderRequest={newOrderRequest} />
    </div>
  );
};

export default OrderRequest;
