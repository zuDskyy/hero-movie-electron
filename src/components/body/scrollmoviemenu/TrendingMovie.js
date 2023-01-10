import React from 'react'
import ContentcardDesign from "../content/ContentcardDesign";
import {useMovieFetch} from '../../../hook'
import Scrollfunction from '../../scrollmenu/Scrollfunction';
import { useState } from 'react';
import { MovieContext } from '../../../context/MovieTvchangeContext';
import { useEffect } from 'react';
import { useContext } from 'react';

const TrendingMovie = ({lang}) => {

  const [movietv,setMovietv] =  useState('movie');
  const { setMoviename} = useContext(MovieContext);
  useEffect(() => {
    setMoviename(movietv)
  
  }, [setMoviename, movietv])
    const {response} = useMovieFetch(`${process.env.REACT_APP_TRENDING_PRODUCT_API}&language=${lang.movielang}`);
  return (
    <div className='movie-scroll' >
  <h1 className="text-2xl p-3 m-3  border-b-8 w-1/2 md:w-1/5 border-gray-800 rounded-md text-white">{lang.scrolltrending}</h1>
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

export default TrendingMovie

