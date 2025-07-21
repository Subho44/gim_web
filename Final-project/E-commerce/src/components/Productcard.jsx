import React from 'react'
import { Card,Button } from 'react-bootstrap'
import {Link} from "react-router-dom"
const Productcard = ({products}) => {

  return <>
    <div className='row'>
    {products.map(x=>(
      <div className=' container-fluid col-md-3 col-sm-3 col-xl-3 col-lg-3 mt-5'>
      <Card style={{width:'18rem'}}>
        <Card.Img variant='top' src={x.image} alt='img'/>
        <Card.Body>
          <Card.Title>{x.name}</Card.Title>
          <Card.Text>{x.description}</Card.Text>
          <h5>{x.price}</h5>
          <Link to={`/product/${x.id}`}>
             <Button variant='primary'>View</Button>
          </Link>
         
        </Card.Body>
      </Card>
      </div>
    ))}

    </div>
  </>
}

export default Productcard