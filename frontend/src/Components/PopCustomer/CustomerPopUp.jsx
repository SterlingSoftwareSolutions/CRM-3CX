import { emptyObject } from "@jest/expect-utils";
import React, { useEffect, useRef, useState } from "react";
import { Form, Modal, ModalHeader, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./CustomerPopUp.css";

const CustomerPopUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const api = "http://127.0.0.1:8000/api/customers/"; //api url
  const [url, setUrl] = useState("None");
  const [Iscostomer_available, setcustomeravailability] = useState(false);

  const [customer_address, setCustomerData] = useState({
    address_line_1: "",
  });
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    comment: "",
  });

  const fetchData = (customer_number) => {
    try {
      fetch(api + customer_number)
        .then((response) => response.json())
        .then(async (customerdata) => {
          if (customerdata.success) {
            setData(customerdata.data);
            await setCustomerData(customerdata.data.customer_address[0]);
            setcustomeravailability(true);
          } else {
            setData(emptyObject);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    var url = window.location.href;
    var customer_number = url.substring(url.lastIndexOf("=") + 1);
    setUrl(customer_number);
    fetchData(customer_number);
    handleShow(true);
  }, []);

  const onChangeValue = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };
  const onChangeAddressValue = (key, value) => {
    setCustomerData((prev) => ({ ...prev, [key]: value }));
  };

  let handleSubmit = async (e) => {
    data.phone = url;
    const response = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    handleClose();
  };

  return (
    <div className="modal-style">
      <Modal onHide={handleClose} show={show}>
        <ModalHeader closeButton>
          {/* page header title */}
          <Modal.Title>Add Customer</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form className="form-style">
            {/* Genarate link addres phone text line */}
            <Col>
              <Row>
                <Col>
                  <Form.Group className="input-style">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      onChange={(e) => onChangeValue("phone", e.target.value)}
                      id="phone"
                      value={url}
                      disabled
                      type="text"
                      placeholder="phone number"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {/* customer name text line */}
                  <Form.Group className="input-style">
                    <Form.Label>Customer Name</Form.Label>
                    <Form.Control
                      onChange={(e) => onChangeValue("name", e.target.value)}
                      id="name"
                      type="text"
                      placeholder="Customer Name"
                      name="name"
                      value={data.name}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* email text line */}
                  <Form.Group className="input-style">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      onChange={(e) => onChangeValue("email", e.target.value)}
                      id="email"
                      defaultValue={data.email}
                      type="email"
                      placeholder="example@example.com"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  {/* customer address text line */}
                  <Form.Group className="input-style">
                    <Form.Label>Customer Address</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        onChangeAddressValue("CustomerAddress", e.target.value)
                      }
                      id="CustomerAddress"
                      defaultValue={customer_address.address_line_1}
                      type="text"
                      as="textarea"
                      rows={1}
                      placeholder="Customer Address"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {/* Location text line */}
                  <Form.Group className="input-style">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        onChangeValue("location", e.target.value)
                      }
                      id="Location"
                      defaultValue={data.location}
                      type="text"
                      placeholder="Location"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                {/* comment text line */}
                <Form.Group className="input-style">
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
              </Row>
            </Col>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* Next button */}
          <Button
            className="btn btn mt-3 button-style"
            onClick={(e) => handleSubmit(e)}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerPopUp;
