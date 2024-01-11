import React from 'react'
import "../style/recent.css"
import turkey from "../images/Turkey.png"
import sydney from "../images/Sydney.png"
import baku from "../images/Baku.png"
import male from "../images/Male.png"
function Recent() {
  return (
    <section className='recent'>
        <div className="container">
            <h2>Your recent searches</h2>
            <div className="recent__wrapper">
                <div className="recent__card">
                    <img src={turkey} alt="" />
                    <div className="recentCard__content">
                        <h4>Istanbul, Turkey</h4>
                        <p>325 places</p>
                    </div>
                </div>
                <div className="recent__card">
                    <img src={sydney} alt="" />
                    <div className="recentCard__content">
                        <h4>Istanbul, Turkey</h4>
                        <p>325 places</p>
                    </div>
                </div>
                <div className="recent__card">
                    <img src={baku} alt="" />
                    <div className="recentCard__content">
                        <h4>Istanbul, Turkey</h4>
                        <p>325 places</p>
                    </div>
                </div>
                <div className="recent__card">
                    <img src={male} alt="" />
                    <div className="recentCard__content">
                        <h4>Istanbul, Turkey</h4>
                        <p>325 places</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recent