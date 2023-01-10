import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useMovieFetch } from "../../hook";
import {FcPrevious, FcNext} from 'react-icons/fc'
import '../../styles/SlideShow.css'



function SlideShow() {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const { response } = useMovieFetch(
    `${process.env.REACT_APP_SLIDECONTENT_API}`
  );
  
  return (
    <div>
      <Carousel nextIcon={false} prevIcon={false} interval={3000}  indicators={false} activeIndex={index} onSelect={handleSelect}>
        {response &&
          response.results.map((index) => (
           
            <Carousel.Item  key={index.id}>
            
              <img
                className="img-blur"
                style={{backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + index.poster_path})`}}
                src={"https://image.tmdb.org/t/p/w500" + index.poster_path}
                alt="First slide"
              />
              <Carousel.Caption className={'cap'}>
                <h3>{index.original_title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
            
          ))}
      </Carousel>
    </div>
  );
}

export default SlideShow;
