import React, { useState, useContext, useEffect } from "react";
import ContentcardDesign from "../../components/body/content/ContentcardDesign";
import Loading from "../../components/loading/Loading";
import movietvContext from "../../context/movietvContext";
import { MovieContext } from "../../context/MovieTvchangeContext";
import useScrollPagination from "../../hook/useScrollPagination";
import axios from "axios";
import Movienavbar from "../../components/navbar/Movienavbar";





const Allmovie = () => {
  const [moviegenre] = useState("movie");
  const [movietv] = useState("movie");
  const { setMoviename } = useContext(MovieContext);
  const [currPage, setCurrPage] = useState(1);
  const [isFetching, setIsFetching] = useScrollPagination(fetchdata);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  
  document.title = "Movie | HERO MOVIES"
  const url = `${process.env.REACT_APP_MOVIES_PRODUCT_API}&language=en-US&page=`;

  function fetchdata() {
   const res =   setTimeout(() => {
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
    <div  id="movie-div-scroll" className="movie-bg-color" >
      <movietvContext.Provider value={moviegenre}>
        <Movienavbar
          setIsFetching={setIsFetching}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
          popular={filtered}
        />
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 p-2   mob-movie-div">
          {filtered.map((index, value) => (
            <div key={value}>
              <ContentcardDesign list={index} />
            </div>
          ))}
        </div>
        {isFetching && <Loading />}

      </movietvContext.Provider>
    </div>
  );
};

export default Allmovie;
