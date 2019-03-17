import React, { Component } from 'react';
import './MainCategory.scss';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import PlainCardList from './ProductCardList/PlainCardList/PlainCardList';

export default class MainCategory extends Component {
    render() {
        const {
            isFirstHeaderTextDark,
            firstHeaderText,
            secondHeaderText,
            showRankingIndex
        } = this.props;

        return (
            <div className="category-container">
                <CategoryHeader
                    firstHeaderText={firstHeaderText}
                    secondHeaderText={secondHeaderText}
                    isFirstHeaderTextDark={isFirstHeaderTextDark}
                />
                <PlainCardList showRankingIndex={showRankingIndex} />
            </div>
        );
    }
}
