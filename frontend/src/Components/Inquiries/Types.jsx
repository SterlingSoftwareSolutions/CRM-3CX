import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

const Types = () => {
  useEffect(() => {
    handleShow(true);
  }, []);

  //popup the page in this section
  const [show, setShow] = useState(false);
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const token = sessionStorage.getItem("token");
  
  //save data localstorage
  useEffect(() => {
    sessionStorage.setItem("call_type_id", filter);
  }, [filter]);

  //Get api url
  const api = "/api/call_types";

  //calling Api get method
  const fetchArray = async () => {
    try {
      let res = await fetch(api,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      res = await res.json();
      if (res.error) {
        console.error(res.error);
        alert(res.error);
      } else {
        let arrayTemp = ["", ...new Set(res.data.map((item) => item))];
        setArr(arrayTemp);
        console.log(res.data);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  useEffect(() => {
    fetchArray();
  }, []);

  return (
    <Modal onHide={handleClose} show={show}>
      <ModalHeader>
        {/* page header title */}
        <Modal.Title>Types</Modal.Title>
      </ModalHeader>

      <Modal.Body>
        <Form>
          {/* set the option value  */}
          <Form.Select
            aria-label="Default select example"
            id="arrayselect"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}>
            {arr.map((item, index) => (
              <option key={index} value={item.id}>
                {item.name}
              </option>
            ))}
          </Form.Select>
        </Form>
        <Modal.Footer>
          {/* close button */}
          <Link to='/customer/:phone'>
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={handleClose}>
            Back
          </Button>
          </Link>
          {/* Next button */}
          <Link to='/inquiry-popup'>
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}>
            Next
          </Button></Link>
          
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default Types;
