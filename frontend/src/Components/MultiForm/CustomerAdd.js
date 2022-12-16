import React, { Component } from 'react'
import {Container,Form} from 'react-bootstrap';
export default class CustomerAdd extends Component {
  render() {
    return (
        <Container>
        <Form>
    
          <Form.Group controlId="formName">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Genarate Number" />
          </Form.Group>
        
          <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Customer Name" />
          </Form.Group>
    
          <Form.Group controlId="formName">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Customer Address" />
          </Form.Group>
    
          <Form.Group controlId="formName">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Location" />
          </Form.Group>
    
          <Form.Group controlId="form.Email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
    
          <Form.Group controlId="form.Textarea">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={4} />
          </Form.Group>
        </Form>
      </Container>
    )
  }
}
