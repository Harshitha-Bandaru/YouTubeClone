import convertViews from "../utils/convertViews";

const VideoCard = ({ info }) => {
  const { publishedAt, channelTitle, thumbnails, localized } = info?.snippet;
  const { viewCount } = info?.statistics;
  const convertedViews = convertViews(viewCount);
  // console.log("views", convertedViews);
  return (
    <div className="w-[365px]">
      <img
        src={
          thumbnails.maxres?.url ||
          thumbnails.high.url ||
          thumbnails.standard.url ||
          thumbnails.medium.url ||
          thumbnails.default.url
        }
        alt="video-img"
        width={365}
        className="rounded-2xl"
      />
      <p className="break-words font-semibold text-base mt-2">
        {localized?.title}
      </p>
      <h2 className="text-[#606060]">{channelTitle}</h2>
      <h2>
        <span className="text-[#606060]">{convertedViews} views</span>
        <span className="text-[#606060]"> . {publishedAt}</span>
      </h2>
    </div>
  );
};

export default VideoCard;
