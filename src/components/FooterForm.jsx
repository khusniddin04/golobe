import React from 'react'
import "../style/footerForm.css"
import img from "../images/footerform-img.png"
function FooterForm() {
  return (
    <div className='footerForm'>
        <div className="footerForm__content">
            <h2>Subscribe Newsletter</h2>
            <h4>The Travel</h4>
            <p>Get inspired! Receive travel discounts, tips and behind the scenes stories.</p>
            <form>
                <input type="text" placeholder='Your email address'  />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
        <img src={img} alt="" />
    </div>
  )
}

export default FooterForm