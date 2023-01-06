import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';

const productContext = createContext();

const API_URL = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PRODUCTS}`;

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const getProduct = async () => {
        setIsLoading(true)
        try {
            let response = await axios.get(API_URL);
            setIsLoading(false)
            setProducts(response.data.products);
        } catch (err) {
            setError(err.message)
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <productContext.Provider value={{ products, isLoading, error }}>
            {children}
        </productContext.Provider>
    )
}

const useGlobalProduct = () => useContext(productContext);

export { ProductProvider, useGlobalProduct };

