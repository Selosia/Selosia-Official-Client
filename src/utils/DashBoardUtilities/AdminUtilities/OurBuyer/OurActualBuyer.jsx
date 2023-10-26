import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../../shared/Loader";
// import { getAllActualBuyers } from "../../../../apis/ourBuyerOperation";

const OurActualBuyer = () => {
  const [buyers, setBuyers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://selosia-official-server.vercel.app/api/v1/user/all-actualBuyer`
    )
      .then((res) => res.json())
      .then((data) => setBuyers(data?.data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // };
  return (
    <div className="p-10 max-h-[50vh] overflow-auto min-h-[20vh]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl mb-2 text-start"> Actual buyer</h1>
          <p className="text-start"> Total Buyer : {buyers?.length}</p>
        </div>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="title text-gray-900">
                <th>Serial No</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Total Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr className="">
                  <td colSpan="6" className="text-center">
                    <Loader />
                  </td>
                </tr>
              ) : buyers && buyers?.length > 0 ? (
                buyers.map((buyer, idx) => (
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
                        to={`/admin-profile/dashboard/dynamic-actual-buyer-profile/${buyer?.email}`}
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

export default OurActualBuyer;
