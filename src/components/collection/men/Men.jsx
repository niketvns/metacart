import React from 'react';
import ProductDetails from '../../productDetails/ProductDetails';

export default function Men() {
    return (
        <div className="women">
            <h2>Dresses</h2>
            <ProductDetails
                category={'mens-shirts'}
            />
            <h2>Watches</h2>
            <ProductDetails
                category={'mens-watches'}
            />
            <h2>Shoes</h2>
            <ProductDetails
                category={'mens-shoes'}
            />
        </div>
    )
}
