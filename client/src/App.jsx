import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Mens from './components/Mens';
import Blog from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {

  return <>
    <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/c' element={<Category />}></Route>
                  <Route path='/m' element={<Mens />}></Route>
                  <Route path='/b' element={<Blog />}></Route>
              </Routes>
          </BrowserRouter>
  </>
}

export default App