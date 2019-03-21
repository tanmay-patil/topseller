import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PlainList from './PlainList/PlainList';
import CategoryHeader from '../CategoryHeader/CategoryHeader';

/**
 * Category List should consist two components
 * 1. Header
 * 2. List
 *
 * Category List should be of two types:
 * 1. Plain List - vertically scrolling
 * 2. Slider List - horizontally scrolling
 */

const DUMMY_PRODUCT_LIST = [
    {
        id: 'T12345',
        ranking: 'top',
        imgUrl: 'https://picsum.photos/400/400/?image=11',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'gold',
        imgUrl: 'https://picsum.photos/400/400/?image=22',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'silver',
        imgUrl: 'https://picsum.photos/400/400/?image=33',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'bronze',
        imgUrl: 'https://picsum.photos/400/400/?image=44',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'top',
        imgUrl: 'https://picsum.photos/400/400/?image=55',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'gold',
        imgUrl: 'https://picsum.photos/400/400/?image=66',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'silver',
        imgUrl: 'https://picsum.photos/400/400/?image=77',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'bronze',
        imgUrl: 'https://picsum.photos/400/400/?image=88',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: '',
        imgUrl: 'https://picsum.photos/400/400/?image=99',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: '',
        imgUrl: 'https://picsum.photos/400/400/?image=99',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    }
];
export default class CategoryList extends Component {
    render() {
        return (
            <Grid item justify="center" container>
                <CategoryHeader
                    firstHeaderText={'Top'}
                    secondHeaderText={'100'}
                    isFirstHeaderTextDark={false}
                />
                <PlainList products={DUMMY_PRODUCT_LIST} />
            </Grid>
        );
    }
}
