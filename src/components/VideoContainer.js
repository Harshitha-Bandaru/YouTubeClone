import React, { useState } from "react";
import { useEffect } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  console.log(videoData);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API_URL);
    // console.log(data);
    const json = await data.json();
    console.log(json);
    setVideoData(json.items);
  };

  return videoData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-wrap gap-4 m-4">
      {videoData?.map((video) => (
        <VideoCard info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
