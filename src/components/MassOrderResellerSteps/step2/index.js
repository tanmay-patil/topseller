import React from 'react';
import { Grid } from '@material-ui/core';
import './step2.scss';
import ShippingTable from '../shippingTable/shippingListTable';
const Step2 = (props) => {
    return (
        <Grid container className="container">
            <Grid item lg={12}>
                <div className="step__top">
                    <p className="stepsInfo">• Please check whether all the information has beezn correctly mentioned especially option and
                        price.
                </p>
                </div>
                <ShippingTable />
                <div className="checkoutContainer">
                    <div className="checkoutDetails">
                        <div className="checkoutDetails__row">
                            <div className="checkoutDetails__row__cell name">
                                T-Money
                                </div>
                            <div className="checkoutDetails__row__cell amount">
                                ₹ 34,536
                                </div>
                        </div>
                        <div className="checkoutDetails__row">
                            <div className="checkoutDetails__row__cell name">
                                Total Payable
                                </div>
                            <div className="checkoutDetails__row__cell amount totalPayable">
                                ₹ 34,536
                                </div>
                        </div>
                        <div className="checkoutDetails__row">
                            <div className="checkoutDetails__row__cell name">
                                Balance T-Money after Payment
                                </div>
                            <div className="checkoutDetails__row__cell amount">
                                ₹ 34,536
                                </div>
                        </div>
                    </div>
                    <div className="checkoutbtn">
                        <button>
                            Check Out
                        </button>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
export default Step2;