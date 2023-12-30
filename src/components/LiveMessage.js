import { FaUser } from "react-icons/fa";

const LiveMessage = ({ name, message }) => {
  return (
    <div className="flex px-5 items-center">
      <FaUser className="text-base mr-4" />
      <span className="mr-3">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default LiveMessage;
