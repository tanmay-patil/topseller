import React, { Component } from 'react';
import { Grid, Button, Popper, MenuItem, MenuList, Typography, ClickAwayListener, Grow } from '@material-ui/core';
import MediaQuery from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';
class TopSeller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }
    handleToggle = () => {
        this.setState(state => ({ open: !state.open }));
    };

    handleClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };
    render() {
        return (
            <MediaQuery query="(min-device-width: 768px)">
                <Grid item xs={3}>
                    <div className="topsellerbtnContainer">
                        <div className="topsellerbtn">
                            <Button
                                buttonRef={node => {
                                    this.anchorEl = node;
                                }}
                                aria-owns={this.state.open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleToggle}
                            >
                                <MenuIcon />
                                <Typography>Top Seller</Typography>
                            </Button>
                            <Popper open={this.state.open} transition placement="bottom" anchorPosition={{ left: '0' }} disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        id="menu-list-grow"
                                        style={{ transformOrigin: placement === 'bottom' ? 'top bottom' : 'center bottom' }}
                                    >
                                        <ClickAwayListener onClickAway={this.handleClose}>
                                            <MenuList>
                                                <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                                <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                                <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </Grid>
            </MediaQuery>
        )
    }
}
export default TopSeller;