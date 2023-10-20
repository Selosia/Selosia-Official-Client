

const OrderRequestDetailsModal = ({orderData}) => {
    return (
        <div>
            <input type="checkbox" id="OrderRequestDetailsModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative ">
                    <label htmlFor="OrderRequestDetailsModal" className="btn btn-sm btn-circle absolute right-2 top-2">
                    ✕
                    </label>

                    <div className="text-gray-700 space-y-2">

                        <h1 className="bg-gray-100 font-serif text-xl text-[#26BFC7]">Order Request Details</h1>

                        <div className="flex justify-center my-3">
                        <img src={orderData?.imageUrl} className="w-24 h-24 rounded-full ring-1 ring-[#26BFC7]" alt="" />
                        </div>


                        <p className="text-start">Buyer Email : {orderData?.orderSenderEmail}</p>
                        <p className="text-start">Project Name : {orderData?.projectName}</p>
                        <p className="text-start">Custom Domain : {orderData?.domainName}</p>
                        <p className="text-start">Project Category : {orderData?.category}</p>
                        <p className="text-start">Order date : {orderData?.OrderDate}</p>
                        <p className="text-start">Delivery date : {orderData?.deliveryDate}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderRequestDetailsModal;