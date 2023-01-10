import { FaPlay } from "react-icons/fa";
import { getByDisplayValue } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/ContentDesign.scss";
import { connect } from "react-redux";
import { selectLanguage } from "../../../redux/action/languages";


const MovieInfo = ({ name, value }) => (
  <div className={`movie__${name}`}>
    <span className="info__head">
      {name.replace(/\b\w/g, (l) => l.toUpperCase())}
    </span>
    {value}
  </div>
);

const ContentcardDesign = ({ list , languages}) => {
  
const {year, vote, watchnow,popularity,language} = languages
 

  const {
    id,
    overview,
    first_air_date,
    original_title,
    backdrop_path,
    original_name,
    path,
    poster_path,
  } = list;

   
  return (
    <div
      className={getByDisplayValue === "grid" ? "movie-grid" : "movie"}
      style={{
        backgroundImage: `url(${
          "https://image.tmdb.org/t/p/w500" + poster_path
        })`,
      }}
    >
      <h2 className="movie__title">{original_name || original_title}</h2>

      <span className="movie__description">{overview}</span>

      <div className="movie__infos">
        <MovieInfo name={language} value={list.original_language} />
        <MovieInfo name={popularity} value={list.popularity} />
        <MovieInfo
          name={year}
          value={list.release_date || list.first_air_date}
        />
        <MovieInfo name={vote} value={list.vote_count} />
      </div>

      <div className="movie__imdb">
        <Link className="movie__imdb-button"> IMDb {list.vote_average}</Link>
        <Link to={`/php_movie/${id}`}>
          {" "}
          <button
          
            type="button"
            className="px-4 py-2 border-2 border-yellow-500 text-yellow-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex  gap-2"
          >
            <FaPlay /> {watchnow}
          </button>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  languages: state.Languages
})
export default  connect(mapStateToProps, {selectLanguage})(ContentcardDesign);
