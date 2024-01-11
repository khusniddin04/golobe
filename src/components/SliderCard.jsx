import React from 'react'
import stars from "../images/stars.png"
import google from "../images/google.png"
import "../style/sliderCard.css"
function SliderCard({title, text, name, companyName, img}) {
  return (
    <div className='sliderCard'>
        {/* <div className="sliderback"></div> */}
        <h3>{title}</h3>
        <p>{text}</p>
        <img src={stars} alt="" />
        <h4>{name}</h4>
        <h5>{companyName}</h5>
        <img src={google} alt="" />
        <img src={img} alt="" />
    </div>
  )
}

export default SliderCard