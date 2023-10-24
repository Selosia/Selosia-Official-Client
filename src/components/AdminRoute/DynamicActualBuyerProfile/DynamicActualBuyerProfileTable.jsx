


const DynamicActualBuyerProfileTable = ({data}) => {
    // console.log(data.data)
    return (
        <div className="p-10 max-h-[50vh] overflow-auto min-h-[20vh]">
      <div className="flex justify-between items-center">
        
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th className="">S/N</th>
                <th className="">Project Name</th>
                <th className="">Category</th>
                <th className="">Description</th>
                <th className="">Order Date</th>
                <th className="">Delivery Date</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <tbody>
               
                {
                    data?.data && data?.data?.length > 0 ? (
                    
                    data?.data?.map((order, id)=>(
                        <tr key={id}>
                    <td>{id+1}</td>
                    <td>
                     {order.projectName}
                    </td>
                    <td>
                      <p> {order.category}</p>
                    </td>
                    <td>
                      <p> {order.description}</p>
                    </td>
                    <td>
                      <p> {order.OrderDate?.slice(0,10)}</p>
                    </td>
                    <td>
                      <p> {order.deliveryDate?.slice(0,10)}</p>
                    </td>
                    <td>
                    <p className="text-lime-500"> {order.status}</p>
                    </td>
                  </tr>
                    )) ) : (
                        <tr>
                          <td
                            colSpan="5"
                            className=" text-2xl text-red-500 py-10"
                          >
                            Order is not available
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

export default DynamicActualBuyerProfileTable;