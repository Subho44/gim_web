import React,{useState} from 'react';
import { Form,Button,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [crendential,setCrendential] = useState({email:"",password:""});
   const navigate = useNavigate();
   
   const hl = (e) => {
    e.preventDefault();
    const storeuser = JSON.parse(localStorage.getItem('user'));

    if(storeuser && 
      crendential.email === storeuser.email &&
      crendential.password === storeuser.password
    ) {
      localStorage.setItem('loggedin',true);
      navigate('/home');
    } else {
      alert("invalid credential");
    }
   };

  return <>
    <Container className='mt-5'>
    <Form onSubmit={hl}>
    <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' required onChange={(e)=>setCrendential({...crendential,email:e.target.value})} />
    </Form.Group>
   <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' required onChange={(e)=>setCrendential({...crendential,password:e.target.value})} />
        <Button variant='success' type='submit'>Login</Button>
    </Form.Group>
    </Form>
    </Container>
  </>
}

export default Login;