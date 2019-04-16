import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';
const RenderDropdown = ({ input, data, valueField, textField }) => {
    return (
        <DropdownList {...input}
            data={data}
            valueField={valueField}
            textField={textField}
            onChange={input.onChange} />
    );
};
export default RenderDropdown;