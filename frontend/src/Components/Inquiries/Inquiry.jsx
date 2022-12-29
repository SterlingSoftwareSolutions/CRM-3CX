import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./inquiries.css";
import { Link } from "react-router-dom";

const Inquiry = () => {
  useEffect(() => {
    handleShow(true);
  }, []);

  //popup the page in this section
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error , setError] = useState(false);

  const [filter, setFilter] = useState("");

  //get local storage id
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("value"));
    if (filter) {
      setFilter(filter);
    }

  }, []);

  //set path api
  const api = "http://127.0.0.1:8000/api/inquiries";

  const [data, setData] = useState({
    brand:"",
    availibility: "",
    model:"",
    action: "",
    follow:"",
    remark: "",
    feedback: "",
    catagory: "",
  });

  const onChangeValue = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };


 
  //post method
  let handleSubmit = async (e) => {
    //error message 
    if(data.brand.length === 0 && data.availibility.length === 0 && data.model.length === 0
      && data.follow.length === 0 && data.catagory.length === 0 ){
      setError(true);
    }
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const responce = await fetch(api, requestOptions).then((response) => response.json());
    console.log(JSON.stringify(responce));
    handleClose();
  };

  //required field

  
  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        <ModalHeader>
          {/* page header title */}
          <Modal.Title>Inquiries</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form >
            {/* Brand link addres phone text line */}
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("brand", e.target.value)}
                id="brand"
                value={data.brand}
                type="text"
                placeholder="Brand"
              />
              {/* error message */}
             {error && data.brand.length<=0 ?
             <Form.Label className="form-validation">This field is required</Form.Label>:""}

            </Form.Group>
            {/* Brand Availibility text line */}
            <Form.Group className="mb-3">
              <Form.Label>Brand Availibility</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("availibility", e.target.value)}
                id="availibility"
                value={data.availibility}
                type="text"
                placeholder="BrandAvailibility"
              />
                {/* error message */}
               {error ? 
             <Form.Label className="form-validation">This field is required</Form.Label> :""}
            </Form.Group>

            {/* Brand or Model text line */}
            <Form.Group className="mb-3">
              <Form.Label>Brand or Model</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("model", e.target.value)}
                id="model"
                value={data.model}
                type="text"
                placeholder="Brand or Model"
              />
                {/* error message */}
              {error ? 
             <Form.Label className="form-validation">This field is required</Form.Label> :""}
            </Form.Group>

            {/* Action text line */}
            <Form.Group className="mb-3">
              <Form.Label>Action</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("action", e.target.value)}
                id="action"
                value={data.action}
                type="text"
                placeholder="Action"
              />
            </Form.Group>

            {/* email text line */}
            <Form.Group className="mb-3">
              <Form.Label>Follow or Closeup</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("follow", e.target.value)}
                id="follow"
                value={data.follow}
                type="text"
                placeholder="Type.."
              />
                {/* error message */}
              {error ? 
             <Form.Label className="form-validation">This field is required</Form.Label> :""}
            </Form.Group>

            {/* Status Remark text line */}
            <Form.Group className="mb-3">
              <Form.Label>Status Remark</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("remark", e.target.value)}
                id="remark"
                value={data.remark}
                type="text"
                placeholder="Status Remark"
              />
            </Form.Group>

            {/* feedback text line */}
            <Form.Group className="mb-3">
              <Form.Label>Feedback</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("feedback", e.target.value)}
                id="feedback"
                value={data.feedback}
                type="text"
                className="form-control"
                placeholder="Feedback"
              />
            </Form.Group>

            {/* Product catagory text line */}
            <Form.Group className="mb-3">
              <Form.Label>Product Catagory</Form.Label>
              <Form.Control
                onChange={(e) => onChangeValue("catagory", e.target.value)}
                id="catagory"
                value={data.catagory}
                type="text"
                className="form-control"
                placeholder="Product Catagory"
              />
                {/* error message */}
              {error ? 
             <Form.Label className="form-validation">This field is required</Form.Label> :""}
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* close button */}
          <Link to ='/types'>
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}>
            Back
          </Button>
          </Link>
          {/* Next button */}
          
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Inquiry;
