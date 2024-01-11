import React from 'react'
import "../style/header.css"
import airplane_light from "../images/airplane_light.png"
import airplane_dark from "../images/airplane_dark.png"
import bed_light from "../images/ion_bed_light.png"
import bed_dark from "../images/ion_bed_dark.png"
import logo_light from "../images/logo_light.png"
import logo_dark from "../images/logo_dark.png"
import { NavLink, useLocation } from 'react-router-dom'
import login_img from "../images/account-nav.png"
function Header() {

  let location = useLocation()
  
  return (
    <header className={location.pathname === '/' ? "home" : "header"}>
     <nav>
      <ul className='header__list'>
            <li>
              <img src={location.pathname === '/' ? airplane_light : airplane_dark} alt="" />
              <NavLink to="/flight">Find Flight</NavLink>
              </li>
            <li>
              <img src={location.pathname === "/" ? bed_light : bed_dark} alt="" />
              <NavLink to="/hotel">Find Stays</NavLink>
              </li>
          </ul>
          </nav>
          <NavLink>
            <img src={location.pathname === "/" ? logo_light : logo_dark} alt="" />
          </NavLink>

          {location.pathname ==="/account" ? <img src={login_img} alt="img"/> :
           <div className="header__cta">
            <NavLink to="/account">Login</NavLink>
            <button>Sign up</button>
          </div>
          }
          
          
          
     
    </header>
  )
}

export default Header