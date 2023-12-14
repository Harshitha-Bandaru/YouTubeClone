const VideoCard = ({ info }) => {
  const { publishedAt, channelTitle, thumbnails, localized } = info?.snippet;
  const { viewCount } = info?.statistics;
  return (
    <div className="w-[365px]">
      <img
        src={thumbnails.medium.url}
        alt="video-img"
        width={365}
        className="rounded-2xl"
      />
      <p className="break-words">{localized?.title}</p>
      <h2>{channelTitle}</h2>
      <h2>
        {viewCount} . {publishedAt}
      </h2>
    </div>
  );
};

export default VideoCard;
