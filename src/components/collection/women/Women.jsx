import React from 'react';
import ProductDetails from '../../productDetails/ProductDetails';
import './Women.css';

export default function Women() {
    return (
        <>
            <div className="women">
                <h2>Dresses</h2>
                <ProductDetails
                    category={'womens-dresses'}
                />
                <h2>Watches</h2>
                <ProductDetails
                    category={'womens-watches'}
                />
                <h2>Bags</h2>
                <ProductDetails
                    category={'womens-bags'}
                />
                <h2>Jewellery</h2>
                <ProductDetails
                    category={'womens-jewellery'}
                />
                <h2>Shoes</h2>
                <ProductDetails
                    category={'womens-shoes'}
                />
            </div>
        </>
    )
}
