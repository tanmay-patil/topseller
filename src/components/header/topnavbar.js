import React from 'react';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MediaQuery from 'react-responsive';
const TopNav = props => {
    return (
        <MediaQuery query="(min-device-width: 768px)">
            <div className="topNavBar">
                <Grid
                    className="container"
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                    spacing={0}
                >
                    <Grid item xs={6}>
                        <div className="topNavBar__list">
                            <NavLink
                                className="topNavBar__list__link"
                                to="/signout"
                            >
                                Sign out
                            </NavLink>
                            <NavLink
                                className="topNavBar__list__link"
                                to="/signout"
                            >
                                Download App
                            </NavLink>
                            <NavLink
                                className="topNavBar__list__link"
                                to="/signout"
                            >
                                Sell on TopSeller
                            </NavLink>
                            {/* <NavLink className="topNavBar__list__link" to="/signout">Vendor System</NavLink> */}
                            <a
                                className="non-decorated-link"
                                href="http://52.14.150.53:3000"
                                target="_blank"
                            >
                                Vendor System
                            </a>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </MediaQuery>
    );
};
export default TopNav;
