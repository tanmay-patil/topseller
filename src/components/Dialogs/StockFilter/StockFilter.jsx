import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './StockFilter.scss';
import CloseSVG from '../../../icons/svg/CloseSVG';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const FILTER_OPTIONS = {
    SECTION_1: [
        {
            name: 'All',
            value: 'all'
        },
        {
            name: 'Out of Stock',
            value: 'out_of_stock'
        },
        {
            name: 'Discontinued',
            value: 'discontinued'
        },
        {
            name: 'Prohibition of Sale',
            value: 'prohibition_of_sale'
        },
        {
            name: 'Restocked',
            value: 'restocked'
        },
        {
            name: 'Option Restocked',
            value: 'option_restocked'
        }
    ],

    SECTION_2: [
        {
            name: 'Price Up',
            value: 'price_up'
        },
        {
            name: 'Price Down',
            value: 'price_down'
        },
        {
            name: 'Shipping Plan Change',
            value: 'shipping_plan_change'
        },
        {
            name: 'Option Out of Stock',
            value: 'option_out_of_stock'
        },
        {
            name: 'Option Discontinued',
            value: 'option_discontinued'
        }
    ]
};

export default class StockFilter extends React.Component {
    state = {
        open: true,
        name: ''
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleClose = () => {
        this.props.handleFilterVisibility(false);
    };

    handleNext = () => {
        this.handleClose();
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { open } = this.props;

        return (
            <Dialog
                id="dialog-stock-filter"
                className="dialog"
                open={open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Filter
                    <span onClick={this.handleClose} className="close-icon">
                        <CloseSVG />
                    </span>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <div className="dialog-content-form">
                        <div className="filter-options-container">
                            <div className="section1">
                                {FILTER_OPTIONS.SECTION_1.map((option, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="checkbox-container"
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        onChange={() => {}}
                                                        value={option.value}
                                                    />
                                                }
                                                label={option.name}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="section1">
                                {FILTER_OPTIONS.SECTION_2.map((option, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="checkbox-container"
                                        >
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        onChange={() => {}}
                                                        value={option.value}
                                                    />
                                                }
                                                label={option.name}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <Button
                            className="next-button custom-button-style"
                            fullWidth
                            onClick={this.handleNext}
                            variant="contained"
                            color="primary"
                        >
                            Okay
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}
