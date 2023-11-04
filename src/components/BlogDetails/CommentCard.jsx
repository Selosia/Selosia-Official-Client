const CommentCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex flex-col gap-1 bg-gray-100 rounded-md m-4 p-4">
        <div className="flex justify justify-between">
          <div className="flex gap-2">
            <div className="w-10 h-10 text-center rounded-full bg-red-500">
              <img className="rounded-full" src={data?.commenterImg} alt="" />
            </div>
            <div className=" flex flex-col">
              <span className="text-sm title">{data?.commenterName}</span>
              <span className="text-slate-600 text-start text-sm">
                {data?.dateTime.split("_").reverse().join("_")}
              </span>
            </div>
          </div>
        </div>

        <div className="ml-12 text-start">{data?.comment}</div>
      </div>
    </div>
  );
};

export default CommentCard;
