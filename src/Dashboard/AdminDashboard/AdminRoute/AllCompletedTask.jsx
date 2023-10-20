// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AllSubmittedTaskHeading from "./AllSubmittedTaskHeading";
import ReactPaginate from "react-paginate";

const AllCompletedTask = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://codexriddle-official-server.vercel.app/api/v1/project/all-submittedProject`
    )
      .then((res) => res.json())
      .then((data) => setItems(data?.data));
  }, []);

  // const [pageCount, setpageCount] = useState(0);
  // let limit = 10;
  // useEffect(() => {
  //   const getSubmittedProject = async () => {
  //     const res = await fetch(
  //       `https://codexriddle-official-server.vercel.app/api/v1/project/all-submittedProject?_page=1&_limit=${limit}`
  //     );
  //     const data = await res.json();
  //     const total = res.headers.get("x-total-count");
  //     setpageCount(Math.ceil(total / limit));

  //     setItems(data.data);
  //   };

  //   getSubmittedProject();
  // }, [limit]);
  // console.log(pageCount);
  // const fetchSubmittedProject = async (currentPage) => {
  //   const res = await fetch(
  //     `https://codexriddle-official-server.vercel.app/api/v1/project/all-submittedProject?_page=${currentPage}&_limit=${limit}`
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  // const handlePageClick = async (data) => {
  //   console.log(data.selected);
  //   let currentPage = data.selected + 1;
  //   const submittedProjectFromServer = await fetchSubmittedProject(currentPage);
  //   setpageCount(Math.ceil(submittedProjectFromServer.total / limit));
  //   setItems(submittedProjectFromServer.data);
  // };
  // console.log(items);
  // useEffect(() => {
  //   axios
  //     .get(`https://web-tech-official-server.vercel.app/submittedProject`)
  //     .then((res) => {
  //       setData(res.data.data);
  //     });
  // }, []);
  return (
    <>
      <AllSubmittedTaskHeading
        Heading={"Completed Task"}
        numberHeading={"Total Number"}
        task={items?.length}
      ></AllSubmittedTaskHeading>
      <div className="max-h-[70vh] overflow-auto min-h-[20vh]">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
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
          <tbody className="divide-y divide-gray-200">
            {items && items.length > 0 ? (
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
                    {data?.date}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="5"
                  className="text-center text-2xl text-red-500 py-10"
                >
                  Data is not available
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
