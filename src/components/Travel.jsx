import React from 'react'
import Top from './Top'
import nature1 from "../images/nature1.png"
import nature2 from "../images/nature2.png"
import nature3 from "../images/nature3.png"
import nature4 from "../images/nature4.png"
import "../style/travel.css"
function Travel() {
  return (
    <section className='travel'>
        <div className="container">
            <Top title='Fall into travel' text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." btn_text='See All'/>

            <div className="travel__wrapper">
                <div className="travel__left">
                    <div className="left__top">
                        <h2>Backpacking Sri Lanka</h2>
                        <button> <span>From</span> $700</button>
                    </div>
                    <p>Traveling is a unique experience as it's the best way to unplug from the pushes and pulls of daily life. It helps us to forget about our problems, frustrations, and fears at home. During our journey, we experience life in different ways. We explore new places, cultures, cuisines, traditions, and ways of living.</p>
                    <button className='button'>Book Flight</button>
                </div>
                <div className="travel__right">
                    <img src={nature1} alt="" />
                    <img src={nature2} alt="" />
                    <img src={nature3} alt="" />
                    <img src={nature4} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Travel