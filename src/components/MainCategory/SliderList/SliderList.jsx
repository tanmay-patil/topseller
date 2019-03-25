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
        const { products, cardDisplayLimit } = this.props;

        const productCards = [];
        for (let index = 1; index <= cardDisplayLimit; index++) {
            const product = products[index];
            productCards.push(
                <div key={index} className="slider-card">
                    <ProductCard index={index} product={product} />
                </div>
            );
        }

        this.handleScrollLeft();

        return (
            <div
                ref={this.testRef}
                className="main-category-resize scrolling-wrapper-flexbox"
            >
                {productCards}
            </div>
        );
    }
}
