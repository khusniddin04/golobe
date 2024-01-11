import React from 'react'
import "../style/flightMap.css"
import Top from './Top'
import map from "../images/map.png"
function FlightMap() {
  return (

    <section className='flightMap'>
        <div className="container">
            <Top title="Let's go places together" text='Discover the latest offers and news and start planning your next trip with us.' btn_text='See All' url='/flight'/>
            
        </div>
        <div className="flightMap__img">
            <img src={map} alt="" />
        </div>
        
    </section>
  )
}

export default FlightMap