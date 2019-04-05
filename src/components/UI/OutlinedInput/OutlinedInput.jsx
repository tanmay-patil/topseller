import React from 'react';
import ReactDOM from 'react-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';

class CustomOutlinedInput extends React.Component {
    state = {
        name: ''
    };

    componentDidMount() {
        this.forceUpdate();
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        return (
            <div>
                <FormControl fullWidth variant="outlined">
                    {/* <InputLabel
                        ref={ref => {
                            this.labelRef = ReactDOM.findDOMNode(ref);
                        }}
                        htmlFor="component-outlined"
                    >
                        Phone Number
                    </InputLabel> */}
                    <OutlinedInput
                        fullWidth
                        type="text"
                        id="component-outlined"
                        value={this.state.name}
                        onChange={this.handleChange}
                        labelWidth={
                            this.labelRef ? this.labelRef.offsetWidth : 0
                        }
                        startAdornment={
                            <InputAdornment position="start">
                                +91
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </div>
        );
    }
}

export default CustomOutlinedInput;
