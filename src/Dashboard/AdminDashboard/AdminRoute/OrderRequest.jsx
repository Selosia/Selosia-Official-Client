import { useEffect, useState } from "react";
import OrderRequestHeader from "../../../utils/DashBoardUtilities/AdminUtilities/OrderRequest/OrderRequestHeader";
import OrderRequestTable from "../../../utils/DashBoardUtilities/AdminUtilities/OrderRequestTable";
// import { getAllPendingOrders } from "../../../apis/orderOperation";
import ReactPaginate from "react-paginate";
const OrderRequest = () => {
  const [newOrderRequest, setNewOrderRequest] = useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit = 2;
  useEffect(() => {
    const getSubmittedProject = async () => {
      const res = await fetch(
        `https://codexriddle-official-server.vercel.app/api/v1/project/all-pendingOrders?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));

      setNewOrderRequest(data.data);
    };

    getSubmittedProject();
  }, [limit]);

  const fetchSubmittedProject = async (currentPage) => {
    const res = await fetch(
      `https://codexriddle-official-server.vercel.app/api/v1/project/all-pendingOrders?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    const submittedProjectFromServer = await fetchSubmittedProject(currentPage);
    setpageCount(Math.ceil(submittedProjectFromServer.total / limit));
    setNewOrderRequest(submittedProjectFromServer.data);
  };

  // console.log(newOrderRequest);

  return (
    <div className="">
      {/* <h1>When a user or buyer send a order. The order will come in this page</h1> */}
      <OrderRequestHeader newOrderRequest={newOrderRequest} />
      <OrderRequestTable newOrderRequest={newOrderRequest} />
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

export default OrderRequest;
