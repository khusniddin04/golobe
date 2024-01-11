import React from 'react'
import Hero from '../components/Hero'
import FlightMap from '../components/FlightMap'
import Cities from '../components/Cities'
import img from "../images/bg_cleanup.png"
import Travel from '../components/Travel'
function FlightPage() {
  return (
    <main>
        <Hero img={img} title="Make your travel whishlist, we’ll do the rest" text="Special offers to suit your plan"/>
        <FlightMap/>
        <Cities btn_text="Book Flight"/>
        <Travel/>
    </main>
  )
}

export default FlightPage