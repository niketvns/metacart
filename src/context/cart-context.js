import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [isCart, setIsCart] = useState([]);


    const deleteItem = (id) => {
        setIsCart((oldItems) => {
            return oldItems.filter((curItem) => {
                return curItem.id != id;
            })
        })
    }


    return (
        <cartContext.Provider value={{ isCart, setIsCart, deleteItem }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };