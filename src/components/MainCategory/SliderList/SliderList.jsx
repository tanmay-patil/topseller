import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './SliderList.scss';

export default class SliderList extends Component {
    testRef = React.createRef();

    handleScrollLeft = () => {
        return this.testRef.current != null
            ? (this.testRef.current.scrollLeft -= 100)
            : '';
    };
    handleScrollRight = () => {
        return this.testRef.current != null
            ? (this.testRef.current.scrollLeft += 100)
            : '';
    };

    render() {
        const { products } = this.props;

        this.handleScrollLeft();

        return (
            <div
                ref={this.testRef}
                className="main-category-resize scrolling-wrapper-flexbox"
            >
                {products.map((product, index) => {
                    return (
                        <div key={index} className="slider-card">
                            <ProductCard index={index + 1} product={product} />
                        </div>
                    );
                })}
            </div>
        );
    }
}
