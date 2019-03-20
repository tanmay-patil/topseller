import React, { Component } from 'react';
import { SwipeableDrawer, Button } from '@material-ui/core';
import MediaQuery from 'react-responsive';
import MenuIcon from '@material-ui/icons/Menu';
class MobileNavDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false
        };
    }
    toggleDrawer = (side, open) => () => {
        this.setState({
            left: open,
        });
    };
    render() {
        return (
            <MediaQuery query="(max-device-width: 768px)">
                <Button onClick={this.toggleDrawer('left', true)}><MenuIcon /></Button>
                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        className="appDrawer"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <h4 className="brandUser">Guest</h4>
                        <h4 className="brandTitle">Home</h4>
                        <ul>
                            <li>
                                <a href="#/non">Sign In</a>
                            </li>
                            <li>
                                <a href="#/non">Sign up</a>
                            </li>
                            <li>
                                <a href="#/non">Vendor System</a>
                            </li>
                            <li>
                                <a href="#/non">Sell on TopSeller</a>
                            </li>
                            <li>
                                <a href="#/non">Download App</a>
                            </li>
                        </ul>
                    </div>
                </SwipeableDrawer>
            </MediaQuery>
        )
    }
}
export default MobileNavDrawer;