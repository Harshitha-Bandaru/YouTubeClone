import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_URL } from "../constants";
import SearchResultVideoCard from "./SearchResultVideoCard";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const SearchResults = () => {
  const params = new URLSearchParams(window.location.search);
  const search_query = params.get("search_query");
  const [videoData, setVideoData] = useState([]);

  const getVideoSearchResults = async () => {
    console.log("search_query", search_query.split(" ").join("+"));
    const u_search_query = search_query.split(" ").join("+");
    const data = await fetch(YOUTUBE_SEARCH_API_URL + u_search_query);
    console.log("url", YOUTUBE_SEARCH_API_URL + u_search_query);
    const json = await data.json();
    console.log(json);
    setVideoData(json.items);
  };

  useEffect(() => {
    getVideoSearchResults();
  }, []);

  return videoData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-4">
      {videoData?.map((video) => (
        <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
          <SearchResultVideoCard videoData={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
