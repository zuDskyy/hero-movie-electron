import React from 'react'
import SlideShow from '../../slideshow/SlideShow'


const Slidecontent = ({lang}) => {
	const {watchsoon}= lang
  return (
     <div className="top">
	<div className="columns">
		<div className="column is-full featured_wrapper p-0">
	         <SlideShow />
			<div className="title_wrapper">
				<button className="button-121 is-medium">{watchsoon}</button>
			</div>
		</div>
	</div>
    </div>
   ) 
  
}

export default Slidecontent
