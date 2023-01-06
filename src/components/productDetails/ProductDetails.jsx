import React, { useEffect } from 'react';
import { useState } from 'react';
import '../allProducts/AllProducts.css';
import spinner from '../../images/Spinner.svg'
import ProductCard from '../productCard/ProductCard';
import axios from 'axios';

export default function ProductDetails(props) {

    const [categoryProducts, setCategoryProducts] = useState();

    let apiLink = 'https://dummyjson.com/products/category/' + props.category + '?limit=4';

    const getFunction = async () => {
        let response = await axios.get(apiLink);
        setCategoryProducts(response.data.products);
    }

    useEffect(() => {
        getFunction()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        categoryProducts ?
            <div className='all-products'>
                {
                    categoryProducts.map((val) => {
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