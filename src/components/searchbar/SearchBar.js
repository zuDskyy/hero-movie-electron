import React, {  useState } from "react";
import "../../styles/searchbar.css";
import {  useOutsideClick } from "../../hook";

import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";


const SearchBar = () => {
  const [first, setfirst] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [searchResult, setSearchResult] = useState("");

  const handleClickOutside = () => {
    setfirst(false);
    setSearchResult("");
    setSearchItems([]);
  };
  const ref = useOutsideClick(handleClickOutside);
  const options = `query=${searchResult}`;

  const fetchMovies = () => {
    return fetch(
      `${process.env.REACT_APP_MULTI_SEARCH}language=en-US&page=1&${options}`
    ).then((res) => res.json());
  };

  function handleListener(e) {
    const value = e.target.value;
    setSearchResult(value);
    fetchMovies(value).then((res) => setSearchItems(res.results));
  }

 
 
  return (
    <div>
      <div ref={ref} className={first ? "modal_focus " : "search__container"}>
        <input
          onChange={handleListener}
          value={searchResult}
          className="search__input"
          type="text"
          onFocus={() => setfirst(true)}
          placeholder="Search"
        />
        <div className={first ? "search-div" : "hidden"}>
          <div className="search-movie-grid md:grid grid-cols-2 gap-5 p-3">
            {searchItems &&
              searchItems.map((item) => (
                <div key={item.id} className="flex  item_search_div">
                  <div className="item_left_img w-1/3">
                    <img
                      className="b-rounded"
                      src={`https://image.tmdb.org/t/p/w500${
                        item.poster_path || item.profile_path 
                      }`}
                    />
                  </div>
                  <div className="flex flex-col w-2/3 justify-center items-center  item_right_description ">
                    <h5>{item.original_title || item.name}</h5>
                    <p>Date: {item.release_date}</p>
                    <p>Languge: {item.original_language}</p>
                    <p>IMDB: {item.vote_average}</p>
                   <Link to={`/php_movie/${item.id}`}> <button onClick={() => setfirst(false)} className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex  gap-2">
                      {" "}
                      <FaPlay /> watchnow
                    </button></Link>
                  </div>
                  
                </div>
              ))}
          </div>
         <div className="text-white ">No More Result....</div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
