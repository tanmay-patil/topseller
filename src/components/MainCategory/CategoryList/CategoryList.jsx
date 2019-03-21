import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PlainList from './PlainList/PlainList';
import CategoryHeader from '../CategoryHeader/CategoryHeader';

/**
 * Category List should be of two types:
 * 1. Plain List - vertically scrolling
 * 2. Slider List - horizontally scrolling
 */
export default class CategoryList extends Component {
    render() {
        return (
            <Grid item justify="center" container>
                <CategoryHeader />
                <PlainList />
            </Grid>
        );
    }
}
