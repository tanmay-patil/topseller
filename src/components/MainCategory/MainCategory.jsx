import React, { Component } from 'react';
import './MainCategory.scss';
import CategoryList from './CategoryList/CategoryList';
import Grid from '@material-ui/core/Grid';
// Main category should consist of category header and category list

export default class MainCategory extends Component {
    state = {
        spacing: 16
    };
    render() {
        const { spacing } = this.state;
        return (
            <Grid
                item
                className="main-category-container"
                container
                justify="center"
                spacing={spacing}
            >
                <CategoryList />
            </Grid>
        );
    }
}
