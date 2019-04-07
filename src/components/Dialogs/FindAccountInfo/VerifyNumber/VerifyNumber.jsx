import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './VerifyNumber.scss';
import CloseSVG from '../../../../icons/svg/CloseSVG';
import FormControl from '@material-ui/core/FormControl';
import OtpInput from 'react-otp-input';
import { Desktop, Mobile } from '../../../../services/ScreenSizeDefinitions';
import OutlinedInput from '@material-ui/core/OutlinedInput';
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

    handleNext = () => {
        this.handleClose();
        this.props.handleDialogVisibility('showSetPasswordDialog', true);
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
                            <Desktop>
                                <OtpInput
                                    className="input-box"
                                    onChange={otp => console.log(otp)}
                                    numInputs={6}
                                    separator={<span> </span>}
                                />
                            </Desktop>
                            <Mobile>
                                <div className="fields-container">
                                    <div className="content-label">
                                        Verify Number
                                    </div>
                                    <FormControl fullWidth variant="outlined">
                                        <OutlinedInput
                                            fullWidth
                                            type="text"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            labelWidth={
                                                this.labelRef
                                                    ? this.labelRef.offsetWidth
                                                    : 0
                                            }
                                        />
                                    </FormControl>
                                </div>
                            </Mobile>
                        </FormControl>
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
