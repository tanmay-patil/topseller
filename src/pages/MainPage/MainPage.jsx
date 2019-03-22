import React, { Component } from 'react';
import './MainPage.scss';
import MainCategory from '../../components/MainCategory/MainCategory';
import Grid from '@material-ui/core/Grid';

// Main page contains all the categories eg. Special, top 100, abroad
export default class MainPage extends Component {
    render() {
        return (
            <Grid item className="main-page-container" container spacing={24}>
                <Grid item xs={12}>
                    <MainCategory
                        firstHeaderText="Top"
                        secondHeaderText="100"
                        isFirstHeaderTextDark={false}
                        listType="plain"
                    />
                    <MainCategory
                        firstHeaderText="TopSeller"
                        secondHeaderText="Choice"
                        isFirstHeaderTextDark={false}
                        listType="slider"
                    />
                    <MainCategory
                        firstHeaderText="Bulk Order"
                        secondHeaderText="Sales"
                        isFirstHeaderTextDark={true}
                        listType="plain"
                    />
                </Grid>
            </Grid>
        );
    }
}
