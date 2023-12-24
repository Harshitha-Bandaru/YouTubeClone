import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_AUTOCOMPLETE_API_URL } from "../constants";
import { Link } from "react-router-dom";
import { addToCache } from "../utils/cacheSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const cachedSearchResults = useSelector((store) => store.cache);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedSearchResults[searchText]) {
        setSuggestions(cachedSearchResults[searchText]);
      } else {
        fetchAutocompleteSuggestions();
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [searchText]);

  const dispatch = useDispatch();

  const fetchAutocompleteSuggestions = async () => {
    const data = await fetch(YOUTUBE_AUTOCOMPLETE_API_URL + searchText);
    const json = await data.json();
    console.log("first", json[1]);
    dispatch(addToCache({ [searchText]: json[1] }));
    setSuggestions(json[1]);
  };

  // const nav = useNavigate();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex m-2 justify-between">
      <div className="flex">
        <RxHamburgerMenu
          className="w-10 h-6 mt-3 ml-5 mr-3 cursor-pointer"
          onClick={handleToggleMenu}
        />
        <Link to={"/"}>
          <img src={Logo} alt="youtube-logo" className="w-28 h-12" />
        </Link>
      </div>
      <div>
        <div className="flex mt-1">
          <input
            type="text"
            className="w-[600px] border border-gray-300 rounded-l-full py-2 px-3"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() =>
              setTimeout(() => {
                setShowSuggestions(false);
              }, 3000)
            }
          />
          <button className="border border-gray-300 rounded-r-full bg-gray-100 py-2 px-5">
            <CiSearch />
          </button>
        </div>
        <div className="relative">
          {showSuggestions & (searchText.length > 0) ? (
            <ul className="absolute w-[600px] bg-white px-4 py-5 shadow-xl rounded-2xl border border-gray-100">
              {suggestions?.map((item) => {
                return (
                  <Link to={`/results?search_query=${item}`} key={item}>
                    <li
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-200"
                      onClick={() => {
                        console.log("onclick called");
                        // nav(`/results?search_query=${item}`);
                        setShowSuggestions(false);
                      }}
                    >
                      <span>
                        <CiSearch />
                      </span>
                      <span>{item}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
      <div className="mt-3">
        <FaUser className="w-10 h-6" />
      </div>
    </div>
  );
};

export default Header;
