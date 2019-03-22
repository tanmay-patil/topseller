import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard/ProductCard';
import './PlainList.scss';

export default class PlainList extends Component {
    render() {
        const { products } = this.props;

        return (
            <Grid
                item
                container
                lg={10}
                sm={12}
                className="plain-list-container"
                justify="center"
                spacing={Number(16)}
            >
                {products.map((product, i) => (
                    <Grid key={i} item>
                        <ProductCard index={i + 1} product={product} />
                    </Grid>
                ))}
            </Grid>
        );
    }
}
