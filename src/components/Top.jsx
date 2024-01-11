import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/top.css"
function Top({title, text, btn_text, url}) {
  return (
    <div className='top'>
        <div className="top__content">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
        <NavLink to={url}>{btn_text}</NavLink>
    </div>
  )
}

export default Top