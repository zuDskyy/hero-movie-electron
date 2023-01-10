import React, { useState, useRef, useEffect } from "react";
import '../../styles/player.css'
import {useMovieFetch, useOutsideClick} from '../../hook'
import { useContext } from "react";
import { MovieContext } from "../../context/MovieTvchangeContext";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const PlayerTwo = ({list}) => {
  const [itemtrue , setItemtrue] = useState(false);
   const [itemsResult , setItemsResult] = useState([])
    const [closeTools,setCloseTools]= useState(true);
    
     const {moviename} = useContext(MovieContext);
     
     function handleOutside(){
      setCloseTools(false)
     }
    const ref = useOutsideClick(handleOutside);
    const { id } = useParams();
useEffect( () => {
 
   fetch(`https://api.themoviedb.org/3/${moviename}/${id}/videos?api_key=24d5a152341e66c347af6137f7385595&language=en-US`)
   .then((res) => res.json())
   .then((res) => setItemsResult(res.results))
  

},[])




  const  handleClose = () => {
     setCloseTools(prev => !prev)
   }
  const source = itemsResult.map(index =>  index.key)
  console.log()
 
  return (
     <div className="player_div">
      <div className="left_player">
      <ReactPlayer width="100%"
        height="90%" controls={true}  url={'https://www.youtube.com/watch?v=' + source }/>
     
     </div>
      <button onClick={handleClose} className="more_property absolute p-4   text-white pl-7 pb-7 ">More Source</button>
      <div ref={ref} className={closeTools  ? "right_description gap-5 " : "hidden"}>
        <span onClick={handleClose} className='fs-4 cursor-pointer'>X</span>
          <h2 className="p-2">Source</h2>
          <div className="flex  justify-evenly border-b-2 player_source ">
             <h5 className="active">Trailer</h5>
             <h5>Movie</h5>
             </div>
             <div className="player_trailer  ">
    {itemsResult.map(index => 
     <div key={index.id} className="flex items-center gap-8 p-3 player_trailer_container">
       <div className="left_trailer_img">
              <img src={`https://image.tmdb.org/t/p/w500${list.backdrop_path}`}></img>
             </div>
             <div className="right_trailer_description ">
             <h5>{index.name}</h5>
             <h6 >{index.site}</h6>
             <div className="player_min_group">
              <button>en</button>
              <button>ru</button>
              </div>
             </div>
             </div>
            
             )}
          </div>
            
     </div>
    </div>
  );
};

export default PlayerTwo;
