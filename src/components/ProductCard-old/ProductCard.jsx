import React, { Component } from 'react';
import './ProductCard.scss';
import {
    Desktop,
    Tablet,
    Mobile,
    Default
} from '../../services/ScreenSizeDefinitions';
import RupeeIconSVG from '../../icons/svg/RupeeIconSVG';

const ProductCardComponent = props => {
    const { currentClass, product, index, showRankingIndex } = props;

    let productLabel;
    switch (product.ranking) {
        case 'top':
            productLabel = <span className="card-label red-label">TOP</span>;
            break;
        case 'gold':
            productLabel = <span className="card-label gold-label">GOLD</span>;
            break;
        case 'silver':
            productLabel = (
                <span className="card-label silver-label">SILVER</span>
            );
            break;
        case 'bronze':
            productLabel = (
                <span className="card-label bronze-label">BRONZE</span>
            );
            break;

        default:
            productLabel = '';
            break;
    }

    return (
        <div className={'product-card-container ' + currentClass}>
            <div className="product-image-container">
                {showRankingIndex ? (
                    <span className="product-rank-number-container">
                        {index}
                    </span>
                ) : null}

                {/* <img src={product.imgUrl} /> */}
            </div>
            <div className="product-details-container">
                <div className="first-row">
                    {productLabel}
                    <span className="product-id-container">{product.id}</span>
                </div>
                <div className="second-row">
                    <span className="product-name-container">
                        {product.name}
                    </span>
                </div>
                <div className="third-row">
                    <span className="product-cost-container">
                        <RupeeIconSVG /> {product.price}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default class ProductCard extends Component {
    render() {
        const { product, index, showRankingIndex, isSliderCard } = this.props;

        let currentClass = 'product-card';
        currentClass += isSliderCard ? ' slider-card' : '';

        return (
            <span>
                <ProductCardComponent
                    product={product}
                    currentClass={currentClass}
                    index={index}
                    showRankingIndex={showRankingIndex}
                />
            </span>
        );
    }
}
