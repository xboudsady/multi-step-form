import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,            // This will be used as our navigation to determine which step of the form we're on
        firstName: '',      // Our state will be an empty string
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
    }

    // Function call to Proceed to next step of our form component
    nextStep = () => {
        const { step } = this.state;    // pulling step out of our state as an independant variable
        this.setState({
            step: step + 1              // increment the step by 1 from it's previous state
        });
    }

    // Function call to go back to to the previous step
    prevStep = () => {
        const { step } = this.state;    // pulling step out of our state as an independant variable
        this.setState({
            step: step - 1              // decrement the step by 1 from it's previous state
        });
    }

    // Handle fields change, everytime we edit an input the state will change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});   // Whatever input is, we set whatever value it is using the event handler
    }

    render() {
        // Destructuring our state to use as independant variables
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };
        
        // eslint-disable-next-line default-case
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return <Success />;
        }
    }
}

export default UserForm;