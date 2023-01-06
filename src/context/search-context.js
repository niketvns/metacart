import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

const searchContext = createContext();

const API_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PRODUCTS}/search?q=`;

const SearchProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const [query, setQuery] = useState('');

    const getSearch = async () => {
        try {
            let response = await axios.get(`${API_URL}+${query}`);
            setIsLoading(false)
            if (response.data.products.length === 0) {
                console.log("Product Not Found");
            } else {
                setProducts(response.data.products);
            }
        } catch (err) {
            setError(err.message)
            console.log(error);
        }
    }

    useEffect(() => {
        getSearch();
    }, [query])

    return (
        <searchContext.Provider value={{ products, isLoading, error, setQuery }}>
            {children}
        </searchContext.Provider>
    )
}

const useGlobalSearch = () => useContext(searchContext);

export { SearchProvider, useGlobalSearch };