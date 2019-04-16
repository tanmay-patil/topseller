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
import UserServices from '../../../services/UserServices';
import { connect } from 'react-redux';
import { setUserAuth } from '../../../actions/index';
import { Redirect } from 'react-router-dom';
import PhoneNumber from '../FindAccountInfo/PhoneNumber/PhoneNumber';
import VerifyNumber from '../FindAccountInfo/VerifyNumber/VerifyNumber';

class SignIn extends React.Component {
    state = {
        open: true,
        inputUserID: 'admin@topseller.com',
        inputPassword: 'TopSeller1+',
        showError: false,
        checkRememberID: false,
        showSigninDialog: false,
        showPhoneNumberDialog: false,
        showVerifyNumberDialog: false,
        showSetPasswordDialog: false,
        showTermsOfUseDialog: false
    };

    handleDialogVisibility = (dialogName, visibility) => {
        this.setState({ [dialogName]: visibility });
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        // this.setState({ open: false });
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

        UserServices.login(this.state.inputUserID, this.state.inputPassword);
    };

    handleLoginClick = () => {
        const { inputUserID, inputPassword } = this.state;
        const { userStore } = this.props;

        // if (this.validateLogin()) {
        this.login(inputUserID, inputPassword);
        // }
    };

    login = (username, password) => {
        const OAuth2 = UserServices.getOAuth2();

        return OAuth2.owner
            .getToken(username, password)
            .then(response => {
                // SUCCESS
                console.log('LOGIN SUCCESSFULL');
                console.log(response);

                if (response.data['access_token']) {
                    const accessToken = response.data['access_token'];

                    // Set access token in local storage
                    window.localStorage.setItem(
                        'topseller_accessToken',
                        accessToken
                    );

                    // Set user in redux
                    this.props.setUserAuth(response);

                    return accessToken;
                }
            })
            .catch(() => {
                console.log('LOGIN FAILED');
            });
    };

    handleForgetDetailsClick = () => {
        this.handleDialogVisibility('showPhoneNumberDialog', true);
        this.handleClose();
    };

    handleSignUpClick = () => {
        this.props.history.push('signup');
        // this.handleClose();
    };

    render() {
        const {
            showError,
            open,
            inputUserID,
            inputPassword,
            checkRememberID,
            showPhoneNumberDialog,
            showVerifyNumberDialog
        } = this.state;

        console.log('Rendering sign in');
        // console.log(this.props.userAuthReducer);

        if (this.props.user) {
            return <Redirect to={`/home`} push />;
        }

        return (
            <div className="sign-in-dialog-container">
                {showPhoneNumberDialog ? (
                    <PhoneNumber
                        handleDialogVisibility={this.handleDialogVisibility}
                    />
                ) : null}
                {showVerifyNumberDialog ? (
                    <VerifyNumber
                        handleDialogVisibility={this.handleDialogVisibility}
                    />
                ) : null}
                <Dialog
                    id="dialog-sign-in"
                    className="dialog"
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
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
                                    onClick={this.handleLoginClick}
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
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.userReducer
});

const mapDispatchToProps = dispatch => ({
    setUserAuth: user => dispatch(setUserAuth(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);
