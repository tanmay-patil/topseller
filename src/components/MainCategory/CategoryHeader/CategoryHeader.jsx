import React, { Component } from 'react';
import './CategoryHeader.scss';
import Grid from '@material-ui/core/Grid';
import { Mobile, Desktop } from '../../../services/ScreenSizeDefinitions';
import '../../../static/styles/resize.scss';

const Keywords = () => {
    return (
        <span className="keywords">
            <span className="tag">#Diffuser</span>
            <span className="tag">#Kbeauty</span>
            <span className="tag">#Electronics</span>
            <span className="tag">#Diffuser</span>
            <span className="tag">#Kbeauty</span>
            <span className="tag">#Electronics</span>
        </span>
    );
};

export default class CategoryHeader extends Component {
    handleViewMoreClick = () => {
        console.log('TEST123');
    };

    render() {
        const {
            isFirstHeaderTextDark,
            firstHeaderText,
            secondHeaderText,
            showPopularKeywords,
            handleViewMore
        } = this.props;

        const firstHeaderTextClass = isFirstHeaderTextDark
            ? 'dark-header'
            : 'light-header';
        const secondHeaderTextClass = isFirstHeaderTextDark
            ? 'light-header'
            : 'dark-header';

        return (
            <div className="main-category-resize category-header-container">
                {showPopularKeywords ? (
                    <Mobile>
                        <div className="width-100  container catCon popular-keywords-container">
                            <span className="label">Popular Keyword</span>
                            <Keywords />
                        </div>
                    </Mobile>
                ) : null}

                <Grid
                    className="category-header-grid container catCon"
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={0}
                >
                    <span className="header-text">
                        <span
                            className={
                                'first-header-text ' + firstHeaderTextClass
                            }
                        >
                            {firstHeaderText}
                        </span>
                        <span
                            className={
                                'second-header-text ' + secondHeaderTextClass
                            }
                        >
                            {secondHeaderText}
                        </span>
                    </span>

                    {showPopularKeywords ? (
                        <Desktop>
                            <div className="width-600px margin-left-12 popular-keywords-container">
                                <span className="label">Popular Keyword</span>
                                <Keywords />
                            </div>
                        </Desktop>
                    ) : null}

                    <div className="grow" />

                    <span onClick={handleViewMore} className="view-more-link">
                        View More +
                    </span>
                </Grid>
            </div>
        );
    }
}
