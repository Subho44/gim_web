import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Productmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form>
          <div className='form-group'>
            <label><b>Product Name:</b></label>
            <input type='text' className='form-control col-md-6'required/>
          </div>
          <br></br>
          <div className='form-group'>
            <label><b>Product Description:</b></label>
            <input type='text' className='form-control col-md-6'required/>
          </div>
          <div className='form-group'>
            <label><b>Product Price:</b></label>
            <input type='text' className='form-control col-md-6'required/>
          </div>
          <br></br>
          <button className='btn btn-danger'>Add</button>
         </form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Productmodal;