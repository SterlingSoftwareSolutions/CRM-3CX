import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const PopUp = () => {
  useEffect(() => {
    handleShow(true);
  }, []);
  //popup the page in this section 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // when call url hasn't number display "None"
  const [url, setUrl] = useState("None");

  //if call url has number remove the other sting and featch only number
  useEffect(() => {
    var url = window.location.href;
    var page = url.substring(url.lastIndexOf("=") + 1);
    setUrl(page);
  });

  return (
    <div>
      
      <Modal onHide={handleClose} show={show} toggle={() => setShow(!show)}>
        <ModalHeader toggle={() => setShow(!show)}>
          {/* page header title */}
          <Modal.Title>Customer Add</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form>
            {/* Genarate link addres phone text line */}
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control value={url} type="text" placeholder="phone number" autoFocus />
            </Form.Group>
              {/* customer name text line */}
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="Customer Name" autoFocus />
            </Form.Group>
            {/* customer address text line */}
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control type="text" placeholder="Customer Address" autoFocus />
            </Form.Group>
            {/* Location text line */}
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" autoFocus />
            </Form.Group>
            {/* email text line */}
            <Form.Group className="mb-3" controlId="PopUpForm.ControlInput1">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@gmail.com"
                autoFocus
              />
            </Form.Group>
          {/* comment text line */}
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         {/* close button */}
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={handleClose}>
            Close
          </Button>
        {/* Next button */}
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={handleClose}>
            Next
          </Button>

        </Modal.Footer>
      </Modal>
      <button
        className="btn btn mt-3"
        style={{ backgroundColor: "#16c5d5", color: "white" }}
        onClick={() => handleShow(true)}>
        PopUp
      </button>
    </div>
  );
};

export default PopUp;
