import React from 'react';
class SignupFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PANCardCopy: null,
            GSTINCertificate: null
        }
        this.onChangeFile = this.onChangeFile.bind(this);
    }
    onChangeFile(e) {
        const { input: { onChange } } = this.props
        this.setState({
            [e.target.name]: e.target.files[0].name
        });
        onChange(e.target.files[0]);
    }
    renderTypes(type, props, hasGSTIN) {
        if (type === 'file' && hasGSTIN !== 'no') {
            return (<div className="customFileField"><label className="signupInputLabelFile"><b className="signupInputFields__label">{props.label}</b><div className="fileFields"><input className="signupInputFields__input__file" {...this.props.input} type={props.type} onChange={this.onChangeFile} /> <span className="placeholder">
                {this.state.GSTINCertificate !== null ? this.state.GSTINCertificate : props.input.name === 'GSTINCertificate' && 'Submit GST Certificate'} {this.state.PANCardCopy !== null ? this.state.PANCardCopy : props.input.name === 'PANCardCopy' && 'Submit PAN Card Copy'}
            </span><span className="btn-file"></span></div></label></div>);
        }
        if (type === 'file' && this.props.input.name === 'PANCardCopy') {
            return (<div className="customFileField"><label className="signupInputLabelFile"><b className="signupInputFields__label">{props.label}</b><div className="fileFields"><input className="signupInputFields__input__file" {...this.props.input} type={props.type} onChange={this.onChangeFile} /> <span className="placeholder">
                {this.state.GSTINCertificate !== null ? this.state.GSTINCertificate : props.input.name === 'GSTINCertificate' && 'Submit GST Certificate'} {this.state.PANCardCopy !== null ? this.state.PANCardCopy : props.input.name === 'PANCardCopy' && 'Submit PAN Card Copy'}
            </span><span className="btn-file"></span></div></label></div>);
        }

    }
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="fieldError">{error}</div>
            )
        }
    }
    renderInputFields(hasGSTIN) {
        if (this.props.type !== 'file' && this.props.input.name === 'GSTINNumber' && hasGSTIN !== 'no') {
            return (<div>
                <label className="signupInputFields__label">{this.props.label}</label>
                <input className="signupInputFields__input" {...this.props.input} type={this.props.type} />
                {this.renderError(this.props.meta)}
            </div>)
        }
        if (this.props.type !== 'file' && this.props.input.name !== 'GSTINNumber') {
            return (<div>
                <label className="signupInputFields__label">{this.props.label}</label>
                <input className="signupInputFields__input" {...this.props.input} type={this.props.type} />
                {this.renderError(this.props.meta)}
            </div>);
        }

    }
    render() {
        delete this.props.input.value;
        return (
            <div className={`signupInputFields ${this.props.classname}`}>
                {
                    this.renderInputFields(this.props.hasGSTIN)
                }
                {this.renderTypes(this.props.type, this.props, this.props.hasGSTIN)}
            </ div>
        );
    }
};
export default SignupFields;