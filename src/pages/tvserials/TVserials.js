import React, { useContext, useEffect, useState } from "react";
import ContentcardDesign from "../../components/body/content/ContentcardDesign";
import { MovieContext } from "../../context/MovieTvchangeContext";
import movietvContext from "../../context/movietvContext";
import Loading from "../../components/loading/Loading";
import useScrollPagination from "../../hook/useScrollPagination";
import axios from "axios";
import Movienavbar from "../../components/navbar/Movienavbar";
import '../../styles/movietvcolor.css'

const TVserials = () => {
  const [moviegenre] = useState("tv");
  const [movietv] = useState("tv");
  const { setMoviename } = useContext(MovieContext);
  const [currPage, setCurrPage] = useState(1);
  const [isFetching, setIsFetching] = useScrollPagination(fetchdata);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  document.title = "Serial | HERO MOVIES"
  const url = `${process.env.REACT_APP_TV_PRODUCT_API}&language=en-US&page=`;

  function fetchdata() {
    setTimeout(() => {
      axios.get(`${url}${currPage}`).then((res) => {
        setCurrPage((curr) => curr + 1);
        setIsFetching(false);
        setFiltered([...filtered, ...res.data.results]);
      });
    }, 400);
  }

  useEffect(() => {
    setMoviename(movietv);
    fetchdata();
    
  }, [setMoviename, movietv]);

  return (
    <div id="movie-div-scroll" className="movie-bg-color">
      <movietvContext.Provider value={moviegenre}>
        <Movienavbar
         
         setIsFetching={setIsFetching}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          popular={filtered}
        />
      

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-2  mob-movie-div ">
          {filtered.map(($, value) => (
            <div key={value}>
              <ContentcardDesign list={$} />
            </div>
          ))}
        </div>
         {isFetching && <Loading/>}
      
      </movietvContext.Provider>
    </div>
  );
};

export default TVserials;
