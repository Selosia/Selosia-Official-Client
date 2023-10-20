

const AllApproveOrdersViewModal = ({ orderData }) => {

    return (
      <div>
        <input
          type="checkbox"
          id="OrderListDetailsModal"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative ">
            <label
              htmlFor="OrderListDetailsModal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
  
            <div className="text-gray-700 py-3">
              <h1>Order Request Details</h1>
              <div className="flex justify-center my-3">
                <img
                  src={orderData?.imageUrl}
                  className="w-24 h-24 rounded-full"
                  alt=""
                />
              </div>
              <p>Buyer Email : {orderData?.orderSenderEmail}</p>
              <p>Project Name : {orderData?.projectName}</p>
              <p>Custom Domain : {orderData?.domainName}</p>
              <p>Project Category : {orderData?.category}</p>
              <p>Project Description : {orderData?.description}</p>
              <p>Project Deadline : {orderData?.deliveryDate}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AllApproveOrdersViewModal;