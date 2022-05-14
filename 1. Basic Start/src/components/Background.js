import React from 'react'
import netflixBg from "../images/bg.jpg";
import "../style/background.css"

function Background() {
  return (
    <img src={netflixBg} alt="bg_img" className='background'/>
  )
}

export default Background