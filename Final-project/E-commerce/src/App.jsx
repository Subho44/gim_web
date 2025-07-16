import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbardata from './components/Navbardata';

const App = () => {
  return <>
    <BrowserRouter>
    <Navbardata/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service />}></Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App