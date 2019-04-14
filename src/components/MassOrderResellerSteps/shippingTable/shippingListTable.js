import React from 'react';
import ShippingListRows from './shippingListRows';
const ShippingListTable = (props) => {
    const rowsList = [
        {
            tCode: 'T1A0001',
            productName: 'Product example Product example Product example',
            qty: 1,
            hasOption: false,
            supplyPrice: '21,230',
            shippingFee: '21,230',
            totalPrice: '21,230',
            recipientDescription: 'Recipient name sample 99999 33424 (560066) Address example line Address example line Address example line Address example line Address example line'
        },
        {
            tCode: 'T1A0001',
            productName: 'Product example Product example Product example',
            qty: 2,
            hasOption: true,
            supplyPrice: '21,230',
            shippingFee: '21,230',
            totalPrice: '21,230',
            recipientDescription: 'Recipient name sample 99999 33424 (560066) Address example line Address example line Address example line Address example line Address example line'
        },
        {
            tCode: 'T1A0001',
            productName: 'Product example Product example Product example',
            qty: 3,
            hasOption: false,
            supplyPrice: '21,230',
            shippingFee: '21,230',
            totalPrice: '21,230',
            recipientDescription: 'Recipient name sample 99999 33424 (560066) Address example line Address example line Address example line Address example line Address example line'
        },
        {
            tCode: 'T1A0001',
            productName: 'Product example Product example Product example',
            qty: 4,
            hasOption: true,
            supplyPrice: '21,230',
            shippingFee: '21,230',
            totalPrice: '21,230',
            recipientDescription: 'Recipient name sample 99999 33424 (560066) Address example line Address example line Address example line Address example line Address example line'
        }

    ]
    return (
        <div className="step2__bottom">
            <div className="table">
                <div className="table__header">
                    <div className="table__header__cell no">No</div>
                    <div className="table__header__cell tcode">T Code</div>
                    <div className="table__header__cell productName">Product Name</div>
                    <div className="table__header__cell qty">Qty.</div>
                    <div className="table__header__cell supplyPrice">Supply Price (Inc. Tax)</div>
                    <div className="table__header__cell shippingFee">Shipping Fee</div>
                    <div className="table__header__cell totalPrice">Total Price</div>
                    <div className="table__header__cell shippingMethod">Shipping Method</div>
                    <div className="table__header__cell more">More</div>
                </div>
                {
                    rowsList.map((item, index) => {
                        return <ShippingListRows key={index} number={index + 1} tcode={item.tCode} productName={item.productName} qty={item.qty} supplyPrice={item.supplyPrice} shippingFee={item.shippingFee} totalPrice={item.totalPrice} hasOption={item.hasOption} recipietDescription={item.recipientDescription} />
                    })
                }
            </div>
            <div className="deleteSelected">
                <button>Delete Selected</button>
            </div>
        </div>
    );
};
export default ShippingListTable;