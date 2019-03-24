import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './ProductCard.scss';
import RupeeIconSVG from '../../../icons/svg/RupeeIconSVG';
import { PRODUCT_RANKING_LABEL } from '../../../services/types';

export default class ProductCard extends Component {
    render() {
        const { product, index, shouldDisplayRanking } = this.props;

        let productLabel;
        switch (product.ranking) {
            case PRODUCT_RANKING_LABEL.TOP:
                productLabel = (
                    <span className="product-label red-label">TOP</span>
                );
                break;
            case PRODUCT_RANKING_LABEL.GOLD:
                productLabel = (
                    <span className="product-label gold-label">GOLD</span>
                );
                break;
            case PRODUCT_RANKING_LABEL.SILVER:
                productLabel = (
                    <span className="product-label silver-label">SILVER</span>
                );
                break;
            case PRODUCT_RANKING_LABEL.BRONZE:
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
                    <img src={product.imgUrl} alt="" />
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
