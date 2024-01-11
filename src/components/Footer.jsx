import React from 'react'
import "../style/footer.css"
import footer_logo from "../images/footer-logo.png"
import facebook from "../images/facebook.png"
import twitter from "../images/twitter.png"
import youtube from "../images/youtube.png"
import instagram from "../images/instagram2.png"
import FooterForm from './FooterForm'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
          <FooterForm/>
        <div className="footer__wrapper">
          <div className="footer__img">
              <img src={footer_logo} alt="" />
              <div className="footer__icon">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />
                <img src={instagram} alt="" />
              </div>
          </div>
          <div className="footergrid">
            <div className="footer__lists">
              <h4>Our Destinations</h4>
              <ul>
                <li>Canada</li>
                <li>Alaksa</li>
                <li>France</li>
                <li>Iceland</li>
              </ul>
            </div>
            <div className="footer__lists">
              <h4>Our Activities</h4>
              <ul>
                <li>Northern Lights</li>
                <li>Cruising & sailing</li>
                <li>Multi-activities</li>
                <li>Kayaing</li>
              </ul>
            </div>
            <div className="footer__lists">
              <h4>Travel Blogs</h4>
              <ul>
                <li>Bali Travel Guide</li>
                <li>Sri Lanks Travel Guide</li>
                <li>Peru Travel Guide</li>
                <li>Bali Travel Guide</li>
              </ul>
            </div>
            <div className="footer__lists">
              <h4>About Us</h4>
              <ul>
                <li>Our Story</li>
                <li>Work with us</li>
              </ul>
            </div>
            <div className="footer__lists">
              <h4>Contact Us</h4>
              <ul>
                <li>Our Story</li>
                <li>Work with us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer