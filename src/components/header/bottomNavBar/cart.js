import React from 'react';
import { Grid } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import UserProfileIcon from '../../../icons/vendor&admin/Vendor_Profile.svg';
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
                        <img src={UserProfileIcon} />
                    </div>
                </div>
            </Grid>
        </MediaQuery>
    )
}
export default Cart;