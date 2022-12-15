import React, { Component } from 'react'
import { Button, Container } from 'react-bootstrap';

export default class Confirmation extends Component {

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

  render() {
    const {inputValues: { PhoneNumber,Name,Address,Location, Email,Comment }} = this.props;
    return (
        <Container>
        <h1>Confirm your Details</h1>
        <p>Confirm if the following details are correct.</p>
        <p>PhoneNumber: {PhoneNumber}</p>
        <p>CustomerName: {Name}</p>
        <p>Address: {Address}</p>
        <p>Location: {Location}</p>
        <p>Email: {Email}</p>
        <p>Comment: {Comment}</p>
      
            <Button variant="secondary" onClick={this.back}>Back</Button>{''}
            <Button variant="primary">Confirm</Button>
    </Container>
    )
  }
}
