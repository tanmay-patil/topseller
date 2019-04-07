import React, { Component } from 'react';
import './SignUpMain.scss';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

const CheckBoxContainer = props => {
    return (
        <div className="checkbox-container">
            <div className="row">
                <Checkbox
                    className="checkbox"
                    checked={props.checkTermsOfUse}
                    onChange={props.handleCheckboxChange('checkTermsOfUse')}
                    value="checkTermsOfUse"
                />
                <span className="label">
                    Agree for
                    <span className="strong"> Terms of Use</span>
                </span>
            </div>

            <div className="row margin-top-14">
                <Checkbox
                    className="checkbox"
                    checked={props.checkPrivacyPolicy}
                    onChange={props.handleCheckboxChange('checkPrivacyPolicy')}
                    value="checkPrivacyPolicy"
                />
                <span className="label">
                    Agree for
                    <span className="strong"> Privacy Policy</span>
                </span>
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="header-text">
            Buyer or Reseller
            <span className="strong"> Sign Up</span>
        </div>
    );
};

const BuyerMember = () => {
    return (
        <div className="main-box">
            <div className="inner-container">
                <div className="first-row">
                    <span className="strong">Buyer </span>
                    Member
                </div>

                <div className="second-row">
                    For corporation, purchasing products in TopSeller
                </div>

                <div className="third-row">
                    <p>
                        • Possible for purchasing products with supplying price
                    </p>
                    <p>
                        • Possible for purchasing single item with supplying
                        price
                    </p>
                    <p>• Notified for sales or special price</p>
                    <p>
                        • Easy for being member and can use service immediately
                    </p>
                </div>

                <div className="fourth-row">
                    <Button fullWidth color="primary" variant="contained">
                        Join
                    </Button>
                </div>
            </div>
        </div>
    );
};

const ResellerMember = () => {
    return (
        <div className="main-box">
            <div className="inner-container">
                <div className="first-row">
                    <span className="strong">Reseller </span>
                    Member
                </div>

                <div className="second-row">
                    For corporation / reseller, Resale products in TopSeller
                </div>

                <div className="third-row">
                    <p>• Premium purchasing price</p>
                    <p>• Possible for downloading Product Database</p>
                    <p>• Possible for resale without bulk order</p>
                    <p>• Various seller training program by AT Seller Center</p>
                </div>

                <div className="fourth-row">
                    <Button fullWidth color="primary" variant="contained">
                        Join
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default class SignUpMain extends Component {
    state = {
        checkTermsOfUse: false,
        checkPrivacyPolicy: false
    };

    handleCheckboxChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    render() {
        const { checkTermsOfUse, checkPrivacyPolicy } = this.state;

        return (
            <div className="sign-up-main-container container">
                <Header />

                <CheckBoxContainer
                    checkTermsOfUse={checkTermsOfUse}
                    checkPrivacyPolicy={checkPrivacyPolicy}
                    handleCheckboxChange={this.handleCheckboxChange}
                />

                <div className="box-container">
                    <BuyerMember />

                    <ResellerMember />
                </div>
            </div>
        );
    }
}
