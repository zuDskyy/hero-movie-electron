import React from "react";
import Player from "../../components/player/Player";
import PlayerTwo from "../../components/player/PlayerTwo";


const SingleidPageDesign = ({ list }) => {
  const {
    runtime,
    genres,
    id,
    overview,
    production_companies,
    first_air_date,
    original_title,
    backdrop_path,
    original_name,
    path,
    poster_path,
  } = list;

  return (
    <div key={id} className="single-movie-div    ">
      <div
        className=" bg_poster  "
        style={{
          backgroundImage: `url(${
            "https://image.tmdb.org/t/p/w500" + poster_path
          })`,
        }}
      >
        <div className="bg_poster_backdrop flex w-full justify-evenly ">
          <div
            className="single-movie-img-div w-2/4"
            style={{
              backgroundImage: `url(${
                "https://image.tmdb.org/t/p/w500" + poster_path
              })`,
            }}
          ></div>
          <div className="movie-detail-div p-2  text-white">
            <h3>Duration: {runtime}m</h3>
            <h3>Language: {list.original_language}</h3>
          </div>
          <div className="block leading-8 py-5  w-2/4  text-white">
            <h1>{original_title}</h1>
            <h3 className="flex justify-center text-2xl gap-2">
              Genre :
              {genres &&
                genres.map((index) => <div key={index.id}>{index.name}</div>)}
            </h3>
            <h3 className="">{overview}</h3>
            <div className="description_vote&more flex gap-5 ">
              <h3 className="border-2 rounded-xl p-2  ">
                Popularity: {list.popularity}
              </h3>
              <h3 className="border-2 rounded-xl p-2">
                Vote: {list.vote_average}
              </h3>
              <h3 className="border-2 rounded-xl p-2 ">
                Count: {list.vote_count}
              </h3>
            </div>
            <div className="single_items_companie flex pt-5  gap-5 items-center">
              {production_companies &&
                production_companies.map((index) => (
                  <div key={index.id}>
                    <img
                      className="w-40"
                      src={`https://image.tmdb.org/t/p/w500${index.logo_path}`}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="player_container">
        <PlayerTwo list={list} />
      </div>
    </div>
  );
};

export default SingleidPageDesign;
