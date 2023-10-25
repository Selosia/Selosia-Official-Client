import { useEffect, useState } from "react";
import OrderRequestHeader from "../../../utils/DashBoardUtilities/AdminUtilities/OrderRequest/OrderRequestHeader";
import OrderRequestTable from "../../../utils/DashBoardUtilities/AdminUtilities/OrderRequestTable";
import { useQuery } from "@tanstack/react-query";

const OrderRequest = () => {


  // const [newOrderRequest, setNewOrderRequest] = useState([]);



const {data,refetch,isError} = useQuery(
  {
    queryKey:['all-pendingOrders'],
    queryFn: async ()=> {
      const res = await fetch('https://selosia-official-server.vercel.app/api/v1/project/all-pendingOrders');
      const data = await res.json()
      return data;
    }
  }
)



const newOrderRequest = data?.data;


  return (
    <div className="">
      {/* <h1>When a user or buyer send a order. The order will come in this page</h1> */}
      <OrderRequestHeader newOrderRequest={newOrderRequest} />
      <OrderRequestTable allperams={{newOrderRequest,refetch}} />
    </div>
  );
};

export default OrderRequest;
