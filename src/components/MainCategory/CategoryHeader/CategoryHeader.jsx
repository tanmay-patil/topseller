import React, { Component } from 'react';
import './CategoryHeader.scss';
import Grid from '@material-ui/core/Grid';

export default class CategoryHeader extends Component {
    render() {
        return (
            <Grid
                container
                lg={10}
                sm={10}
                className="category-header-component"
                item
                // justify="center"
            >
                <Grid sm={10} item>
                    Header
                </Grid>
            </Grid>
        );
    }
}
