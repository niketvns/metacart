import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [isCart, setIsCart] = useState([]);

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
        setIsCart((oldItems) => {
            return oldItems.filter((curItem) => {
                return curItem.id != id;
            })
        })
        notifySuccess('Removed From Cart')
    }

    const IncrementQnt = (itemId) => {
        setIsCart((oldItems) => {
            return oldItems.map((curItem) => {
                if (curItem.id === itemId) {
                    return {
                        id: itemId,
                        qnt: curItem.qnt + 1
                    }
                }
                return curItem;
            })
        })
    }

    const DecrementQnt = (itemId) => {
        setIsCart((oldItems) => {
            return oldItems.map((curItem) => {
                if (curItem.id === itemId) {
                    if (curItem.qnt === 1) {
                        // Do Nothing 
                    } else {
                        return {
                            id: itemId,
                            qnt: curItem.qnt - 1
                        }
                    }
                }
                return curItem;
            })
        })
    }


    return (
        <cartContext.Provider value={{ isCart, setIsCart, deleteItem, IncrementQnt, DecrementQnt }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };