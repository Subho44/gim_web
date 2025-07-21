import React from 'react';
import { useParams } from 'react-router-dom';
import { Card,Button,Container } from 'react-bootstrap'
import products from '../data/product';
const Productdetails = () => {
    const {id} = useParams();
    const product = products.find(x=>x.id ===parseInt(id));
  return <>
    <Container>
         <Card style={{width:'18rem'}}>
        <Card.Img variant='top' src={product.image} alt='img'/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h5>{product.price}</h5>
        <Button variant='primary'>Buy Now</Button>
          
         
        </Card.Body>
      </Card>
    </Container>
  </>
}

export default Productdetails