
import React from 'react'
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slide.css'

const SLideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    appendDots:(dots)=>{
      return <ul style={{margin:'0px'}}>{dots}</ul>
    }
  };
  return (
    <>
      <Slider {...settings}>
        {console.log(Sdata)}
        {Sdata.map((value, index) => {

          return (
            <div className='boxd_flextop' key={index}>
              <div className='left'>
                <h1>{value.title}</h1>
                <p>{value.desc}</p>
                <button className='btn-primary'>Visit collection</button>
              </div>
              <div className='right'>
                <img src={value.cover} alt=''></img>
              </div>
            </div>

          )
        })}
      </Slider>
    </>
  )
}

export default SLideCard