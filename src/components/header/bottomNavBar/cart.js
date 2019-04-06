import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import UserProfileIcon from '../../../icons/vendor&admin/Vendor_Profile.svg';
import MediaQuery from 'react-responsive';
// import Modal from '../../UserAuthentication';
class Cart extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    // componentDidMount() {
    //     this.child.current.wrappedInstance.handelClickOpen();
    // }
    render() {

        return (
            <MediaQuery query="(min-device-width: 768px)">
                <Grid item xs={2} md={2} lg={2}>
                    <div className="sellerAction">
                        <div onClick={this.handelClick} className="sellerAction__cart">
                            <ShoppingCart />
                        </div>
                        <div className="sellerAction__user">
                            <img src={UserProfileIcon} />
                        </div>
                    </div>
                </Grid>
                {/* <Modal ref={this.child} /> */}
            </MediaQuery>
        )
    }
}
export default Cart;