import React,{useState} from 'react';
import { Form,Button,Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const [user,setUser] = useState({email:"",password:""});
   const navigate = useNavigate();
   
   const hs = (e) => {
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(user));
    alert("Register successfully");
    navigate('/login');
   };

  return <>
    <Container className='mt-5'>
    <Form onSubmit={hs}>
    <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' required onChange={(e)=>setUser({...user,email:e.target.value})} />
    </Form.Group>
   <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' required onChange={(e)=>setUser({...user,password:e.target.value})} />
        <Button variant='danger' type='submit'>Register</Button>
    </Form.Group>
    </Form>
    </Container>
  </>
}

export default Register