import React, { Component } from 'react';
import './SpecialBanner.scss';
import Grid from '@material-ui/core/Grid';
import MainCategory from '../../components/MainCategory/MainCategory';

// Main page contains all the categories eg. Special, top 100, abroad
export default class SpecialBanner extends Component {
    render() {
        return (
            <Grid item className="main-page-container" container spacing={24}>
                <Grid item xs={12}>
                    <MainCategory
                        firstHeaderText="Special"
                        secondHeaderText="Deal"
                        isFirstHeaderTextDark={true}
                        listType="plain"
                        shouldDisplayRanking={false}
                    />
                </Grid>
            </Grid>
        );
    }
}
