import React, { useRef, useState } from 'react'
import "../style/account.css"
import avatar from "../images/avatar.png"
import pen from "../images/pen.png"
function AccountPage() {
  const[userName, SetUserName]=useState(localStorage.getItem("name") ? localStorage.getItem("name") : "Husniddin")
  const[userEmail, SetUserEmail]=useState(localStorage.getItem("email") ? localStorage.getItem("email") : "husniddin0621@gmail.com")
  const[userPassword, SetUserPAssword]=useState(localStorage.getItem("password") ? localStorage.getItem("password") : "000000")
  const[userPhone, SetUserPhone]=useState(localStorage.getItem("phone")? localStorage.getItem("phone") : "+998-94-887-06-21")
  const[userAddress, SetUserAddress]=useState(localStorage.getItem("address") ? localStorage.getItem("address") :"Bahor MFY")
  const[userBirth, SetUserBirth]=useState(localStorage.getItem("birth") ? localStorage.getItem("birth") : "21.06.2007")
  let modal = useRef()
  function openModal() {
    modal.current.classList.add("openModal")
    
  }
  function closeModal() {
    modal.current.classList.remove("openModal")
  }

  let user_name = useRef()
  let user_email = useRef()
  let user_password = useRef()
  let user_phone = useRef()
  let user_address = useRef()
  let user_birth = useRef()
  function getUserInfo(e) {
    modal.current.classList.remove("openModal")
    e.preventDefault()
    localStorage.setItem("name", user_name.current.value)
    localStorage.setItem("email", user_email.current.value)
    localStorage.setItem("password", user_password.current.value)
    localStorage.setItem("phone", user_phone.current.value)
    localStorage.setItem("address", user_address.current.value)
    localStorage.setItem("birth", user_birth.current.value)
    SetUserName(localStorage.getItem("name"))
    SetUserEmail(localStorage.getItem("email"))
    SetUserPAssword(localStorage.getItem("password"))
    SetUserPhone(localStorage.getItem("phone"))
    SetUserAddress(localStorage.getItem("address"))
    SetUserBirth(localStorage.getItem("birth"))
  }




  return (
      <div className='account'>
        <div className="account__modal" ref={modal}>
          <form id='form' onSubmit={getUserInfo}>
            <span className='x' onClick={closeModal}>X</span>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={user_name} />
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={user_email}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={user_password} />
            <label htmlFor="phone">Phone number</label>
            <input type="text" id="phone" ref={user_phone}/>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" ref={user_address} />
            <label htmlFor="birth">Date of birth</label>
            <input type="text" id="birth" ref={user_birth} />
            <button type='submit'>Submit</button>
          </form>
        </div>
          <div className="container">
              <div className="account__hero">
                  
                  <div className="avatar">
                    <img src={avatar} alt="" />
                    <img onClick={openModal} className='pen' src={pen} alt="" />
                    <h4>{userName}</h4>
                    <p>{userEmail}</p>
                  </div>
              </div>
              <div className="account__info">
                <div className="info">
                  <div className="info__title">
                      <span>Name</span>
                      <h4>{userName}</h4>
                  </div>
                  <button>Change</button>
                </div>
                <div className="info">
                  <div className="info__title">
                      <span>Email</span>
                      <h4>{userEmail}</h4>
                  </div>
                  <button>Change</button>
                </div>
                <div className="info">
                  <div className="info__title">
                      <span>Password</span>
                      <h4>{userPassword}</h4>
                  </div>
                  <button>Change</button>
                </div>
                <div className="info">
                  <div className="info__title">
                      <span>Phone number</span>
                      <h4>{userPhone}</h4>
                  </div>
                  <button>Change</button>
                </div>
                <div className="info">
                  <div className="info__title">
                      <span>Address</span>
                      <h4>{userAddress}</h4>
                  </div>
                  <button>Change</button>
                </div>
                <div className="info">
                  <div className="info__title">
                      <span>Date of birth</span>
                      <h4>{userBirth}</h4>
                  </div>
                  <button>Change</button>
                </div>
              </div>
          </div>
      </div>
  )
}

export default AccountPage