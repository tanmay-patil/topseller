import React, { Component } from 'react';
import './MainPage.scss';
import MainCategory from '../../components/MainCategory/MainCategory';
import Grid from '@material-ui/core/Grid';

// Main page contains all the categories eg. Special, top 100, abroad
export default class MainPage extends Component {
    render() {
        return (
            <div className="box-1">
                <div className="box-2">
                    <div className="header">Header</div>
                    <div className="card-list">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (
                            <div className="card">Card {value}</div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
