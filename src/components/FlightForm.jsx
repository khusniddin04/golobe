import React from 'react'
import "../style/flightForm.css"
import plane from "../images/Paper Plane.png"
function FlightForm() {
  return (
    <div className='flightForm'>
        <h4>Where are you flying? </h4>
        <div className="flightFrom__wrapper">
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
       
        <div className="flightFrom__bottom">
            <button>+Add Promo Code</button>
            <button>
                <img src={plane} alt="" />
                Show Filghts
            </button>
        </div>
    </div>
  )
}

export default FlightForm