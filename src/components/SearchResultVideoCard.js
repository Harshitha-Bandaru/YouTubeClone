const SearchResultVideoCard = ({ videoData }) => {
  const { channelTitle, description, publishedAt, thumbnails, title } =
    videoData.snippet || null;
  return (
    <div className="flex ml-4 gap-4 mr-8">
      <img
        src={
          thumbnails.high.url || thumbnails.default.url || thumbnails.medium.url
        }
        alt="video-img"
        className="rounded-xl w-[620px] h-72"
      />
      <div className="flex flex-col">
        <h1 className="font-medium text-lg">{title}</h1>
        <p className="text-gray-500 text-sm">{publishedAt}</p>
        <p className="my-1 text-gray-600 text-sm">{channelTitle}</p>
        <p className="text-gray-500 text-xs">{description}</p>
      </div>
    </div>
  );
};

export default SearchResultVideoCard;
