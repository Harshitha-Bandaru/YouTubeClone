import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuPlaySquare } from "react-icons/lu";

const YOUTUBE_API_KEY = "AIzaSyAbxWrEBw_Ga29DRQtiu1kFtU2764OWdIU";

export const sideBarElements = [
  { name: "Home", icon: <GoHome />, link: "/" },
  { name: "Shorts", icon: <SiYoutubeshorts /> },
  { name: "Subscriptions", icon: <MdOutlineSubscriptions /> },
  { name: "You", icon: <LuPlaySquare /> },
];

export const RecommendationListData = [
  "All",
  "Cooking",
  "Tamil Cinema",
  "GameShows",
  "Melodies",
];

export const YOUTUBE_VIDEO_API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  YOUTUBE_API_KEY;

export const YOUTUBE_AUTOCOMPLETE_API_URL =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=${YOUTUBE_API_KEY}&q=`;
