import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalLogin } from './login-context'

const wishlistContext = createContext();

const WishlistProvider = ({ children }) => {

    const [isWishlist, setIsWishlist] = useState([]);

    const { notifyWarn, notifySuccess, loginToken } = useGlobalLogin();

    const navigate = useNavigate();

    const deleteItem = (id) => {
        setIsWishlist((oldId) => {
            return oldId.filter((curId) => {
                return curId != id;
            })
        })
        notifySuccess('removed from wishlist')
    }

    const addToWishlist = (id) => {
        if (loginToken) {
            if (isWishlist.includes(id)) {
                deleteItem(id);
            } else {
                setIsWishlist([id, ...isWishlist])
                notifySuccess('Item Added to Wishlist')
            }
        } else {
            navigate('/login')
            notifyWarn('Login to Add Wishlist')
        }
    }

    return (
        <wishlistContext.Provider value={{ isWishlist, setIsWishlist, deleteItem, addToWishlist }}>
            {children}
        </wishlistContext.Provider>
    )
}

const useGlobalWishlist = () => useContext(wishlistContext);

export { WishlistProvider, useGlobalWishlist };