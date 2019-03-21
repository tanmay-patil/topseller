import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../../ProductCard/ProductCard';
import './PlainList';

export default class PlainList extends Component {
    render() {
        return (
            <Grid
                item
                container
                lg={10}
                sm={12}
                className="plain-list-component"
                justify="center"
                spacing={Number(16)}
            >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                    <Grid key={value} item>
                        <ProductCard />
                    </Grid>
                ))}
            </Grid>
        );
    }
}
