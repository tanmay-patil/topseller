import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './SignIn.scss';
import CloseSVG from '../../../icons/svg/CloseSVG';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

export default class SignIn extends React.Component {
    state = {
        open: true,
        inputUserID: '',
        inputPassword: '',
        showError: false,
        checkRememberID: false
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleTextChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleNext = () => {
        let isValid = false;
        // Check if credentials are correct

        if (!isValid) {
            this.setState({ showError: true });
        }

        var axiosConfig = {
            headers: {
                Authorization:
                    'Basic ' +
                    Buffer.from('topseller:topseller').toString('base64'),
                Accept: 'application/json'
            }
        };

        // axios
        //     .post(
        //         'http://3.18.163.90/oauth/token',
        //         {
        //             grant_type: 'password',
        //             client_id: 'topseller',
        //             client_secret: 'topseller',
        //             username: 'admin@topseller.com',
        //             password: 'TopSeller1+'
        //         }
        //         // axiosConfig
        //     )
        //     .then(function(response) {
        //         console.log(response);
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });

        let bodyFormData = new FormData();
        bodyFormData.set('username', 'admin@topseller.com');
        bodyFormData.set('password', 'TopSeller1+');
        bodyFormData.set('grant_type', 'password');
        bodyFormData.set('scope', 'read write');

        axios({
            method: 'post',
            url: 'http://3.18.163.90/oauth/token',
            data: {
                grant_type: 'password',
                client_id: 'topseller',
                client_secret: 'topseller',
                username: 'admin@topseller.com',
                password: 'TopSeller1+'
            },
            config: {
                headers: {
                    Authorization: 'Basic dG9wc2VsbGVyOnRvcHNlbGxlcg==',
                    Accept: 'application/json'
                }
            }
        })
            .then(function(response) {
                //handle success
                console.log(response);
            })
            .catch(function(response) {
                //handle error
                console.log(response);
            });
    };

    handleForgetDetailsClick = () => {
        this.props.handleDialogVisibility('showPhoneNumberDialog', true);
        this.handleClose();
    };

    handleSignUpClick = () => {
        this.props.history.push('signup');
        this.handleClose();
    };

    render() {
        const {
            showError,
            open,
            inputUserID,
            inputPassword,
            checkRememberID
        } = this.state;

        return (
            <Dialog
                id="dialog-sign-in"
                className="dialog"
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Sign In
                    <span onClick={this.handleClose} className="close-icon">
                        <CloseSVG />
                    </span>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <div className="dialog-content-form">
                        <div className="form-field">
                            <div className="content-label">ID</div>
                            <FormControl fullWidth variant="outlined">
                                <OutlinedInput
                                    fullWidth
                                    type="text"
                                    value={inputUserID}
                                    onChange={this.handleTextChange(
                                        'inputUserID'
                                    )}
                                    labelWidth={0}
                                />
                            </FormControl>
                        </div>

                        <div className="form-field margin-top-16">
                            <div className="content-label">Password</div>
                            <FormControl fullWidth variant="outlined">
                                <OutlinedInput
                                    fullWidth
                                    type="password"
                                    value={inputPassword}
                                    onChange={this.handleTextChange(
                                        'inputPassword'
                                    )}
                                    labelWidth={0}
                                />
                                {showError ? (
                                    <FormHelperText className="password-incorrect-text">
                                        Password is incorrect
                                    </FormHelperText>
                                ) : null}
                            </FormControl>
                        </div>

                        <div className="form-field">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checkRememberID}
                                        onChange={this.handleCheckboxChange(
                                            'checkRememberID'
                                        )}
                                        value="checkRememberID"
                                        color="primary"
                                    />
                                }
                                label="Remember ID"
                            />
                        </div>

                        <div className="form-field">
                            <Button
                                className="next-button custom-button-style"
                                fullWidth
                                onClick={this.handleNext}
                                variant="contained"
                                color="primary"
                            >
                                Next
                            </Button>
                        </div>

                        <div className="form-field justify-center margin-top-16">
                            <span className="helper-text">
                                Forgot your login details?
                                <span
                                    onClick={this.handleForgetDetailsClick}
                                    className="strong cursor-pointer"
                                >
                                    {' '}
                                    Get help signing in
                                </span>
                            </span>
                        </div>
                    </div>
                </DialogContent>

                <div className="bottom-row">
                    <span className="helper-text">
                        Don't have an account?
                        <span
                            onClick={this.handleSignUpClick}
                            className="strong cursor-pointer"
                        >
                            {' '}
                            Sign Up
                        </span>
                    </span>
                </div>
            </Dialog>
        );
    }
}
