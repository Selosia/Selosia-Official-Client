import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrder] = useState([]);
  useEffect(() => {
    fetch(
      `https://selosia-official-server.vercel.app/api/v1/project/orderedProject?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyOrder(data?.data));
  }, [user?.email]);
  return (
    <div>
      <div className="p-10 max-h-[73vh] overflow-auto min-h-[20vh]">
        <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left  title rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-semibold ">
                Serial no
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold ">
                Project Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold ">
                Domain Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold ">
                Category
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold ">
                Status
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold ">
                Order Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y  divide-gray-200">
            {myOrders && myOrders.length > 0 ? (
              myOrders.map((data, i) => (
                <tr key={data.id}>
                  <td className="whitespace-nowrap px-4 text-center py-2  ">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2  ">
                    {data?.projectName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center ">
                    {data?.domainName}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center ">
                    {data?.category}
                  </td>
                  <td className="whitespace-nowrap  px-4 py-2 text-center ">
                    {data?.status}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center ">
                    {data?.OrderDate.slice(0, 10)
                      .split("-")
                      .reverse()
                      .join("-")}
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
      </div>
    </div>
  );
};

export default MyOrders;
