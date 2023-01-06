import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [isCart, setIsCart] = useState([{
        id: 1,
        qnt: 2
    },
    {
        id: 2,
        qnt: 1
    }]);



    return (
        <cartContext.Provider value={{ isCart, setIsCart }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };