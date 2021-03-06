import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard/ProductCard';
import './PlainList.scss';

export default class PlainList extends Component {
    render() {
        const { products, shouldDisplayRanking } = this.props;

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
                {products.map((product, index) => {
                    return (
                        <Grid key={index} item>
                            <ProductCard
                                shouldDisplayRanking={shouldDisplayRanking}
                                index={index + 1}
                                product={product}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}
