import React from 'react'
import "../style/flightHero.css"
import FlightForm from './FlightForm'

function Hero({title, text, img}) {
  return (
    <section className='hero' style={{backgroundImage:`url(${img})`}}>
      <div className="container">
           <h2>{title}</h2>
            <p>{text}</p>
            <FlightForm/>
      </div>
     </section>
  
  )
}

export default Hero