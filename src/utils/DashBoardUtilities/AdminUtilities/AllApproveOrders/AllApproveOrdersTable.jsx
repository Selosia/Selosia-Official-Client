import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthProvider";
import AllApproveOrdersViewModal from "../../../../modals/AllApproveOrdersViewModal";
import AllApproveOrdersDeveloperContributors from "../../../../modals/AllApproveOrdersDeveloperContributors";


const AllApproveOrdersTable = ({ orderList }) => {



    const { hasSearched, filteredData } = useContext(AuthContext)
  
    // console.log('filteredData', filteredData);
  
    const [orderData, setOrderData] = useState();
  
    const [devContributors, setDevContributors] = useState();
  
    // Open modal and view the order details
    const handleViewModalData = (data) => {
      setOrderData(data);
    };
  
    const handleDevContributors = (data) => {
      setDevContributors(data);
    };
  
    return (
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white dark:bg-black text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
                SL
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
                Project Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900 dark:text-white">
                Project Category
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
            </tr>
          </thead>
  
          {
            filteredData?.length !== 0 &&
          <tbody className="divide-y divide-gray-200">
            {filteredData?.map((data, i) => (
              <>
                <tr className="hover:bg-slate-50 dark:hover:bg-[#82f8d9] group">
                  <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                    {data?.projectName}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                    {data?.category}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-white dark:group-hover:text-gray-900">
                    {data?.orderSenderEmail}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-indigo-500 hover:text-indigo-700">
                    <label
                      onClick={() => handleViewModalData(data)}
                      htmlFor="OrderListDetailsModal"
                      className="cursor-pointer"
                    >
                      View
                    </label>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-indigo-500 hover:text-indigo-700">
                    <label
                      onClick={() => handleDevContributors(data)}
                      htmlFor="OrderListDevContributorsModal"
                      className="cursor-pointer"
                    >
                      Set contributors
                    </label>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
          }
  
          {
            orderList && filteredData?.length === 0 && !hasSearched && 
            <tbody className="divide-y divide-gray-200">
           
            {orderList && orderList.length > 0 ? (
              orderList.map((data, i) => (
                <tr key={data.id} className="hover:bg-slate-50 dark:hover:bg-[#82f8d9] group">
                <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                  {i + 1}
                </td>
                <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                  {data?.projectName}
                </td>
                <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900 dark:text-white dark:group-hover:text-gray-900">
                  {data?.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700 dark:text-white dark:group-hover:text-gray-900">
                  {data?.orderSenderEmail}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-indigo-500 hover:text-indigo-700">
                  <label
                    onClick={() => handleViewModalData(data)}
                    htmlFor="OrderListDetailsModal"
                    className="cursor-pointer"
                  >
                    View
                  </label>
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-center text-indigo-500 hover:text-indigo-700">
                  <label
                    onClick={() => handleDevContributors(data)}
                    htmlFor="OrderListDevContributorsModal"
                    className="cursor-pointer"
                  >
                    Set contributors
                  </label>
                </td>
              </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-2xl text-red-500 py-10">
                  Data is not available
                </td>
              </tr>
            )}
          </tbody>
          }
  
        </table>
  
          {
            hasSearched && filteredData?.length === 0 && 
            <p className='text-center mt-24 text-2xl'>No results found</p>
          }
  
        {/* Modal components */}
        <AllApproveOrdersViewModal orderData={orderData} />
        <AllApproveOrdersDeveloperContributors devContributors={devContributors} />
      </div>
    );
};

export default AllApproveOrdersTable;