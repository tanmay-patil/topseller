import React, { Component } from 'react';
import SignIn from './SignIn/SignIn';
import PhoneNumber from './FindAccountInfo/PhoneNumber/PhoneNumber';
import VerifyNumber from './FindAccountInfo/VerifyNumber/VerifyNumber';

/**
 * This component contains all the dialogs
 * Handles the hiding and showing of dialogs
 */
export default class Dialogs extends Component {
    state = {
        showSigninDialog: true,
        showPhoneNumberDialog: false,
        showVerifyNumberDialog: false
    };

    handleDialogVisibility = (dialogName, visibility) => {
        this.setState({ [dialogName]: visibility });
    };

    render() {
        const {
            showPhoneNumberDialog,
            showSigninDialog,
            showVerifyNumberDialog
        } = this.state;

        return (
            <div className="dialogs-container">
                {showSigninDialog ? (
                    <SignIn
                        handleDialogVisibility={this.handleDialogVisibility}
                    />
                ) : null}

                {showPhoneNumberDialog ? (
                    <PhoneNumber
                        handleDialogVisibility={this.handleDialogVisibility}
                    />
                ) : null}

                {showVerifyNumberDialog ? <VerifyNumber /> : null}
            </div>
        );
    }
}
