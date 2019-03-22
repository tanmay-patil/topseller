import React, { Component } from 'react';
import './MainPage.scss';
import MainCategory from '../../components/MainCategory/MainCategory';
import Grid from '@material-ui/core/Grid';
import BlankCategory from '../../components/BlankCategory/BlankCategory';
import ImageCarousel from '../../components/ImageCarousel/ImageCarousel';

// Main page contains all the categories eg. Special, top 100, abroad
export default class MainPage extends Component {
    render() {
        return (
            <Grid item className="main-page-container" container spacing={24}>
                <Grid item xs={12}>
                    <ImageCarousel />

                    <BlankCategory />

                    <MainCategory
                        firstHeaderText="Top"
                        secondHeaderText="100"
                        isFirstHeaderTextDark={false}
                        listType="plain"
                        shouldDisplayRanking={true}
                    />
                    <MainCategory
                        firstHeaderText="TopSeller"
                        secondHeaderText="Choice"
                        isFirstHeaderTextDark={false}
                        listType="slider"
                        shouldDisplayRanking={false}
                    />
                    <MainCategory
                        firstHeaderText="Bulk Order"
                        secondHeaderText="Sales"
                        isFirstHeaderTextDark={true}
                        listType="plain"
                        shouldDisplayRanking={false}
                    />
                </Grid>
            </Grid>
        );
    }
}
