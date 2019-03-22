import React, { Component } from 'react';
import './MainCategory.scss';
import CategoryList from './CategoryList/CategoryList';
import Grid from '@material-ui/core/Grid';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import PlainList from '../MainCategory/PlainList/PlainList';
import SliderList from './SliderList/SliderList';
import LeftArrowSVG from '../../icons/svg/LeftArrowSVG';
import RightArrowSVG from '../../icons/svg/RightArrowSVG';

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

// Main category should consist of category header and category list

export default class MainCategory extends Component {
    state = {
        spacing: 16
    };
    render() {
        const { spacing } = this.state;
        const {
            listType,
            firstHeaderText,
            secondHeaderText,
            isFirstHeaderTextDark
        } = this.props;
        return (
            <Grid
                item
                className="main-category-container"
                container
                justify="center"
                spacing={spacing}
            >
                <Grid item justify="center" container>
                    <CategoryHeader
                        firstHeaderText={firstHeaderText}
                        secondHeaderText={secondHeaderText}
                        isFirstHeaderTextDark={isFirstHeaderTextDark}
                    />
                    {listType == 'plain' ? (
                        <PlainList products={DUMMY_PRODUCT_LIST} />
                    ) : null}

                    {listType == 'slider' ? (
                        <div className="left-arrow-container">
                            <LeftArrowSVG />
                        </div>
                    ) : null}

                    {listType == 'slider' ? (
                        <SliderList products={DUMMY_PRODUCT_LIST} />
                    ) : null}

                    {listType == 'slider' ? (
                        <div className="right-arrow-container">
                            <RightArrowSVG />
                        </div>
                    ) : null}
                </Grid>
            </Grid>
        );
    }
}
