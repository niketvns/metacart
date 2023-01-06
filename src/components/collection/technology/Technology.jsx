import React from 'react';
import ProductDetails from '../../productDetails/ProductDetails';

export default function Technology() {
    return (
        <div className="women">
            <h2>Smartphones</h2>
            <ProductDetails
                category={'smartphones'}
            />
            <h2>Laptops</h2>
            <ProductDetails
                category={'laptops'}
            />
            <h2>Automotive</h2>
            <ProductDetails
                category={'automotive'}
            />
            <h2>Lighting</h2>
            <ProductDetails
                category={'lighting'}
            />
            <h2>Motorcycle</h2>
            <ProductDetails
                category={'motorcycle'}
            />
        </div>
    )
}
