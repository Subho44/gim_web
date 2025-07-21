import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Navbardata from './components/Navbardata';
import products from './data/product';
import Productdetails from './components/Productdetails';

const App = () => {
  const [searchtext,setSearchtext] = useState("");

  const filteredproducts = products.filter((x)=>x.name.toLowerCase().includes(searchtext.toLowerCase()));
  return <>
    <BrowserRouter>
    <Navbardata searchtext={searchtext} setSearchtext={setSearchtext}/>
      <Routes>
        <Route path='/' element={<Home products={filteredproducts} />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/service' element={<Service />}></Route>
        <Route path='/product/:id' element={<Productdetails/>}></Route>
      </Routes>
    </BrowserRouter>

  </>
}

export default App