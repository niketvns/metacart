import React from 'react';
import ProductDetails from '../../productDetails/ProductDetails';

export default function Beauty() {
    return (
        <div className="women">
            <h2>Skincare</h2>
            <ProductDetails
                category={'skincare'}
            />
            <h2>Fragrances</h2>
            <ProductDetails
                category={'fragrances'}
            />
        </div>
    )
}
