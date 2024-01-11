import React from 'react'
import "../style/slider.css"
import Top from './Top'
import SliderCard from './SliderCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import slider1 from "../images/images1.png"
import slider2 from "../images/images2.png"
import slider3 from "../images/images3.png"

function Slider() {
  return (
    <section className='slider'>
        <div className="container">
            <Top title='Reviews' text='What people says about Golobe facilities' btn_text='See All' url='/flight'/>
            <div className="slider__wrapper">
            <Swiper slidesPerView={3} spaceBetween={30} loop={true}  className="mySwiper">
        
        <SwiperSlide>
            <SliderCard title='“A real sense of community, nurtured”' text='Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.' name='Olga' companyName='Weave Studios – Kai Tak'  img={slider1}/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard title='“The facilities are superb. Clean, slick, bright.”' text='“A real sense of community, nurtured”Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.View moreOlgaWeave Studios – Kai TakGoogle' name='Thomas' companyName='Weave Studios – Olympic'  img={slider2}/>
        </SwiperSlide>
       
        <SwiperSlide>
            <SliderCard title='“A real sense of community, nurtured”' text='Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.' name='Eliot' companyName='Weave Studios – Kai Tak'  img={slider3}/>
        </SwiperSlide>
        <SwiperSlide>
            <SliderCard title='“A real sense of community, nurtured”' text='Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.' name='Eliot' companyName='Weave Studios – Kai Tak'  img={slider3}/>
        </SwiperSlide>
        
      </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Slider