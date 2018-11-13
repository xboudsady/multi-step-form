import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, LIstItem, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
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
        const { values: { firstName, lastName, email, occupation, city, bio} } = this.props;    // Props being sent from the UserForm.js component
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm User Data" />
                    <List>
                        <ListItem 
                            primaryText="First Name"
                            secondaryText={ firstName }
                        /> 
                        <ListItem 
                            primaryText="Last Name"
                            secondaryText={ lastName }
                        /> 
                        <ListItem 
                            primaryText="Email"
                            secondaryText={ email }
                        /> 
                        <ListItem 
                            primaryText="Occupation"
                            secondaryText={ occupation }
                        /> 
                        <ListItem 
                            primaryText="City"
                            secondaryText={ city }
                        /> 
                        <ListItem 
                            primaryText="Bio"
                            secondaryText={ bio }
                        /> 
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
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


export default FormUserDetails;