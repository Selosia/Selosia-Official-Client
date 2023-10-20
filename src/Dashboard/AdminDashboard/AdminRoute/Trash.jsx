
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllSubmittedTaskHeading from "./AllSubmittedTaskHeading";

const Trash = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://web-tech-official-server.vercel.app/submittedProject`)
      .then((res) => {
        setData(res.data.data);
      });
  }, []);
  return (
    <>
      <AllSubmittedTaskHeading Heading ={"Total Trash"} numberHeading={"Total Number"} task={datas.length}></AllSubmittedTaskHeading>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                SI
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                ProjectName
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                BuyerEmail
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                DomainName
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                PostDate
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-semibold text-gray-900">
                For Reason
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {datas.map((data, i) => (
              <>
                <tr>
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
                    {data?.date}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-center text-gray-700">
                    {"N/A"}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Trash;
