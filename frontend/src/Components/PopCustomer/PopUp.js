import React, { useEffect , useState} from 'react';
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function PopUp() {
  useEffect(()=>{
    handleShow(true);
    }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal onHide={handleClose} show={show} toggle={() => setShow(!show)}>
        <ModalHeader toggle={() => setShow(!show)}>
          <Modal.Title>Customer Add</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="phone number" autoFocus />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Customer Name" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Customer Address"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@gmail.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      <button
        className="btn btn mt-3"
        style={{ backgroundColor: "#0c3629", color: "white" }}
        onClick={() => handleShow(true)}>
        PopUp
      </button>
    </div>
  );
}

export default PopUp;
