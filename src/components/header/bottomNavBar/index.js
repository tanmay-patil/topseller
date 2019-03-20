import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import TopSeller from './topSeller';
import Navigation from './navigation';
import Cart from './cart';
class BottomNavBar extends Component {
    render() {
        return (
            <div className="bottomNavbar">
                <Grid className="container catCon" container direction="row" justify="flex-start" alignItems="flex-start" spacing={0}>
                    <TopSeller/>
                    <Navigation />
                    <Cart />
                </Grid>
            </div>
        );
    }
};
export default BottomNavBar;