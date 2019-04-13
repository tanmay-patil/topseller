import React, { Component } from 'react';
import './MyPageSideBar.scss';
import { MY_PAGE_OPTIONS } from '../../../services/types';

export default class MyPageSideBar extends Component {
    getSelectedClass = (currentType, expectedType) => {
        return currentType == expectedType ? 'item selected' : 'item';
    };

    render() {
        const { selected } = this.props;

        return (
            <div className="my-page-sidebar-container">
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.PROFILE
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Profile</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.ORDER_AND_SHIPPING
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Order & Shipping</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.EXCEL_MASS_ORDER
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Excel Mass Order</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.OUT_OF_STOCK_AND_RESTOCKED
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Out of Stock and Restocked</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.SESSION_AND_SERVICE
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Session and Service</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.INVOICE
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Invoice</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.PRODUCT_DB_DOWNLOAD
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Product DB Download</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.T_MONEY
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">T-Money</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.NOTICE
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">Notice</div>
                </div>
                <div
                    className={this.getSelectedClass(
                        selected,
                        MY_PAGE_OPTIONS.TCS_BOARD
                    )}
                >
                    <div className="item-icon">icon</div>
                    <div className="item-text">T-CS Board</div>
                </div>
            </div>
        );
    }
}
