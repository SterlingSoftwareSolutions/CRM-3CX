import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CustomerPopUp = () => {
  useEffect(() => {
    handleShow(true);
  }, []);

  //popup the page in this section
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const api = "http://127.0.0.1:8000/api/customer/"; //api url
  const [url, setUrl] = useState("None");

  //Get the data from api
  const fetchData = (page) => {
    try {
      fetch(api + page)
        .then((response) => response.json())
        .then((customerdata) => setData(customerdata))
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      alert(error);
    }
  };

  //if call url has number remove the other sting and featch only number
  useEffect(() => {
    var url = window.location.href;
    var page = url.substring(url.lastIndexOf("=") + 1);
    setUrl(page);
    fetchData(page);
  });

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    comment: "",
  });

  const onChangeValue = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  //post method
  let handleSubmit = async (e) => {
    data.phone = url;
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch(api, requestOptions).then((response) => response.json());
    handleClose();
  };

  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        <ModalHeader>
          {/* page header title */}
          <Modal.Title>Add Customer</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form>
            {/* Genarate link addres phone text line */}
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("phone", e.target.value)}
                id="phone"
                value={url}
                type="text"
                placeholder="phone number"
              />
            </Form.Group>
            {/* customer name text line */}
            <Form.Group className="mb-3">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("name", e.target.value)}
                id="name"
                defaultValue={data.name}
                type="text"
                placeholder="Customer Name"
              />
            </Form.Group>
            {/* customer address text line */}
            <Form.Group className="mb-3">
              <Form.Label>Customer Address</Form.Label>
              <Form.Control
                onChange={(e) =>
                  onChangeValue("CustomerAddress", e.target.value)
                }
                id="CustomerAddress"
                defaultValue={data.name}
                type="text"
                placeholder="Customer Address"
              />
            </Form.Group>
            {/* Location text line */}
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("location", e.target.value)}
                id="Location"
                defaultValue={data.location}
                type="text"
                placeholder="Location"
              />
            </Form.Group>
            {/* email text line */}
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("email", e.target.value)}
                id="email"
                defaultValue={data.email}
                type="email"
                placeholder="johndoe@abc.com"
              />
            </Form.Group>
            {/* comment text line */}
            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("comment", e.target.value)}
                id="comment"
                defaultValue={data.comment}
                as="textarea"
                rows={3}
                placeholder="Type Here...."
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* close button */}
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={handleClose}
          >
            Close
          </Button>
          {/* Next button */}
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={(e) => handleSubmit(e)}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
      <button
        className="btn btn mt-3"
        style={{ backgroundColor: "#16c5d5", color: "white" }}
        onClick={() => handleShow(true)}
      >
        PopUp
      </button>
    </div>
  );
};

export default CustomerPopUp;
