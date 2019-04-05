import React, { Component } from 'react';
import './MainPage.scss';
import MainCategory from '../../components/MainCategory/MainCategory';
import Grid from '@material-ui/core/Grid';
import BlankCategory from '../../components/BlankCategory/BlankCategory';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';
import { PRODUCT_RANKING_LABEL } from '../../services/types';

const getDummyProductList = () => {
    const arr = [];
    for (let index = 1; index <= 50; index++) {
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
        var ind = (offset + i) % array.length;
        subarray.push(array[ind]);
    }

    return subarray;
};

// Main page contains all the categories eg. Special, top 100, abroad
export default class MainPage extends Component {
    state = {
        top100: 10
    };

    handleViewMore = (type, offset) => {
        // const products = getDummyProductList();
        // console.log(products);
        // const currentCount = this.state[type];
        // console.log('Offset', offset);
        // console.log('current count', currentCount);
        // console.log('new count', this.state[type] + offset);
        // offset =
        //     currentCount + offset > products.length
        //         ? currentCount - offset
        //         : offset;
        // this.setState({
        //     [type]: this.state[type] + offset
        // });
    };

    render() {
        const { top100 } = this.state;

        const products = getDummyProductList();

        return (
            <Grid item className="main-page-container" container spacing={24}>
                <Grid item xs={12}>
                    <ImageCarousel />

                    <BlankCategory />

                    <MainCategory
                        firstHeaderText="Top"
                        secondHeaderText="100"
                        isFirstHeaderTextDark={false}
                        listType="plain"
                        shouldDisplayRanking={true}
                        products={customSliceArray(products, 10, 0)}
                        handleViewMore={() => this.handleViewMore('top100', 5)}
                    />
                    <MainCategory
                        firstHeaderText="TopSeller"
                        secondHeaderText="Choice"
                        isFirstHeaderTextDark={false}
                        listType="slider"
                        shouldDisplayRanking={false}
                        showPopularKeywords={true}
                        products={customSliceArray(products, 10, 0)}
                        handleViewMore={() => this.handleViewMore('top100', 5)}
                    />

                    <MainCategory
                        firstHeaderText="Abroad"
                        secondHeaderText="Direct Shipment"
                        isFirstHeaderTextDark={false}
                        listType="slider"
                        shouldDisplayRanking={false}
                        products={customSliceArray(products, 10, 0)}
                        handleViewMore={() => this.handleViewMore('top100', 5)}
                    />

                    <MainCategory
                        firstHeaderText="Bulk Order"
                        secondHeaderText="Sales"
                        isFirstHeaderTextDark={true}
                        listType="plain"
                        shouldDisplayRanking={false}
                        products={customSliceArray(products, 10, 0)}
                        handleViewMore={() => this.handleViewMore('top100', 5)}
                    />
                </Grid>
            </Grid>
        );
    }
}
