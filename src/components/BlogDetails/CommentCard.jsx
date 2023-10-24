import { AiFillStar } from "react-icons/ai";

const CommentCard = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex flex-col gap-1 bg-gray-100 rounded-md m-4 p-4">
      <div className="flex justify justify-between">
        <div className="flex gap-2">
          <div className="w-10 h-10 text-center rounded-full bg-red-500">
            <img className="rounded-full" src={data?.commenterImg} alt="" />
          </div>
          <div className=" flex flex-col">
            <span className="text-sm title">{data?.commenterName}</span>
            <span className="text-slate-400 text-sm">{data?.dateTime}</span>
          </div>
        </div>
      
      </div>

      <div className="ml-12">{data?.comment}</div>
    </div>
  );
};

export default CommentCard;
