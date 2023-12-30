import { useState, useEffect } from "react";
import { YOUTUBE_VIDEO_API_URL } from "../constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RecommendationList from "./RecommendationList";

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);
  // console.log(videoData);

  useEffect(() => {
    getVideoData();
  }, []);

  const getVideoData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API_URL);
    // console.log(data);
    const json = await data.json();
    // console.log(json);
    setVideoData(json.items);
  };

  return videoData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col">
      <RecommendationList />
      <div className="flex flex-wrap gap-4 m-4">
        {videoData?.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default VideoContainer;
