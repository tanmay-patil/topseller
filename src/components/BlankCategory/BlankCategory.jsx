import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './BlankCategory.scss';
import Paper from '@material-ui/core/Paper';

export default class BlankCategory extends Component {
    render() {
        return (
            <Grid
                className="blank-category container catCon"
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
            >
                <Grid
                    className="blank-card-container"
                    item
                    xs={6}
                    md={6}
                    lg={3}
                >
                    <Paper className="blank-card" />
                </Grid>
                <Grid
                    className="blank-card-container"
                    item
                    xs={6}
                    md={6}
                    lg={3}
                >
                    <Paper className="blank-card" />
                </Grid>
                <Grid
                    className="blank-card-container"
                    item
                    xs={6}
                    md={6}
                    lg={3}
                >
                    <Paper className="blank-card" />
                </Grid>
                <Grid
                    className="blank-card-container"
                    item
                    xs={6}
                    md={6}
                    lg={3}
                >
                    <Paper className="blank-card" />
                </Grid>
            </Grid>
        );
    }
}
