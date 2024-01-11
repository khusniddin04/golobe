import React from 'react'
import "../style/homeFlight.css"
import HomeFlightCard from './HomeFlightCard'
import turkey from "../images/Turkey.png"
import sydey from "../images/Sydney.png"
import baku from "../images/Baku.png"
import male from "../images/Male.png"
import parij from "../images/Parij.png"
import us from "../images/New-York.png"
import london from "../images/London.png"
import tokio from "../images/Japan.png"
import dubai from "../images/Dubai.png"
import Top from './Top'
function HomeFlight() {
  return (
    <section className='homeflight'>
        <div className="container">
            <Top title="Plan your perfect trip" text='Search Flights & Places Hire to our most popular destinations' btn_text="See more places" url="/flight"/>
            <div className="homeFlight__wrapper">
                <HomeFlightCard img={turkey} title="Istanbul, Turkey" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={sydey} title="Sydney, Australia" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={baku} title="Baku, Azerbaijan" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={male} title="Malé, Maldives" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={parij} title="Paris, France" text="Flights • Hotels • Resorts"  />
                <HomeFlightCard img={us} title="New York, US" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={london} title="London, UK" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={tokio} title="Tokyo, Japan" text="Flights • Hotels • Resorts" />
                <HomeFlightCard img={dubai} title="Dubai, UAE" text="Flights • Hotels • Resorts" />
            </div>
        </div>
    </section>
  )
}

export default HomeFlight