import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const params = new URLSearchParams(window.location.search);
  const videoId = params.get("v");
  //   const [searchParams] = useSearchParams();
  //   console.log("first", searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div>
      <iframe
        width="620"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?si=VLzP6zRz91CLjEkn`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
