import React from 'react'

function CitiesCard({img, title, text, price, btn_text}) {
  return (
    <div className='citiesCard'style={{backgroundImage:`url(${img})`}}>
        <div className="citiesCard__wrapper">
          <div className="cities__text">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <h4>{price}</h4>
        </div>
        <button>{btn_text}</button>
    </div>
  )
}

export default CitiesCard