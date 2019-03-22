import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './SliderList.scss';

export default class SliderList extends Component {
    render() {
        const { products } = this.props;

        return (
            <div className="scrolling-wrapper-flexbox">
                {products.map((product, i) => (
                    <div key={i} className="slider-card">
                        <ProductCard index={i + 1} product={product} />
                    </div>
                ))}
            </div>
        );
    }
}
