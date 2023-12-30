import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/liveChatSlice";
import { AiOutlineSend } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const LiveChat = () => {
  const [userLiveMessage, setUserLiveMessage] = useState("");
  const dispatch = useDispatch();
  const liveMessages = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    //doing API polling every [10s] interval
    //make a fetch call to fetch the live comment data
    //store the data in redux store

    const timerId = setInterval(() => {
      dispatch(
        addChatMessage({ name: "Harshi", message: "Hi Guys, Harshi here!!" })
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const handleSendMessage = () => {
    dispatch(addChatMessage({ name: "Harshi", message: userLiveMessage }));
    setUserLiveMessage("");
  };

  return (
    <div className="flex flex-col border w-full h-[400px] rounded-2xl ">
      <h1 className="flex flex-col gap-3 border border-b-grey-700 border-t-0 border-x-0 px-5 py-3">
        Live Chat
      </h1>

      <div className="flex flex-col-reverse gap-2 py-3 overflow-y-scroll overscroll-contain">
        {liveMessages.map((liveMessage, i) => {
          return (
            <LiveMessage
              name={liveMessage.name}
              message={liveMessage.message}
              key={i}
            />
          );
        })}
      </div>
      <form
        className="flex px-5 border border-t-gray-700 w-full py-5 items-center bg-white justify-between"
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <FaUser className="text-base mr-4" />
        <input
          type="text"
          className=" border border-black w-2/3 p-2 rounded-3xl"
          value={userLiveMessage}
          onChange={(e) => {
            setUserLiveMessage(e.target.value);
          }}
        />
        <AiOutlineSend
          onClick={() => handleSendMessage()}
          className="hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default LiveChat;
