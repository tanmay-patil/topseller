import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../ProductCard/ProductCard';
import './SliderList.scss';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LeftArrowSVG from '../../../icons/svg/LeftArrowSVG';
import RightArrowSVG from '../../../icons/svg/RightArrowSVG';

export default class SliderList extends Component {
    render() {
        const { products } = this.props;

        return (
            <div className="scrolling-wrapper-flexbox">
                {products.map((product, i) => (
                    <div className="slider-card">
                        <ProductCard index={i + 1} product={product} />
                    </div>
                ))}
            </div>
        );
    }
}
