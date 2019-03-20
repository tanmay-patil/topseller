import React from 'react';
import { Grid, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
const Search = () => {
    return (
        <Grid item xs={12} lg={6}>
        <div className="searchField">
            <InputBase
                className='searchField__input'
                placeholder="Total 5,000 products are listed"
            />
            <div className="searchField__icon">
                <SearchIcon />
            </div>
        </div>
    </Grid>
    )
}
export default Search;