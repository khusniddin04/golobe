import React from 'react'
import "../style/homeHero.css"
import HeroForm from './HeroForm'

function HomeHero() {
  return (
    <section className='homeHero'>
         <div className="blur">
            <h3>Helping Others</h3>
            <h1>Live & Travel</h1>
            <p>Special offers to suit your plan</p>
        </div>
        <HeroForm/>
    </section>
  )
}

export default HomeHero