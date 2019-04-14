import React, { Component } from 'react';
import { Tabs, Tab } from '@material-ui/core';
import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';
import { Grid } from '@material-ui/core';
class MassOrderResellerSteps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    onStepChange(value) {
        switch (value) {
            case 0:
                return <StepOne />;
            case 1:
                return <StepTwo />;
            case 2:
                return <StepThree />;
            default:
                return <StepOne />;
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <Grid container className="container">
                <Grid item lg={10}>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="1st Step" disableRipple />
                        <Tab label="2st Step" disableRipple />
                        <Tab label="3st Step" disableRipple />
                    </Tabs>
                    {this.onStepChange(this.state.value)}
                </Grid>
            </Grid>
        );
    }
};
export default MassOrderResellerSteps;