import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './SliderList.scss';

export default class SliderList extends Component {
    testRef = React.createRef();

    handleScrollLeft = () => {
        // this.testRef.current.scroll({
        //     left: 10,
        //     behavior: 'smooth'
        // })
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
            <div ref={this.testRef} className="scrolling-wrapper-flexbox">
                {products.map((product, i) => (
                    <div key={i} className="slider-card">
                        <ProductCard index={i + 1} product={product} />
                    </div>
                ))}
            </div>
        );
    }
}
