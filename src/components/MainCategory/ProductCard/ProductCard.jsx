import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './ProductCard.scss';
import RupeeIconSVG from '../../../icons/svg/RupeeIconSVG';

export default class ProductCard extends Component {
    render() {
        const { product, index, shouldDisplayRanking } = this.props;

        let productLabel;
        switch (product.ranking) {
            case 'top':
                productLabel = (
                    <span className="product-label red-label">TOP</span>
                );
                break;
            case 'gold':
                productLabel = (
                    <span className="product-label gold-label">GOLD</span>
                );
                break;
            case 'silver':
                productLabel = (
                    <span className="product-label silver-label">SILVER</span>
                );
                break;
            case 'bronze':
                productLabel = (
                    <span className="product-label bronze-label">BRONZE</span>
                );
                break;

            default:
                productLabel = '';
                break;
        }

        return (
            <Paper className="product-card-container">
                <div className="product-image-container">
                    {shouldDisplayRanking ? (
                        <span className="product-rank-container">{index}</span>
                    ) : null}
                </div>
                <div className="product-details">
                    <div className="first-row">
                        {productLabel}
                        <span className="product-id">{product.id}</span>
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
            </Paper>
        );
    }
}
