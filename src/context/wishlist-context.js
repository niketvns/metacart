import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const [isWishlist, setIsWishlist] = useState([]);

    const tostifyObj = {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "light",
    }

    const notifySuccess = (content) => toast.success(content, tostifyObj);

    const deleteItem = (id) => {
        setIsWishlist((oldId) => {
            return oldId.filter((curId) => {
                return curId != id;
            })
        })
        notifySuccess('removed from wishlist')
    }

    return (
        <wishlistContext.Provider value={{ isWishlist, setIsWishlist, deleteItem }}>
            {children}
        </wishlistContext.Provider>
    )
}

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };