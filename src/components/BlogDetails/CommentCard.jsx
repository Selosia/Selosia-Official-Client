import { AiFillStar } from "react-icons/ai";

const CommentCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-col gap-1 bg-gray-100 m-4 p-4">
      <div className="flex justify justify-between">
        <div className="flex gap-2">
          <div className="w-7 h-7 text-center rounded-full bg-red-500">
            {data?.commenterName.slice(0, 2)}
          </div>
          <span className="text-sm">{data?.commenterName}</span>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>

      <div>{data?.comment}</div>

      <div className="flex justify-between">
        <span className="text-slate-400 text-sm">{data?.dateTime}</span>
      </div>
    </div>
  );
};

export default CommentCard;
