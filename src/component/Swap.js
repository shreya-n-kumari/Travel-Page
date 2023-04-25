import React from 'react'
import Slider from "react-slick";

import baloon from '../assets/baloon3.jpg';
import './Swap.css'

export const Swap = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='App' style={{backgroundColor:'black'}}>
        <Slider {...settings}>
        <div className="slide-card" style={{backgroundColor:'black'}}>
            <div className="card-top">
                <img src={baloon} alt='img1' />
                <h1>Hello world!</h1>
            </div>
            <div className="card-top">
                <img src={baloon} alt='img2' />
                <h1>Hello world!</h1>
            </div>
            <div className="card-top">
                <img src={baloon} alt='img3' />
                <h1>Hello world!</h1>
            </div>
        </div>
        </Slider>
    </div>
  )
}
