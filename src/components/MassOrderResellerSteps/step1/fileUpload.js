import React from 'react';
class FileUpload extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.state = {
            excelFormat: 'Submit File'
        }
    }
    onChangeFile(e) {
        const { input: { onChange } } = this.props;
        this.setState({
            excelFormat: e.target.files[0] && e.target.files[0].name
        });
        onChange(e.target.files[0]);
    }
    render() {
        delete this.props.input.value;
        return (
            <div className="customFileField"><label className="signupInputLabelFile"><b className="signupInputFields__label">{this.props.label} <span>*</span></b><div className="fileFields"><input className="signupInputFields__input__file" {...this.props.input} type={this.props.type} onChange={this.onChangeFile} /> <span className="placeholder">
                {this.state.excelFormat}
            </span><span className="btn-file"></span></div></label></div>
        );
    }
}
export default FileUpload;