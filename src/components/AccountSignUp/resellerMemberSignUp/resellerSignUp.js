import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import SignupFields from './SignupFields';
import 'react-widgets/dist/css/react-widgets.css'
import './resellerMemberSignUp.scss';
import RenderDropdownList from '../sharedComponents/dropdownList';
import { Country } from '../sharedComponents/getCountryDetails';
import { ResellerMemberFormRight, ResellerMemberFormLeft, validate } from '../formFieldsConfig/resellerMemberSignup';
class ResellerMemberSignUp extends Component {
    renderForms() {
        return (
            <div className="buyerMemberSignUpWrapper">
                <Grid spacing={0} className="formFieldContainer container" container direction="row" justify="space-between" alignItems="flex-start">
                    <div className="flex-column">
                        <Grid item className="buyerMemberSignUpWrapper__content left" item xs={12} lg={6}>
                            <div className="buyerMemberSignUpWrapper__terms">Marked as <span>*</span> are mandatory information to fill</div>
                            {ResellerMemberFormLeft.map((item, index) => {
                                const isArray = Array.isArray(item);
                                const isSelectionClass = isArray ? 'selectionField' : '';
                                const radioButtonSelectionLeft = item.length > 0 && <div className="selectionField__content"><label className="signupInputFields__label">{item[0].title}</label> <div className="subFields">{item.map((field, fieldIndex) => <div key={field + fieldIndex}>{!field.title && <div className="subFieldsContent"> <label className="radioContainer"><span className="radioCircle"></span><Field className="radio" label={field.label} value={field.value} type={field.type} name={field.name} component="input" />{field.label}</label> </div>}</div>)}</div></div>;
                                return (
                                    <div key={item + index} className={`${isSelectionClass}`}>{!isArray && < Field label={item.label} classname={item.class} type={item.type} placeholder={item.placeholder} name={item.name} component={SignupFields} />} {radioButtonSelectionLeft} </div>
                                );
                            })}
                        </Grid>

                        <Grid item className="buyerMemberSignUpWrapper__content right" item xs={12} lg={6}>
                            {ResellerMemberFormRight.map((item, index) => {
                                const isArray = Array.isArray(item);
                                const isSelectionClass = isArray && item.inputType === 'none' ? 'selectionField' : '';
                                const radioButtonSelectionRight = item.length > 0 && <div className="selectionField__content"><label className="signupInputFields__label">{item[0].title}</label> <div className={`subFields ${item[0].class}`}>{item.map((field, fieldIndex) => <div key={field + fieldIndex}>{!field.title && <div className="subFieldsContent"><Field label={field.label} value={field.value} type={field.type} name={field.name} component='input' /><label>{field.label}</label> </div>} </div>)}</div></div>;
                                const dropdown = <div>  {item.fieldType === 'pinCode' && <div><Field label={item.label} placeholder={item.placeholder} type={item.type} name={item.name} component={SignupFields} /></div>} {item.inputType === 'dropdown' && <div className="country"><label className="signupInputFields__label">{item.name}</label> <Field name={item.name} data={Country} valueField="value" textField="country" component={RenderDropdownList} /> </div>}</div>;
                                return (
                                    <div key={item + index} className={`${isSelectionClass}`}>
                                        {item.inputType !== 'dropdown' && !isArray && item.fieldType !== 'pinCode' && <Field label={item.label} classname={item.class} placeholder={item.placeholder} type={item.type} name={item.name} hasGSTIN={this.props.hasGSTN} component={SignupFields} />} {radioButtonSelectionRight} {dropdown}

                                    </div>
                                );
                            })}
                            The address should be based on GSTIN.
If you do not have GSTIN, please fill in the address based on registered office.
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
    onSubmit(e) {
        console.log(e);
    }
    render() {
        return (
            <div>
                <Grid container className="container">
                    <Grid item>
                        <h1 className="accountTitle">Reseller Member <span>Sign up</span></h1>
                    </Grid>
                </Grid>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    {
                        this.renderForms()

                    }
                    <Grid container className="formBtnContainer">
                        <Grid item xs={12}>
                            <div className="submitForm" > <button type="submit">Register</button></div>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    };
};

ResellerMemberSignUp = reduxForm({
    form: 'ResellerMemberSignUp',
    validate
})(ResellerMemberSignUp);
const selector = formValueSelector('ResellerMemberSignUp') // <-- same as form name
ResellerMemberSignUp = connect(state => {
    const hasGSTN = selector(state, 'gstin');
    return {
        hasGSTN
    }
})(ResellerMemberSignUp)
export default ResellerMemberSignUp