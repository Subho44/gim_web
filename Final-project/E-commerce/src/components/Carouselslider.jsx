import React from 'react'
import { Carousel } from 'react-bootstrap'
import { carouselimage } from '../data/carouselimages'
const Carouselslider = () => {

  return <>
  <Carousel>
  {
    carouselimage.map(slide=>(
        <Carousel.Item key={slide.id}>
            <img src={slide.src} className='d-block w-100' width={1450} height={450} alt={slide.alt}/>
        </Carousel.Item>
    ))
  }

  </Carousel>

  </>
}

export default Carouselslider