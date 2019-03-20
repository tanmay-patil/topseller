import React from 'react';
import { Grid } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import SupervisedUserCircle from '@material-ui/icons/SupervisedUserCircle';
import MediaQuery from 'react-responsive';
const Cart = () => {
    return (
        <MediaQuery query="(min-device-width: 768px)">
            <Grid item xs={2} md={2} lg={2}>
                <div className="sellerAction">
                    <div className="sellerAction__cart">
                        <ShoppingCart />
                    </div>
                    <div className="sellerAction__user">
                        <SupervisedUserCircle />
                    </div>
                </div>
            </Grid>
        </MediaQuery>
    )
}
export default Cart;