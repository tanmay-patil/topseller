import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard/ProductCard';
import './PlainList.scss';

export default class PlainList extends Component {
    render() {
        const { products, shouldDisplayRanking, cardDisplayLimit } = this.props;

        const productCards = [];
        for (let index = 1; index <= cardDisplayLimit; index++) {
            const product = products[index];
            productCards.push(
                <Grid key={index} item>
                    <ProductCard
                        shouldDisplayRanking={shouldDisplayRanking}
                        index={index}
                        product={product}
                    />
                </Grid>
            );
        }

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
                {productCards}
            </Grid>
        );
    }
}
