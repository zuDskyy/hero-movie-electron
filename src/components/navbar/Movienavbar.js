import React, { useEffect } from "react";
import "../../styles/Movienavbar.scss";
import { useMovieFetch } from "../../hook";
import Scrollfunction from "../../components/scrollmenu/Scrollfunction";
import { selectLanguage } from "../../redux/action/languages";
import { connect } from "react-redux";
import { useContext } from "react";
import movietvContext from "../../context/movietvContext";
import { Link } from "react-router-dom";



const Movienavbar = ({  languages, setIsFetching ,activeGenre, setActiveGenre, setFiltered, popular}) => {
  const {   
    genrelang
   } = languages;

   const genreChange = useContext(movietvContext)
    
  const { response } = useMovieFetch(
    `https://api.themoviedb.org/3/genre/${genreChange}/list?api_key=24d5a152341e66c347af6137f7385595&language=${genrelang}`
  );
  useEffect(() => {
    
    const filtered = popular.filter(movie => movie.genre_ids.includes(activeGenre));
    setFiltered(filtered);
 if(filtered.length < 20){
      setIsFetching(true)
      setFiltered(filtered)
      return;
    }else if( filtered.length === 0){
      setIsFetching(true)
      setFiltered(filtered)
      return;
    }
  }, [activeGenre, setIsFetching])



  return (
    <div className="genre-scroll " >
    <Scrollfunction >
     
         
          { response &&
            response.genres.map((index) => (  
               <ul  key={index.id} className="menu-bar  font-cinzel"> 
               <Link to={`${index.name}`}> <li onClick={(e) => setActiveGenre(e.target.value)}  value={index.id}>{index.name}</li></Link>
              </ul>
            ))}
             
       
     </Scrollfunction>
    </div>
  );
};
const mapStateToProps = (state) => ({
  languages: state.Languages,
});


export default connect(mapStateToProps, { selectLanguage ,})(Movienavbar);

