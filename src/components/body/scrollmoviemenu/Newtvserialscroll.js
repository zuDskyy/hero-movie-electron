import React ,{useEffect , useContext, useState}from 'react'
import {useMovieFetch} from '../../../hook'
import Scrollfunction from "../../scrollmenu/Scrollfunction";
import ContentcardDesign from "../content/ContentcardDesign";
import {MovieContext} from '../../../context/MovieTvchangeContext'


const Newtvserialscroll = ({lang}) => {

  const [movietv,setMovietv] =  useState('tv');
  const { setMoviename} = useContext(MovieContext); 
  const {response} = useMovieFetch(`${process.env.REACT_APP_TV_PRODUCT_API}&language=${lang.movielang}&page=`);
  useEffect(() => {
   
     setMoviename(movietv)
   
  }, [setMoviename,movietv])
      

  return (
   
    <div className='movie-scroll '>
        <h1 className="text-2xl  p-3 m-3  border-b-8 w-1/2 md:w-1/5 border-gray-800 rounded-md text-white">{lang.scrolltvtitle}</h1>
        <Scrollfunction>
        {response && response.results.map((index) => (
          <div key={index.id} className="w-80 p-3 ">
            <ContentcardDesign list={index} />
          </div>
        ))}
        </Scrollfunction>
    </div>
  )
}

export default Newtvserialscroll
