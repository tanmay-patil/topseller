import React, { Component } from 'react';
import './PlainCardList.scss';
import ProductCard from '../../../ProductCard/ProductCard';
import MediaQuery from 'react-responsive';

const DUMMY_CARD_LIST = [
    {
        id: 'T12345',
        ranking: 'top',
        imgUrl: 'https://picsum.photos/400/400/?image=11',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'gold',
        imgUrl: 'https://picsum.photos/400/400/?image=22',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'silver',
        imgUrl: 'https://picsum.photos/400/400/?image=33',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'bronze',
        imgUrl: 'https://picsum.photos/400/400/?image=44',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'top',
        imgUrl: 'https://picsum.photos/400/400/?image=55',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'gold',
        imgUrl: 'https://picsum.photos/400/400/?image=66',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'silver',
        imgUrl: 'https://picsum.photos/400/400/?image=77',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: 'bronze',
        imgUrl: 'https://picsum.photos/400/400/?image=88',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    },
    {
        id: 'T12345',
        ranking: '',
        imgUrl: 'https://picsum.photos/400/400/?image=99',
        name: 'Sample Product Name First 1 - Sample',
        price: '1230'
    }
];

export default class PlainCardList extends Component {
    render() {
        const { showRankingIndex } = this.props;

        return (
            <div className="plain-card-list-container">
                {DUMMY_CARD_LIST.map((product, index) => {
                    return (
                        <ProductCard
                            showRankingIndex={showRankingIndex}
                            index={index + 1}
                            product={product}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}
