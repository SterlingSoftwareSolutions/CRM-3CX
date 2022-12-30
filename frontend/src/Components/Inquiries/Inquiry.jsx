import React, { useEffect, useState } from "react";
import { Form, Modal, ModalHeader } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Inquiry.css";
import { Link } from "react-router-dom";

const Inquiry = () => {
  useEffect(() => {
    handleShow(true);
  }, []);

  //popup the page in this section
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [error, setError] = useState(false);
  const token = sessionStorage.getItem("token");
  const [filter, setFilter] = useState("");
  const [arr, setArr] = useState([
    { name: "TV" },
    { name: "Mobile Phone" },
    { name: "Air Conditioners" },
    { name: "Apple Products" },
    { name: "Audio" },
    { name: "Computers" },
    { name: "Refrigerator " },
    { name: "Washing Machine" },
    { name: "Home Appliances" },
    { name: "Kitchen Appliances" },
    { name: "Built-In Appliances & Ovens" },
    { name: "Small Appliances" },
    { name: "Watch" },
    { name: "Generators" },
    { name: "The Face Shop" },
    { name: "Skechers" },
    { name: "Under Armour" },
    { name: "Hyundai" },
    { name: "Bathware" },
    { name: "Sanitary Ware" },
    { name: "Medical Devices" },
    { name: "Cooking Appliances" },
    { name: "Clothing" },
    { name: "Home Needs" },
    { name: "Health & Beauty" },
    { name: "Baby & Kids" },
    { name: "Sports & Fitness" },
    { name: "Daily Essentials" },
    { name: "Special Offer" },
    { name: "Other" },
  ]);
  const [brand_availability, setbrand_availability] = useState([
    { name: "Yes" },
    { name: "No" },
  ]);
  const [followupStatus, setfollowupStatus] = useState([
    { name: "Follow Up" },
    { name: "Close" },
  ]);
  const [feedbacks, setFeedbacks] = useState([
    { feedback: "Not Intrested" },
    { feedback: "Actively Purchasing" },
    { feedback: "Pending Purchasing" },
    { feedback: "Purchase from different store" },
    { feedback: "Discounted amount not worth" },
    { feedback: "No answer" },
    { feedback: "Looking for Insallment plan - No credit Card" },
  ]);

  //get local storage id
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("value"));
    if (filter) {
      setFilter(filter);
    }
  }, []);

  //set path api
  const api = "/api/inquiries";

  const [data, setData] = useState({
    brand: "",
    availibility: "",
    model: "",
    action: "",
    follow: "",
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
    if (
      data.brand.length === 0 &&
      data.availibility.length === 0 &&
      data.model.length === 0 &&
      data.follow.length === 0 &&
      data.catagory.length === 0
    ) {
      setError(true);
    }
    console.log(arr);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(data),
    };
    const responce = await fetch(api, requestOptions).then((response) =>
      response.json()
    );
    console.log(JSON.stringify(responce));
    handleClose();
  };

  //required field

  return (
    <div>
      <Modal onHide={handleClose} show={show}>
        <ModalHeader>
          {/* page header title */}
          <Modal.Title>Add Inquiry</Modal.Title>
        </ModalHeader>

        <Modal.Body>
          <Form>
            {/* Product Category */}
            <Form.Group className="mb-3">
              <Form.Label>Product Category</Form.Label>
              <Form.Select
                aria-label="Product Category"
                id="arrayselect"
                value={filter}
                onChange={(e) =>
                  onChangeValue("product_category", e.target.value)
                }
              >
                {arr.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              {/* error message */}
              {error ? (
                <Form.Label className="form-validation">
                  This field is required
                </Form.Label>
              ) : (
                ""
              )}
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
              {error ? (
                <Form.Label className="form-validation">
                  This field is required
                </Form.Label>
              ) : (
                ""
              )}
            </Form.Group>

            {/* Brand Availablility */}
            <Form.Group className="mb-3">
              <Form.Label>Brand Availablility</Form.Label>
              <Form.Select
                aria-label="Brand Availablility"
                id="arrayselect"
                value={filter}
                onChange={(e) =>
                  onChangeValue("brand_availability", e.target.value)
                }
              >
                {brand_availability.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              {/* error message */}
              {error ? (
                <Form.Label className="form-validation">
                  This field is required
                </Form.Label>
              ) : (
                ""
              )}
            </Form.Group>

            {/* Feedback */}
            <Form.Group className="mb-3">
              <Form.Label>Feedback</Form.Label>
              <Form.Select
                aria-label="Feedback"
                id="arrayselect"
                value={filter}
                onChange={(e) => onChangeValue("feedback", e.target.value)}
              >
                {feedbacks.map((item, index) => (
                  <option key={index} value={item.feedback}>
                    {item.feedback}
                  </option>
                ))}
              </Form.Select>
              {/* error message */}
              {error ? (
                <Form.Label className="form-validation">
                  This field is required
                </Form.Label>
              ) : (
                ""
              )}
            </Form.Group>

            {/* Follow or Closeup */}
            <Form.Group className="mb-3">
              <Form.Label>Follow or Closeup</Form.Label>
              <Form.Select
                aria-label="Brand Availablility"
                id="arrayselect"
                value={filter}
                onChange={(e) =>
                  onChangeValue("brand_availability", e.target.value)
                }
              >
                {followupStatus.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>
              {/* error message */}
              {error ? (
                <Form.Label className="form-validation">
                  This field is required
                </Form.Label>
              ) : (
                ""
              )}
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
          </Form>
        </Modal.Body>

        <Modal.Footer>
          {/* close button */}
          <Link to="/types">
            <Button
              className="btn btn mt-3"
              style={{ backgroundColor: "#16c5d5", color: "white" }}
            >
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
