import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './FindAccountInfo.scss';
import CustomOutlinedInput from '../UI/OutlinedInput/OutlinedInput';
import CloseSVG from '../../icons/svg/CloseSVG';

export default class FindAccountInfo extends React.Component {
    state = {
        open: true
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
                        <CustomOutlinedInput />
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
                </DialogContent>
            </Dialog>
        );
    }
}
