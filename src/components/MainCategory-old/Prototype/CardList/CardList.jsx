import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import ProductCard from '../ProductCard/ProductCard';
import './CardList.scss';

export default class CardList extends React.Component {
    state = {
        spacing: '16'
    };

    handleChange = key => (event, value) => {
        this.setState({
            [key]: value
        });
    };

    render() {
        const { spacing } = this.state;

        return (
            <Grid
                container
                justify="center"
                className="card-list-container"
                spacing={16}
            >
                <Grid item sm={12}>
                    <Grid
                        container
                        className=""
                        justify="center"
                        spacing={Number(spacing)}
                    >
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(value => (
                            <Grid key={value} item>
                                <ProductCard />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
