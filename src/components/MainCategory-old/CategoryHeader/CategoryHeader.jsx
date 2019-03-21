import React, { Component } from 'react';
import './CategoryHeader.scss';

export default class CategoryHeader extends Component {
    render() {
        const {
            isFirstHeaderTextDark,
            firstHeaderText,
            secondHeaderText
        } = this.props;

        const firstHeaderTextClass = isFirstHeaderTextDark
            ? 'dark-header'
            : 'light-header';
        const secondHeaderTextClass = isFirstHeaderTextDark
            ? 'light-header'
            : 'dark-header';

        return (
            <div className="category-header-container">
                <span className="header-text">
                    <span className={firstHeaderTextClass}>
                        {firstHeaderText}
                    </span>
                    <span className={secondHeaderTextClass}>
                        {secondHeaderText}
                    </span>
                </span>

                <span className="view-more-link">View More +</span>
            </div>
        );
    }
}
