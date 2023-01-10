import React, { useEffect } from 'react';
import { useState } from 'react';
import './AllProducts.css';
import spinner from '../../images/Spinner.svg';
import ProductCard from '../productCard/ProductCard';
import axios from 'axios';
import { useGlobalProduct } from '../../context/products-context';
import { NavLink } from 'react-router-dom';

export default function AllProducts() {

    const { products, isLoading } = useGlobalProduct();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        !isLoading ?
            <div className='all-products'>
                {
                    products.map((val) => {
                        return (
                            <ProductCard
                                key={val.id}
                                id={val.id}
                                title={val.title}
                                price={val.price}
                                description={val.description}
                                category={val.category}
                                image={val.thumbnail}
                                rating={val.rating}
                            />
                        )

                    })
                }
            </div> :
            <div className='apiLoading'>
                <img src={spinner} alt="" />
                <p>Loading...</p>
            </div>
    )
}

