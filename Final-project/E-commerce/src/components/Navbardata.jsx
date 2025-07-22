import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Navbardata = ({searchtext,setSearchtext}) => {
 const navigate = useNavigate();
 const logout = ()=> {
  localStorage.removeItem('loggedin');
  navigate('/login');
 };
  return <>
  <Navbar bg="dark" expand="lg">
   <Navbar.Brand className='text-light'>E-shop</Navbar.Brand>
   <Navbar.Toggle className='bg-warning'/>
   <Navbar.Collapse>
    <Nav>
       <Link className='nav-link text-light' to="/home">Home</Link>
        <Link className='nav-link text-light' to="/about">About</Link>
        <Link className='nav-link text-light' to="/contact">Contact</Link>
        <Link className='nav-link text-light' to="/service">Service</Link>
        <Button variant='danger' onClick={logout}>Logout</Button>
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