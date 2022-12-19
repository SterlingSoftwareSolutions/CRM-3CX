import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

export default class Inquiry extends Component {

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

  render() {
    return (
      <Container>
        <Form>

        <Form.Group controlId="formName">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="text" placeholder="Brand"/>
        </Form.Group> <br></br>

        <Form.Group controlId="formName">
              <Form.Label>Brand Availibility</Form.Label>
              <Form.Control type="text" placeholder="Brand Availibitity"/>
        </Form.Group><br></br>

        <Form.Select aria-label="Default select example">
          <option>Action</option>
          <option value="1">Brand or Model</option>
          <option value="2">Brand Availibility</option>
          <option value="3">Order Number</option>
          <option value="4">Order Number</option>
          <option value="5">Inquiry ID</option>
          <option value="6">Staus Remark</option>
          
        </Form.Select><br></br>

        <Form.Select aria-label="Default select example">
          <option>Is That</option>
          <option value="1">Follow Up</option>
          <option value="2">Close Up</option>
        </Form.Select><br></br>

        <Form.Group controlId="formName">
              <Form.Label>Staus Remark</Form.Label>
              <Form.Control type="text" placeholder="Remark"/>
        </Form.Group> <br></br>

        <Form.Select aria-label="Default select example">
          <option>Feedback</option>
          <option value="1">a</option>
          <option value="2">b</option>
        </Form.Select><br></br>

        <Form.Group controlId="formName">
              <Form.Label>Product Catagory</Form.Label>
              <Form.Control type="text" placeholder="Catagory"/>
        </Form.Group> <br></br>


        <Button variant="secondary" onClick={this.back}>Back</Button>{''}
        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
        </Form>
      </Container>
    )
  }
}
