import React, { Component } from 'react';
import MyPageSideBar from '../MyPageSideBar/MyPageSideBar';
import SearchSVG from '../../../icons/svg/SearchSVG';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    OutlinedInput
} from '@material-ui/core';
import { MY_PAGE_OPTIONS } from '../../../services/types';
import { Mobile, Desktop } from '../../../services/ScreenSizeDefinitions';
import './Notice.scss';

const TableRow = () => {
    return (
        <tr>
            <td>35</td>
            <td>Category</td>
            <td>Product example Product example Product example</td>
            <td>
                29/12/2018 <br /> 16:49
            </td>
        </tr>
    );
};

const FirstRow = props => {
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
                        <MenuItem value={10}>Dummy 1</MenuItem>
                        <MenuItem value={20}>Dummy 2</MenuItem>
                        <MenuItem value={30}>Dummy 3</MenuItem>
                    </Select>
                </FormControl>
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

export default class Notice extends Component {
    state = {
        filter: '',
        name: 'hai',
        labelWidth: 0
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { filter } = this.state;
        return (
            <div className="my-page-notice-container container">
                <div className="left-section-container">
                    <MyPageSideBar selected={MY_PAGE_OPTIONS.NOTICE} />
                </div>

                <Mobile>
                    <div className="top-section-container">
                        <div className="title">Notice</div>

                        <FirstRow
                            handleChange={this.handleChange}
                            filter={filter}
                        />
                    </div>
                </Mobile>

                <div className="right-section-container">
                    <Desktop>
                        <FirstRow
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
                                        <td>Type</td>
                                        <td>Subject Title</td>
                                        <td>Date of Upload</td>
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
