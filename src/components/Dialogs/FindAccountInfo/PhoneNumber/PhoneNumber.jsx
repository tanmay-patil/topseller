import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './PhoneNumber.scss';
import CloseSVG from '../../../../icons/svg/CloseSVG';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default class PhoneNumber extends React.Component {
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
        this.props.handleDialogVisibility('showVerifyNumberDialog', true);
    };

    render() {
        const { handleDialogVisibility } = this.props;

        return (
            <Dialog
                id="dialog-phone-number"
                className="dialog"
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Find Account Info
                    <span onClick={this.handleClose} className="close-icon">
                        <CloseSVG />
                    </span>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <div className="dialog-content-form">
                        <div className="content-label">Phone Number</div>
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
                                startAdornment={
                                    <InputAdornment position="start">
                                        +91
                                    </InputAdornment>
                                }
                            />
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
                </DialogContent>
            </Dialog>
        );
    }
}
