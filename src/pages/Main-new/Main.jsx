import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardList from '../../components/MainCategory/Prototype/CardList/CardList';
import CategoryHeader from '../../components/MainCategory/Prototype/CategoryHeader/CategoryHeader';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});
class Main extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <CategoryHeader
                            firstHeaderText={'Top'}
                            secondHeaderText={'100'}
                            isFirstHeaderTextDark={true}
                        />
                        <CardList />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
