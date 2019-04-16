import React, { Component } from 'react';
import MyPageSideBar from '../MyPageSideBar/MyPageSideBar';
import SearchSVG from '../../../icons/svg/SearchSVG';
import FilterSVG from '../../../icons/svg/FilterSVG';
import DownloadSVG from '../../../icons/svg/DownloadSVG';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput,
    Button
} from '@material-ui/core';
import { MY_PAGE_OPTIONS } from '../../../services/types';
import { Mobile, Desktop } from '../../../services/ScreenSizeDefinitions';
import './Stock.scss';
import StockFilter from '../../Dialogs/StockFilter/StockFilter';

const TableRow = () => {
    return (
        <tr>
            <td>35</td>
            <td>T1A0001</td>
            <td>Product example Product example Product example</td>
            <td>Shipping Plan Change</td>
            <td>No Cash on Delivery</td>
            <td>
                29/12/2018 <br />
                16:49
            </td>
            <td>
                29/12/2018 <br />
                16:49
            </td>
        </tr>
    );
};

const FirstRow = props => {
    console.log(props);
    return (
        <div className="first-row">
            <div className="search-bar-container">
                <span className="text">All</span>
                <span className="icon">
                    <SearchSVG />
                </span>
                <span className="input-container">
                    <input type="text" name="search" id="search" />
                </span>
            </div>
            <div className="flex-grow" />
            <div className="dropdown-container">
                <FormControl variant="outlined">
                    <Select
                        value={props.filter}
                        onChange={props.handleChange('filter')}
                        input={
                            <OutlinedInput
                                name="filter"
                                labelWidth={0}
                                id="outlined-filter-native-simple"
                            />
                        }
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>2019-02-14 ~ 2019-03-24</MenuItem>
                        <MenuItem value={20}>2019-02-14 ~ 2019-03-24</MenuItem>
                        <MenuItem value={30}>2019-02-14 ~ 2019-03-24</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    onClick={() => props.handleFilterVisibility(true)}
                    className="filter-button"
                >
                    <FilterSVG />
                </Button>

                <Button className="download-button">
                    <DownloadSVG />
                </Button>
            </div>
        </div>
    );
};

const PaginationContainer = () => {
    return (
        <div className="pagination-container">
            <div className="box selected">1</div>
            <div className="box">2</div>
            <div className="box">3</div>
            <div className="box">4</div>
            <div className="box">5</div>
            <div className="box">></div>
        </div>
    );
};

export default class Stock extends Component {
    state = {
        filter: '',
        name: 'hai',
        labelWidth: 0,
        stockFilterOpen: false
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleFilterVisibility = value => {
        this.setState({ stockFilterOpen: value });
    };

    render() {
        const { filter, stockFilterOpen } = this.state;
        return (
            <div className="my-page-stock-container container">
                <StockFilter
                    handleFilterVisibility={this.handleFilterVisibility}
                    open={stockFilterOpen}
                />
                <div className="left-section-container">
                    <MyPageSideBar selected={MY_PAGE_OPTIONS.NOTICE} />
                </div>

                <Mobile>
                    <div className="top-section-container">
                        <div className="title">Out of Stocker & Restocked</div>

                        <FirstRow
                            handleFilterVisibility={this.handleFilterVisibility}
                            handleChange={this.handleChange}
                            filter={filter}
                        />
                    </div>
                </Mobile>

                <div className="right-section-container">
                    <Desktop>
                        <FirstRow
                            handleFilterVisibility={this.handleFilterVisibility}
                            handleChange={this.handleChange}
                            filter={filter}
                        />
                    </Desktop>

                    <div className="second-row">
                        <div className="table-container">
                            <table>
                                <thead>
                                    <tr>
                                        <td>No</td>
                                        <td>Order Status</td>
                                        <td>Product Name</td>
                                        <td>Status</td>
                                        <td>Change Preview</td>
                                        <td>Date of Upload</td>
                                        <td>Date of Change</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                    <TableRow />
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="third-row">
                        <PaginationContainer />
                    </div>
                </div>
            </div>
        );
    }
}
