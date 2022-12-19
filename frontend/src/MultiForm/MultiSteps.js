import React, { Component } from 'react'
import Confirmation from './Confirmation'
import CustomerAdd from './CustomerAdd'
import Feedback from './Feedback'
import Inquiry from './Inquiry'
import Types from './Types'

export default class MultiSteps extends Component {

    state = {
        step: 1,
        PhoneNumber: '',
        Name: '',
        Address: '',
        Location: '',
        Email: '',
        Comment: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }


  render() {
    const { step, PhoneNumber, Name, Address, Location, Email, Comment } = this.state;
        const inputValues = { PhoneNumber, Name,Address, Location, Email,Comment };
        
        switch(step) {
                    case 1:
            return <CustomerAdd
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 2:
            return <Types
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    inputValues={inputValues}
                    />
        case 3:
            return <Inquiry
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        case 3:
            return <Feedback
                    nextStep ={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
        case 4:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    inputValues={inputValues}
                    />
            }
  }
}
