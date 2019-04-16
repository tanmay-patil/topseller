import React, { Component } from 'react';
import SignIn from '../../components/Dialogs/SignIn/SignIn';

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <SignIn
                    history={this.props.history}
                    handleDialogVisibility={this.handleDialogVisibility}
                />
            </div>
        );
    }
}
