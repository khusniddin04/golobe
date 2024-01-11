import React from 'react'
import "../style/banner.css"
import { NavLink } from 'react-router-dom'
import tel from "../images/Paper Plane.png"
function Banner({img, title, text, btn_text, url}) {
  return (
    <div className='banner' style={{backgroundImage:`url(${img})`}}>
        <div className="banner__blur">
          <h2>{title}</h2>
        <p>{text}</p>
        <NavLink to={url}><img src={tel} alt="" /> {btn_text}</NavLink>   
        </div>
       
    </div>
  )
}

export default Banner