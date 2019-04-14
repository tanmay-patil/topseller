import React from 'react';
import { Grid } from '@material-ui/core';
import '../step2/step2.scss';
import ShippingTable from '../shippingTable/shippingListTable';
const Step3 = (props) => {
    return (
        <Grid container className="container">
            <Grid item lg={12}>
                <div className="step__top">
                    <p className="stepsInfo">• Order placed successfully. Check in [My Page] > [Order & Shipping]
                </p>
                </div>
                <ShippingTable />
                <div className="saveOrdersBtn">
                    <button>
                        See My Orders
                    </button>
                </div>
            </Grid>
        </Grid>
    );
}
export default Step3;