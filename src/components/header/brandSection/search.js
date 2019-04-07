import React from 'react';
import { Grid } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {
    renderInput(formProps) {
        return <input className="searchField__input" onChange={formProps.input.onChange} value={formProps.input.value} placeholder="Total 5,000 products are listed" />;
    }
    onSubmit(formValues) {
        // Get the form input values
        console.log(formValues);
    }
    render() {
        return (
            <Grid item xs={12} lg={6}>
                <div className="searchField">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                        <Field component={this.renderInput} name="search" />
                        <div className="searchField__icon">
                            <button type="submit"><SearchIcon /></button>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}
const validate = (formValues) => {
    const errors = {};
    if (!formValues.search) {
        errors.search = 'Please enter value to search'
    }
    return errors;
}
export default reduxForm({
    form: 'searchSeller',
    validate
})(Search);