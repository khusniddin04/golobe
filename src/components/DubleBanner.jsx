import React from 'react'
import "../style/dubleBanner.css"
import Banner from './Banner'
import banner1 from "../images/banner-img1.png"
import banner2 from "../images/banner-img2.png"
function DubleBanner() {
  return (
    <section className='dubleCard'>
        <div className="container">
            <div className="dubleBanner__grid">
                <Banner img={banner1} title='Flights' text="Search Flights & Places Hire to our most popular destinations" btn_text='Show Filghts' url="/flight"/>
                <Banner img={banner2} title='Hotels' text="Search hotels & Places Hire to our most popular destinations" btn_text='Show Filghts' url="/hotel"/>
            </div>
        </div>
    </section>
  )
}

export default DubleBanner