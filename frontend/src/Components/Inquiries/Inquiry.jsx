import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Inquiry = () => {
  useEffect(() => {
    handleShow(true);
  }, []);

  //popup the page in this section
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [arr, setArr] = useState([]);
  const [filter, setFilter] = useState("");

  //set path api
  const api = "http://127.0.0.1:8000/api/inquiries";

  const [data, setData] = useState({
    availibility: "",
    action: "",
    remark: "",
    feedback: "",
    catagory: "",
  });

  const onChangeValue = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };


  useEffect(() => {
    fetchData();
  });

  //Get the data from api
  const fetchData = (inque) => {
    try {
      fetch(api + inque)
        .then((response) => response.json())
        .then((inquirydata) => setData(inquirydata))
        .catch((err) => {
          console.log(err.message);
        });
    } catch (error) {
      alert(error);
    }
  };

  //api get dropdawn list
  const fetchArray = async () => {
    try {
      let res = await fetch(api);
      res = await res.json();
      if (res.error) {
        console.error(res.error);
        alert(res.error);
      } else {
        let arrayTemp = ["", ...new Set(res.map((brand) => brand))];
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

  //post method
  let handleSubmit = async (e) => {
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
          <Modal.Title>Inquiries</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form>
            {/* Brand link addres phone text line */}
            <Form.Group className="mb-3">
              <Form.Label>Brand</Form.Label>
              <Form.Select
                aria-label="Default select example"
                id="arrayselect"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}>
                {arr.map((brand, index) => (
                  <option key={index} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </Form.Select>
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
            </Form.Group>

            {/* Brand or Model text line */}
            <Form.Group className="mb-3">
              <Form.Label>Brand or Model</Form.Label>
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
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {/* close button */}
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}>
            Back
          </Button>
          {/* Next button */}
          <Button
            className="btn btn mt-3"
            style={{ backgroundColor: "#16c5d5", color: "white" }}
            onClick={(e) => handleSubmit(e)}>
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Inquiry;
