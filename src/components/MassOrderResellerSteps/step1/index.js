import React from 'react';
import './step1.scss';
import FileUpload from './fileUpload';
import { Grid } from '@material-ui/core';
import { Field, reduxForm } from 'redux-form';
class Step1 extends React.Component {
    constructor(props) {
        super(props);
    }
    onSubmit(data) {
        console.log(data);
    }
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className="step1__container">
                <Grid container={12} className="container">
                    <Grid item lg={12}>
                        <div className="step1__download">
                            <h2>Download Excel Format</h2>
                            <button>Download</button>
                        </div>
                    </Grid>
                    <Grid item lg={12}>
                        <div className="step1__form">
                            <form onSubmit={handleSubmit(this.onSubmit)}>
                                <Field
                                    name="download"
                                    label="Upload File"
                                    component={FileUpload}
                                    type="file"
                                    placeholder="Submit File"
                                />
                            </form>
                        </div>
                    </Grid>
                    <div className="step1__info">
                        <p>  * Note below precautions before making excel mass order</p>

                        <p>• Please enter exact mobile number information. Izf loss happens, seller/buyer is responsible</p>
                        <p>• If supplier code, receiver, receiver’s number, receiver’s address is same, then it will be regarded
      as bundle delivery</p>
                        <p>• If quantity of orders are more then two, it will be regarded as bundle delivery, and delivery will
                          be charged as per vendor shipping policy
      </p>
                    </div>
                </Grid>
            </div>
        );
    }
}
export default reduxForm({
    form: 'stepOneDownload'
})(Step1);