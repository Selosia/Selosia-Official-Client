const OrderRequestHeader = ({ newOrderRequest }) => {
    return (
      <div>
        <div className="flex justify-between items-center p-5 pb-5">
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
              Selosia
            </h1>
            <p className="font-semibold">
              Total order request : {newOrderRequest?.length}
            </p>
          </div>
          <div></div>
        </div>
      </div>
    );
  };
  
  export default OrderRequestHeader;
  