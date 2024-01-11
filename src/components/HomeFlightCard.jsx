import React from 'react'
import "../style/homeFlightCard.css"
function HomeFlightCard({img, title, text}) {
  return (
    <div className='homeFlight_card'>
        <img src={img} alt="" />
        <div className="homeFlightcard__content">
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HomeFlightCard