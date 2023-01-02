import { emptyObject } from "@jest/expect-utils";
import React, { useEffect, useRef, useState } from "react";
import { Form, Modal, ModalHeader, Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./CustomerPopUp.css";
import { useNavigate, Link } from "react-router-dom";

const CustomerPopUp = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const customer_api = "/api/customers/";
  const customer_address_api = "/api/customer_addresses/";
  const [url, setUrl] = useState("None");
  const [Iscostomer_available, setcustomeravailability] = useState(false);
  const [valerror, setError] = useState(false);
  const token = localStorage.getItem("token");

  const [customer_address, setCustomerData] = useState({
    address_line_1: "",
    address_line_2: "",
  });
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    comment: "",
  });
  const {name}= data

  const fetchData = async (customer_number) => {
    try {
      fetch(customer_api + customer_number, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      })
        .then((response) => response.json())
        .then(async (customerdata) => {         
          if (customerdata.success) {
            setData(customerdata.data);
            await setCustomerData(customerdata.data.customer_address[0]);
            if (!customerdata.data.customer_address[0]) {
              await setCustomerData(emptyObject);
            }
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
    console.log(data)
    data.phone = url;
    if (!name) {
      setError(true);
      console.log(data.name,"this is name")
    }else {
     console.log(name,"somethnig")
      let method = Iscostomer_available ? "PUT" : "POST";
      let TempCustomerApi = Iscostomer_available
        ? customer_api + url
        : customer_api;
      let TempCustomerAddressApi = Iscostomer_available
        ? customer_address_api + url
        : customer_address_api;
  
      if (method === "PUT") {
        delete data.id;
        delete data.phone;
        delete data.created_at;
        delete data.updated_at;
        delete data.customer_address;
      }
      const response = await fetch(TempCustomerApi, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
  
      let new_customer_id = result.data.id;
      localStorage.setItem("customer_id", new_customer_id);
      if (method === "POST") {
        customer_address.customer_id = new_customer_id;
      } else if (method === "PUT") {
        delete customer_address.id;
        delete customer_address.created_at;
        delete customer_address.updated_at;
      }
  
      const customer_address_responce = await fetch(TempCustomerAddressApi, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(customer_address),
      });
      const customer_address_result = await customer_address_responce.json();
      console.log(customer_address);
      handleClose();
      // navigate("/types")
    }
    console.log(data.name)

    
  };

  return (
    <div className="modal-style">
      <Modal
        onHide={handleClose}
        show={show}
        backdrop="static"
        keyboard={false}
      >
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
                    {valerror ? (
                      <Form.Label className="input-label">
                        Customer Name cannot be empty
                      </Form.Label>
                    ) : (
                      ""
                    )}
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
                        onChangeAddressValue("address_line_1", e.target.value)
                      }
                      id="address_line_1"
                      defaultValue={customer_address.address_line_1}
                      type="text"
                      as="textarea"
                      rows={2}
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
        <Modal.Footer className="footer">
          {/* <Link to="/types"> */}
            <Button
              className="btn btn mt-3 button-style"
              onClick={handleSubmit}
            >
              Next
            </Button>
          {/* </Link> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomerPopUp;
