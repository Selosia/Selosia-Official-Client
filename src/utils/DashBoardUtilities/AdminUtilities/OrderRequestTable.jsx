import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import OrderRequestDetailsModal from "../../../modals/OrderRequestDetailsModal";
import {
  approveOrder,
  orderSenderRoleUpdate,
} from "../../../apis/orderOperation";

const OrderRequestTable = ({ allperams }) => {


  const {newOrderRequest,refetch} = allperams;
  const { user } = useContext(AuthContext);

  const [orderData, setOrderData] = useState();

  // Open modal and view the order request details
  const handleModalData = (data) => {
    setOrderData(data);
  };

  //* handle order request approve
  const handleApprove = (data) => {
    const orderId = data?._id;

    const updateOrder = {
      approvedBy: user?.email,
      status: "Inprogress",
    };

    approveOrder(orderId, updateOrder).then((response) => {
      console.log(response);
      // if(result.acknowledged === true) {
      handleRoleUpdate(data);
      refetch()

      // }
    });
  };

  //* Update user role by clicking approve button
  const handleRoleUpdate = (data) => {
    const orderSenderEmail = data?.orderSenderEmail;

    const updateBuyerRole = {
      role: "Buyer",
    };

    orderSenderRoleUpdate(orderSenderEmail, updateBuyerRole).then(
      (response2) => {
        console.log("response2", response2);
        alert(`${data?.projectName} order request approved!`);
      }
    );
  };

  //* handle order request cancel
  const handleCancel = (data) => {
    const orderId = data?._id;

    const updateOrder = {
      canceledBy: user?.email,
      status: "Rejected",
    };

    approveOrder(orderId, updateOrder).then(() => {
      //console.log(result);
      // if(result.acknowledged === true) {
      alert(` ${data?.ProjectName} order request deleted!`);
      refetch()
      // }
    });
  };

  return (
    <div className="p-10 max-h-[73vh] overflow-auto min-h-[20vh]">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white dark:bg-black text-sm">
        <thead className="ltr:text-left title rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
              Serial no
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
              Project Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
              Buyer Email
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
              Details
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
              Action
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {newOrderRequest && newOrderRequest.length > 0 ? (
            newOrderRequest.map((data, i) => (
              <tr
                key={i}
                className="hover:bg-slate-50 dark:hover:bg-[#82f8d9] group"
              >
                <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                  {i + 1}
                </td>
                <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                  {data?.projectName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-white dark:group-hover:text-gray-900">
                  {data?.orderSenderEmail}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-indigo-500 hover:text-indigo-700">
                  <label
                    onClick={() => handleModalData(data)}
                    htmlFor="OrderRequestDetailsModal"
                    className="cursor-pointer"
                  >
                    View
                  </label>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-green-500 hover:text-green-700">
                  <button onClick={() => handleApprove(data)}>Approve</button>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-red-500 hover:text-red-700">
                  <button onClick={() => handleCancel(data)}>Cancel</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center text-2xl text-red-500 py-10"
              >
                There is no data available.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <OrderRequestDetailsModal orderData={orderData} />
    </div>
  );
};

export default OrderRequestTable;
