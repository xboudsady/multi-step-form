import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();         // Prevents default event from loading
        this.props.nextStep();      // Calls our function from UserForm class method
    }

    render() {
        const { values, handleChange } = this.props;            // Props being sent from the UserForm.js component
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}    // Event listener props, passing in method from UserForm.js component
                        defaultValue={values.firstName}         // Default original values of the prop, in this instances it's an empty string from UserForm.js component state
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lastName')}    // Event listener props, passing in method from UserForm.js component
                        defaultValue={values.lastName}         // Default original values of the prop, in this instances it's an empty string from UserForm.js component state
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}    // Event listener props, passing in method from UserForm.js component
                        defaultValue={values.email}         // Default original values of the prop, in this instances it's an empty string from UserForm.js component state
                    />
                    <br/>
                    <RaisedButton 
                        label="Conintue"
                        primary={true}                      // Makes it blue
                        style={styles.button}               // styles.button object is set below
                        onClick={this.continue}             // This class method, which calls the method from UserForm.js component
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}


export default FormUserDetails;