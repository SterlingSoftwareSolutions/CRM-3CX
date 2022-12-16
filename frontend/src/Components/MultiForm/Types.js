import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap';

export default class Types extends Component {

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
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">Product Inquiry</option>
                        <option value="2">Special Daily Weekend Promotion</option>
                        <option value="3">Delivery Complalint</option>
                        <option value="4">Ac Instraliation</option>
                        <option value="5">Refund</option>
                        <option value="6">E-Invoice</option>
                        <option value="7">DOA</option>
                        <option value="8">Warranty Claim</option>
                        <option value="9">Payment Error</option>
                        <option value="10">Site Error</option>
                        <option value="11">Order Confirmation</option>
                        <option value="12">Quotation Inquiry</option>
                        <option value="13">Service Inquiry</option>
                        <option value="14">Showroom Inquiry</option>
                        <option value="15">Hire Purchasing</option>
                        <option value="16">Cash on Delivry</option>
                        <option value="17">Installments Plan Inquiry</option>
                        <option value="18">Wrong Number</option>
                    </Form.Select>

                    <Form.Group controlId="form.Textarea">
                        <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={4} />
                    </Form.Group>

                        <Button variant="secondary" onClick={this.back}>Back</Button>{''}
                        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
                    </Form>
                </Container>
    )
  }
}
