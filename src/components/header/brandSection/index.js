import React from 'react';
import { Grid } from '@material-ui/core';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import MediaQuery from 'react-responsive';
import Logo from './logo';
import MobileDrawer from './mobileNavDrawer';
import Search from './search';
class BrandSection extends React.Component {
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
            <div className="brandSection">
                <Grid className="container" container direction="row" justify="flex-start" alignItems="flex-start" spacing={0}>
                    <Grid item xs={12} lg={4}>
                        <div className="m__brandsection">
                            <MobileDrawer />
                            <Logo />
                            <MediaQuery query="(max-device-width: 768px)">
                                <div><ShoppingCart /></div>
                            </MediaQuery>
                        </div>
                    </Grid>
                    <Search />
                </Grid>
            </div>
        );
    }
};
export default BrandSection;