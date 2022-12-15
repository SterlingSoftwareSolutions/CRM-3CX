import React, { Component } from 'react'
import { Form,Button, Container } from 'react-bootstrap';

export default class Feedback extends Component {
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

          <Form.Group controlId="form.Textarea">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Button variant="secondary" onClick={this.back}>Back</Button>{''}
          <Button variant="primary">Confirm</Button>
        </Form>
      </Container>
    )
  }
}
