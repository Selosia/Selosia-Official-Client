import { useEffect } from "react";
import { useState } from "react";
import AllSubmittedTaskHeading from "./AllSubmittedTaskHeading";
import Loader from "../../../shared/Loader";

const AllCompletedTask = () => {
  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://codexriddle-official-server.vercel.app/api/v1/project/all-submittedProject`
    )
      .then((res) => res.json())
      .then((data) => setItems(data?.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <AllSubmittedTaskHeading
        Heading={"Completed Task"}
        numberHeading={"Total Number"}
        task={items?.length}
      ></AllSubmittedTaskHeading>
      <div className="p-10 max-h-[73vh] overflow-auto min-h-[20vh]">
        <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left  title rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                Serial no
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                Project Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                Buyer Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                Domain Name
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                Post Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y  divide-gray-200">
            {isLoading ? (
              <tr className="">
                <td colSpan="6" className="text-center">
                  <div className="flex items-center justify-center h-32">
                    <Loader />
                  </div>
                </td>
              </tr>
            ) : items && items.length > 0 ? (
              items.map((data, i) => (
                <tr key={data.id}>
                  <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900">
                    {i + 1}
                  </td>
                  <td className="whitespace-nowrap px-4 text-center py-2  text-gray-900">
                    {data?.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data?.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data?.domain}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {data?.date.slice(0, 10)}
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
    </>
  );
};

export default AllCompletedTask;
