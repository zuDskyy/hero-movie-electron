import React from 'react'
import ReactPlayer from 'react-player'
import '../../styles/player.css'
const Player = () => {
  return (
    <div className='player_div p-10 m-auto'>
      <ReactPlayer  url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
    </div>
  )
}

export default Player
