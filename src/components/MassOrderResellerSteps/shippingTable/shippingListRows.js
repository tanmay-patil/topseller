import React from 'react';
import ShippingOptionSelect from './shippingOptionsSelect';
const ShippingRows = (props) => {
    return (
        <div className="table__row">
            <div className="table__row__left no">
                <input type="checkbox" /> <span className="shippingNumber">{props.number}</span>
            </div>
            <div className="table__row__right">
                <div className="table__row__right__row">
                    <div className="table__row__right__row__cell tcode">{props.tcode}</div>
                    <div className={`table__row__right__row__cell productName ${props.hasOption ? 'hasOption' : ''}`}>
                        {props.productName}
                        {props.hasOption && <ShippingOptionSelect type='option' />}
                    </div>
                    <div className="table__row__right__row__cell qty">{props.qty}</div>
                    <div className="table__row__right__row__cell supplyPrice">₹ {props.supplyPrice}</div>
                    <div className="table__row__right__row__cell shippingFee">₹ {props.shippingFee}</div>
                    <div className="table__row__right__row__cell totalPrice">₹ {props.totalPrice}</div>
                    <div className="shippingMethodContent table__row__right__row__cell shippingMethod ">
                        <ShippingOptionSelect />
                    </div>
                    <div className="table__row__right__row__cell more"><a href="">Memo</a></div>
                </div>
                <div className="table__row__right__row bottom">
                    <div className="table__row__right__row__cell tcode">Recipient</div>
                    <div className="table__row__right__row__cell__content">
                        <p>{props.recipietDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShippingRows;