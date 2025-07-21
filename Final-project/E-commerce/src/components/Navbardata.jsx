import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl} from 'react-bootstrap';
const Navbardata = ({searchtext,setSearchtext}) => {

  return <>
  <Navbar bg="dark" expand="lg">
   <Navbar.Brand className='text-light'>E-shop</Navbar.Brand>
   <Navbar.Toggle className='bg-warning'/>
   <Navbar.Collapse>
    <Nav>
        <Link className='nav-link text-light' to="/">Home</Link>
        <Link className='nav-link text-light' to="/about">About</Link>
        <Link className='nav-link text-light' to="/contact">Contact</Link>
        <Link className='nav-link text-light' to="/service">Service</Link>
    </Nav>
    <Form inline className='ml-auto'>
      <FormControl
        type='text'
        placeholder='search products...'
        value={searchtext}
        onChange={(e)=>setSearchtext(e.target.value)}
      />
    </Form>
   </Navbar.Collapse>
  </Navbar>

  </>
}

export default Navbardata;