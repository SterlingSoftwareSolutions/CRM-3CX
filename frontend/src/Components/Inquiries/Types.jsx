import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";

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

  const api = "http://127.0.0.1:8000/api/call_type"; //api url

  const fetchArray = async () => {
    try {
      let res = await fetch("http://127.0.0.1:8000/api/call_type");
      res = await res.json();
      if (res.error) {
        console.error(res.error);
        alert(res.error);
      } else {
        let arrayTemp = ["", ...new Set(res.map((item) => item))];
        setArr(arrayTemp);
        console.log(arr);
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

          {/* comment text line */}
          <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              id="comment"
              defaultValue=""
              as="textarea"
              rows={3}
            />
          </Form.Group>
        </Form>
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
            style={{ backgroundColor: "#16c5d5", color: "white" }}>
            Next
          </Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  );
};

export default Types;
