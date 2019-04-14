import React from 'react';
const ShippingOptionsSelect = (props) => {
    return (
        <div className={`shippingSelectContetn ${props.type === 'option' ? 'shipOption' : ''}`}>
            {props.type === 'option' ?
                <select className="shippingSelect">
                    <option value="" disabled selected>Select your option</option>
                    <option>Option</option>
                    <option>Option</option>
                    <option>Option</option>
                    <option>Option</option>
                </select>
                : <select className="shippingSelect">
                    <option>Cash on Delivery</option>
                    <option>Cash on Delivery</option>
                    <option>Cash on Delivery</option>
                    <option>Cash on Delivery</option>
                </select>
            }
        </div>
    );
};
export default ShippingOptionsSelect;