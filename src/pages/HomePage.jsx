import React from 'react'
import HomeHero from '../components/HomeHero'
import HomeFlight from '../components/HomeFlight'
import DubleBanner from '../components/DubleBanner'
import Slider from '../components/Slider'

function HomePage() {
  return (
    <main>
        <HomeHero/>
        <HomeFlight/>
        <DubleBanner/>
        <Slider/>
    </main>
  )
}

export default HomePage