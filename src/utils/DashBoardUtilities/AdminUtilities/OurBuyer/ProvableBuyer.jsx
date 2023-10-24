import { useEffect, useState } from "react";
// import { getAllActualBuyers } from "../../../../apis/ourBuyerOperation";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const ProvableBuyer = () => {
  const [buyers, setBuyers] = useState([]);
  console.log(buyers);

  // const [pageCount, setpageCount] = useState(0);
  // let limit = 2;
  // useEffect(() => {
  //   const getSubmittedProject = async () => {
  //     const res = await fetch(
  //       `https://codexriddle-official-server.vercel.app/api/v1/user/provableBuyer?_page=1&_limit=${limit}`
  //     );
  //     const data = await res.json();
  //     const total = res.headers.get("x-total-count");
  //     setpageCount(Math.ceil(total / limit));

  //     setBuyers(data.data);
  //   };

  //   getSubmittedProject();
  // }, [limit]);

  // const fetchSubmittedProject = async (currentPage) => {
  //   const res = await fetch(
  //     `https://codexriddle-official-server.vercel.app/api/v1/user/provableBuyer?_page=${currentPage}&_limit=${limit}`
  //   );
  //   const data = await res.json();
  //   return data;
  // };

  // const handlePageClick = async (data) => {
  //   console.log(data.selected);
  //   let currentPage = data.selected + 1;
  //   const submittedProjectFromServer = await fetchSubmittedProject(currentPage);
  //   setpageCount(Math.ceil(submittedProjectFromServer.total / limit));
  //   setBuyers(submittedProjectFromServer.data);
  // };

  useEffect(() => {
    fetch(
      `https://codexriddle-official-server.vercel.app/api/v1/user/provableBuyer`
    )
      .then((res) => res.json())
      .then((data) => setBuyers(data?.data));
  }, []);

  return (
    <div className="p-10 max-h-screen overflow-auto ">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl mb-2 text-start"> Provable buyer (users)</h1>
          <p className="text-start"> Total users : {buyers?.length}</p>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* header */}
            <thead>
              <tr className="">
                <th>S/N</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total Task</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* Table */}
            <tbody>
              {/* row 1 */}
              {buyers && buyers.length > 0 ? (
                buyers?.map((buyer, idx) => (
                  <tr key={buyer?._id}>
                    <td>{idx + 1}</td>
                    <td>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={buyer?.image}
                        alt=""
                      />
                    </td>
                    <td>
                      <p>{buyer?.name}</p>
                    </td>
                    <td>
                      <p>{buyer?.email}</p>
                    </td>
                    <td>
                      <p>{idx + 1}</p>
                    </td>
                    <td>
                      <Link
                        to={`/admin-profile/dashboard/dynamic-provable-buyer-profile/${buyer?.email}`}
                      >
                        <button className="bg-[#26BFC7] px-8 py-2 rounded text-white">
                          View
                        </button>
                      </Link>
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
      </div>
    </div>
  );
};

export default ProvableBuyer;
