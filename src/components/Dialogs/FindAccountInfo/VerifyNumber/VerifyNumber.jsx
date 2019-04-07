import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './VerifyNumber.scss';
import CloseSVG from '../../../../icons/svg/CloseSVG';
import FormControl from '@material-ui/core/FormControl';
import OtpInput from 'react-otp-input';

export default class VerifyNumber extends React.Component {
    state = {
        open: true,
        name: ''
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

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <Dialog
                id="dialog-verify-number"
                className="dialog"
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Verify
                    <span onClick={this.handleClose} className="close-icon">
                        <CloseSVG />
                    </span>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <div className="dialog-content-form">
                        <FormControl
                            className="form-control"
                            variant="outlined"
                        >
                            <OtpInput
                                className="input-box"
                                onChange={otp => console.log(otp)}
                                numInputs={6}
                                separator={<span> </span>}
                            />
                        </FormControl>
                        <Button
                            className="next-button custom-button-style"
                            fullWidth
                            onClick={this.handleClose}
                            variant="contained"
                            color="primary"
                        >
                            Next
                        </Button>
                    </div>

                    <div className="form-field justify-center margin-top-16 margin-bottom-32">
                        <span className="helper-text">
                            Didn't get the number?
                            <span
                                onClick={() => {}}
                                className="strong cursor-pointer"
                            >
                                {' '}
                                Resend the number
                            </span>
                        </span>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}
