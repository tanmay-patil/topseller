import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './SetPassword.scss';
import CloseSVG from '../../../../icons/svg/CloseSVG';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default class SetPassword extends React.Component {
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
                id="dialog-set-password"
                className="dialog"
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Set the Password
                    <span onClick={this.handleClose} className="close-icon">
                        <CloseSVG />
                    </span>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <div className="id-text">Your ID: TopsellerID</div>

                    <div className="dialog-content-form">
                        <div className="content-label">New Password</div>
                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput
                                fullWidth
                                type="password"
                                value={this.state.name}
                                onChange={this.handleChange}
                                labelWidth={
                                    this.labelRef
                                        ? this.labelRef.offsetWidth
                                        : 0
                                }
                            />
                        </FormControl>
                        <Button
                            className="next-button custom-button-style"
                            fullWidth
                            onClick={this.handleClose}
                            variant="contained"
                            color="primary"
                        >
                            Done
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}
