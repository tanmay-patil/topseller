import React, { Component } from 'react';
import './SpecialBanner.scss';
import Grid from '@material-ui/core/Grid';
import MainCategory from '../../components/MainCategory/MainCategory';
import { PRODUCT_RANKING_LABEL } from '../../services/types';

const getDummyProductList = () => {
    const arr = [];
    for (let index = 1; index <= 10; index++) {
        arr.push({
            id: 'T12345',
            ranking: PRODUCT_RANKING_LABEL.TOP,
            imgUrl: 'https://picsum.photos/400/400/?image=2' + index,
            name: `Sample Product Name First ${index} - Sample`,
            price: '1230'
        });
    }
    return arr;
};

const customSliceArray = (array, chunk, offset) => {
    var subarray = [];

    for (var i = 0; i < chunk; i++) {
        const ind = (offset + i) % array.length;

        if (ind <= array.length) {
            console.log(ind);
            subarray.push(array[ind]);
        }
    }

    return subarray;
};

// Main page contains all the categories eg. Special, top 100, abroad
export default class SpecialBanner extends Component {
    render() {
        const products = getDummyProductList();
        return (
            <Grid item className="main-page-container" container spacing={24}>
                <Grid item xs={12}>
                    <MainCategory
                        firstHeaderText="Special"
                        secondHeaderText="Deal"
                        isFirstHeaderTextDark={true}
                        listType="plain"
                        shouldDisplayRanking={true}
                        products={customSliceArray(products, 15, 0)}
                        handleViewMore={() => this.handleViewMore('', 5)}
                    />
                </Grid>
            </Grid>
        );
    }
}
