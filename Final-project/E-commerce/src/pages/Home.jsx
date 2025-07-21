import React from 'react'
import Carouselslider from '../components/Carouselslider'
import Productcard from '../components/Productcard'

const Home = ({products}) => {
  return <>
    <Carouselslider/>
    <Productcard products={products}/>
  </>
}

export default Home