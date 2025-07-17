import React from 'react'
import Productmodal from '../components/Productmodal'
import { useState } from 'react'
const About = () => {
  const [show,setShow] = useState(false);
  const handelshow = ()=> setShow(true);
  const handelclose = ()=>setShow(false) ;
  return <>
    <Productmodal show={handelshow} handelClose={handelclose}/>
  </>
}

export default About