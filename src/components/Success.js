import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';;

export class Success extends Component {
    continue = e => {
        e.preventDefault();         // Prevents default event from loading
        // PROCESS FORM // (Send data to API...express...flask...php) -- This is the back-end
        this.props.nextStep();      // Calls our function from UserForm class method
    }

    back = e => {
        e.preventDefault();         // Prevents default event from loading
        this.props.prevStep();      // Calls our function from UserForm class method
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucess" />
                    <h1>Thank You For Your Submisstion</h1>
                    <p>You will get an email with further instructions.</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;