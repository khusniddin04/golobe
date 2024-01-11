import React from 'react'
import Hero from '../components/Hero'
import bgImg from "../images/bg_cleanup.png"
import Cities from '../components/Cities'
import Travel from '../components/Travel'
import Recent from '../components/Recent'
function HotelPage() {
  return (
    <main>
      <Hero img={bgImg} title='Make your travel whishlist, we’ll do the rest' text="Special offers to suit your plan"/>
      <Recent/>
      <Cities btn_text="Book a Hotel"/>
      <Travel/>
    </main>
  )
}

export default HotelPage