import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const [isWishlist, setIsWishlist] = useState([]);

    const deleteItem = (id) => {
        setIsWishlist((oldId) => {
            return oldId.filter((curId) => {
                return curId != id;
            })
        })
    }

    return (
        <wishlistContext.Provider value={{ isWishlist, setIsWishlist, deleteItem }}>
            {children}
        </wishlistContext.Provider>
    )
}

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };