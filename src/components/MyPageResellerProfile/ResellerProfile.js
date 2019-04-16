import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Grid } from '@material-ui/core';
import SignupFields from './SignupFields';
import 'react-widgets/dist/css/react-widgets.css'
import './ResellerProfile.scss';
import RenderDropdownList from './sharedComponents/dropdownList';
import { Country } from './sharedComponents/getCountryDetails';
import { ResellerFormLeft, validate } from './formFieldsConfig/resellerProfileForm';
class ResellerProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedSuccess: false
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    renderForms() {
        return (
            <div className="buyerMemberSignUpWrapper">
                <Grid spacing={0} className="formFieldContainer container" container direction="row" justify="space-between" alignItems="flex-start">
                    <div className="flex-column">
                        <Grid item className="buyerMemberSignUpWrapper__content" item xs={12} lg={6}>
                            {ResellerFormLeft.map((item, index) => {
                                const isArray = Array.isArray(item);
                                const isSelectionClass = isArray ? 'selectionField' : '';
                                const dropdown = <div>  {item.fieldType === 'pinCode' && <div><Field label={item.label} placeholder={item.placeholder} type={item.type} name={item.name} component={SignupFields} /></div>} {item.inputType === 'dropdown' && <div className="country"><label className="signupInputFields__label">{item.name}</label> <Field name={item.name} data={Country} valueField="value" textField="country" component={RenderDropdownList} /> </div>}</div>;
                                return (
                                    <div key={item + index} className={`${isSelectionClass}`}>{!isArray && < Field label={item.label} classname={item.class} type={item.type} placeholder={item.placeholder} name={item.name} component={SignupFields} />} {dropdown}</div>
                                );
                            })}
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
    onSubmit(data) {
        // console.log(data);
        const formInput = [data]
        const formData = new FormData();
        // const signUpModel = [{
        //     "address1": e.AddressLine,
        //     "address2": e.AddressLine2,
        //     "agreeForReceivingMail": e.terms,
        //     "country": e.country,
        //     "email": e.email,
        //     "entityName": e.EntityName,
        //     "gstin": e.GSTINNumber,
        //     "gstinCertificate": e.GSTINCertificate,
        //     "password": e.password,
        //     "personalIdentificationNumber": e.PANnumber,
        //     "personalIdentificationNumberCardImage": e.PANCardCopy,
        //     "phoneNumber": e.ContactNumber,
        //     "pinCode": e.pincode,
        //     "state": e.state,
        //     "username": e.ID
        // }]
        const a = formInput.forEach(item => {
            formData.append("address1", item.AddressLine);
            formData.append("address2", item.AddressLine2);
            formData.append("agreeForReceivingMail", item.terms);
            formData.append("country", item.country);
            formData.append("email", item.email);
            formData.append("entityName", item.EntityName);
            formData.append("gstin", item.GSTINNumber);
            formData.append("gstinCertificate", item.GSTINCertificate);
            formData.append("password", item.password);
            formData.append("personalIdentificationNumber", item.PANnumber);
            formData.append("personalIdentificationNumberCardImage", item.PANCardCopy);
            formData.append("phoneNumber", item.ContactNumber);
            formData.append("pinCode", item.pincode);
            formData.append("state", item.state);
            formData.append("username", item.ID);
            return formData;
        });
        // for (var key of formData.entries()) {
        //     console.log(key[0] + ', ' + key[1])
        // }
        this.setState({
            submittedSuccess: true
        });
        this.props.reset();
    }
    render() {
        return (
            <>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {
                        this.renderForms()

                    }
                    <Grid container className="formBtnContainer">
                        <Grid item xs={12}>
                            <div className="submitForm" > <button type="submit">Save Changes</button></div>
                            {this.state.submittedSuccess && <div className="formSubmitted">Your signup form submitted successfully</div>}
                        </Grid>
                    </Grid>
                </form>
            </>
        );
    };
};

ResellerProfile = reduxForm({
    form: 'ResellerProfile',
})(ResellerProfile);
export default ResellerProfile