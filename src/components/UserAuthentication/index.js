import React, { Component } from 'react';
import { Dialog, DialogActions, TextField, DialogContent, DialogContentText, Button, DialogTitle } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import FormField from './formFields';
class ModalSim extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    handelClickOpen = () => {
        this.setState({
            open: true
        });
    }
    handelClose = () => {
        this.setState(
            {
                open: false
            }
        );
    }
    renderFields() {
        return (
            <div>
                <Field component={FormField} label='Heelo' name="userID" />
            </div>
        )
    }
    render() {
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handelClose}
                    disableBackdropClick
                    disableEscapeKeyDown >
                    <DialogTitle>Sign In </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We will send
                      updates occasionally.
                      <form>
                                {
                                    this.renderFields()
                                }
                                <button>Sign In</button>
                            </form>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handelClose}>Cancle</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
};
export default reduxForm({
    form: 'userAuthentication'
})(ModalSim);