import { FaUser } from "react-icons/fa";

const Comment = ({ comment }) => {
  return (
    <div>
      <div className="flex">
        <FaUser className="w-10 h-6" />
        <div>
          <div className="flex flex-col">
            <p>
              <span className="text-base font-medium mr-2">{comment.name}</span>
              <span className="text-gray-400 text-xs">{comment.time}</span>
            </p>
            <p className="text-base">{comment.commentText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
