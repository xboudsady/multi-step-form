import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();         // Prevents default event from loading
        this.props.nextStep();      // Calls our function from UserForm class method
    }

    back = e => {
        e.preventDefault();         // Prevents default event from loading
        this.props.prevStep();      // Calls our function from UserForm class method
    }

    render() {
        const { values, handleChange } = this.props;            // Props being sent from the UserForm.js component
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}    // Event listener props, passing in method from UserForm.js component
                        defaultValue={values.occupation}         // Default original values of the prop, in this instances it's an empty string from UserForm.js component state
                    />
                    <br />
                    <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}    // Event listener props, passing in method from UserForm.js component
                        defaultValue={values.city}         // Default original values of the prop, in this instances it's an empty string from UserForm.js component state
                    />
                    <br />
                    <TextField
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}    // Event listener props, passing in method from UserForm.js component
                        defaultValue={values.bio}         // Default original values of the prop, in this instances it's an empty string from UserForm.js component state
                    />
                    <br />
                    <RaisedButton
                        label="Continue"
                        primary={true}                      // Makes it blue
                        style={styles.button}               // styles.button object is set below
                        onClick={this.continue}             // This class method, which calls the method from UserForm.js component, which takes us to our next form component
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}                      // Makes it white
                        style={styles.button}               // styles.button object is set below
                        onClick={this.back}             // This class method, which calls the method from UserForm.js component, which takes us to our next form component
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


export default FormPersonalDetails;