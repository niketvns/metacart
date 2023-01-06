import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import { useGlobalSearch } from '../../context/search-context';
import './search.css';

const Search = () => {

    const { id } = useParams();

    const { products, setQuery } = useGlobalSearch();

    setQuery(id);

    console.log(products);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <h3 className='search-result-for'>Search Result for: {id}</h3>
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
            </div>
        </>
    )
}

export default Search