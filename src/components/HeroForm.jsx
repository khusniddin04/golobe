import React from 'react'
import "../style/heroForm.css"
import airplane from "../images/airplane_dark.png"
import bed from "../images/ion_bed_dark.png"
import paper_plane from "../images/Paper Plane.png"
function HeroForm() {
  return (
    <div className='heroForm'>
        <ul className="heroForm__top">
            <li> 
                <img src={airplane} alt="" />
                Flights
            </li>
            <li> 
                <img src={bed} alt="" />
                Stays
            </li>
        </ul>
        <div className="heroForm__wrapper">
        <fieldset>
            <legend>From - To</legend>
            Lahore - Karachi
        </fieldset>
        <fieldset>
            <legend>Trip</legend>
            Return
        </fieldset>
        <fieldset>
            <legend>Depart- Return</legend>
            07 Nov 22 - 13 Nov 22
        </fieldset>
        <fieldset>
            <legend>Passenger - Class</legend>
            1 Passenger, Economy
        </fieldset>
        </div>
        <div className="heroForm__bottom">
            <button>+Add Promo Code</button>
            <button>
                <img src={paper_plane} alt="" />
                Show Filghts
            </button>
        </div>
        
    </div>
  )
}

export default HeroForm