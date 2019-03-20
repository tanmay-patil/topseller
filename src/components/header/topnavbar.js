import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
const TopNav = (props) => {
    return (
        <MediaQuery query="(min-device-width: 768px)">
            <div className="topNavBar">
                <Grid className="container" container direction="row" justify="flex-end" alignItems="flex-end" spacing={0}>
                    <Grid item xs={6}>
                        <div className="topNavBar__list">
                            <NavLink className="topNavBar__list__link" to="/signout">Sign out</NavLink>
                            <NavLink className="topNavBar__list__link" to="/signout">Download App</NavLink>
                            <NavLink className="topNavBar__list__link" to="/signout">Sell on TopSeller</NavLink>
                            <NavLink className="topNavBar__list__link" to="/signout">Vendor System</NavLink>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </MediaQuery>
    );
};
export default TopNav;