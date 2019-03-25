import React, { Component } from 'react';
import './MainCategory.scss';
import Grid from '@material-ui/core/Grid';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import PlainList from '../MainCategory/PlainList/PlainList';
import SliderList from './SliderList/SliderList';
import LeftArrowSVG from '../../icons/svg/LeftArrowSVG';
import RightArrowSVG from '../../icons/svg/RightArrowSVG';
import { PRODUCT_RANKING_LABEL } from '../../services/types';

/**
 * Category List should consist two components
 * 1. Header
 * 2. List
 *
 * Category List should be of two types:
 * 1. Plain List - vertically scrolling
 * 2. Slider List - horizontally scrolling
 */

// Main category should consist of category header and category list

export default class MainCategory extends Component {
    state = {
        spacing: 16
    };

    handleScroll = direction => {
        direction === 'left'
            ? this.sliderListRef.current.handleScrollLeft()
            : this.sliderListRef.current.handleScrollRight();
    };

    render() {
        const { spacing } = this.state;
        const {
            listType,
            firstHeaderText,
            secondHeaderText,
            isFirstHeaderTextDark,
            shouldDisplayRanking,
            showPopularKeywords,
            products,
            cardDisplayLimit,
            handleViewMore
        } = this.props;

        this.sliderListRef = React.createRef();

        // const DUMMY_PRODUCT_LIST = this.getDummyProductList();

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
                        showPopularKeywords={showPopularKeywords}
                        handleViewMore={handleViewMore}
                    />
                    {listType === 'plain' ? (
                        <PlainList
                            shouldDisplayRanking={shouldDisplayRanking}
                            products={products}
                            cardDisplayLimit={cardDisplayLimit}
                        />
                    ) : null}

                    {listType === 'slider' ? (
                        <div
                            onClick={() => this.handleScroll('left')}
                            className="left-arrow-container"
                        >
                            <LeftArrowSVG />
                        </div>
                    ) : null}

                    {listType === 'slider' ? (
                        <SliderList
                            ref={this.sliderListRef}
                            products={products}
                            cardDisplayLimit={cardDisplayLimit}
                        />
                    ) : null}

                    {listType === 'slider' ? (
                        <div
                            onClick={() => this.handleScroll('right')}
                            className="right-arrow-container"
                        >
                            <RightArrowSVG />
                        </div>
                    ) : null}
                </Grid>
            </Grid>
        );
    }
}
