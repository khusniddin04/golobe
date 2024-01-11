import React from 'react'
import "../style/cities.css"
import CitiesCard from './CitiesCard'
import melbourne from "../images/melbourne.png"
import paris from "../images/paris.png"
import london from "../images/london-city.png"
import columbia from "../images/columbia.png"
import Top from './Top'
function Cities({btn_text}) {
  return (
    <section className='cities'>
        <div className="container">
            <Top title="Fall into travel" text="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination." btn_text='See All' url='/flight'/>
            <div className="cities__wrapper">
                <CitiesCard img={melbourne} title='Melbourne' text='An amazing journey' price='$ 700' btn_text={btn_text} />
                <CitiesCard img={paris} title='Paris' text='A Paris Adventure' price='$ 600'btn_text={btn_text} />
                <CitiesCard img={london} title='London' text='London eye adventure' price='$ 350' btn_text={btn_text}/>
                <CitiesCard img={columbia} title='Columbia' text='Amazing streets' price='$ 700'btn_text={btn_text} />
            </div>
        </div>
    </section>
  )
}

export default Cities