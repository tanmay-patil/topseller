import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Main.scss';
import MainCategory from '../../components/MainCategory/MainCategory';
import { Default, Mobile } from '../../services/ScreenSizeDefinitions';

export default class Main extends Component {
    render() {
        return (
            <Grid
                container
                alignItems="center"
                justify="center"
                className="main-page-container"
            >
                <Grid className="category-grid-item" item>
                    <MainCategory
                        firstHeaderText="Top"
                        secondHeaderText="100"
                        isFirstHeaderTextDark={false}
                        showRankingIndex={true}
                    />
                </Grid>

                <Grid className="category-grid-item" item>
                    <MainCategory
                        firstHeaderText="TopSeller"
                        secondHeaderText="Choice"
                        isFirstHeaderTextDark={false}
                        showRankingIndex={false}
                    />
                </Grid>
            </Grid>
        );
    }
}
