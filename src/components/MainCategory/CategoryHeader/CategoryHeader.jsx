import React, { Component } from 'react';
import './CategoryHeader.scss';
import Grid from '@material-ui/core/Grid';

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

                    <div className="grow" />

                    <span className="view-more-link">View More +</span>
                </Grid>
            </div>
        );
    }
}
