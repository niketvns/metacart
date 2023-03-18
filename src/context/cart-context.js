import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGlobalLogin } from './login-context';

const cartContext = createContext();

const CartProvider = ({ children }) => {

    const [isCart, setIsCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();

    const { notifyWarn, notifySuccess, loginToken } = useGlobalLogin();

    const setCartLocalStorage = () => {
        localStorage.setItem('userCartData', JSON.stringify(isCart));
    }

    const calculateTotalPrice = (price) => {
        setTotalPrice(totalPrice + price);
    }


    const checkObjInArray = (arr, id) => {
        let flag = false;
        arr.map((val) => {
            if (val.id === id) {
                flag = true;
            }
        })
        return flag;
    }


    const deleteItem = (id) => {
        setIsCart((oldItems) => {
            return oldItems.filter((curItem) => {
                return curItem.id != id;
            })
        })
        notifySuccess('Removed From Cart');
        setCartLocalStorage();
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
        setCartLocalStorage();
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
        setCartLocalStorage();
    }

    const addToCart = (id) => {
        if (loginToken) {
            let itemFlag = 0;
            isCart.map((curObj) => {
                if (curObj.id === id) {
                    itemFlag = 1;
                    IncrementQnt(id)
                }
            })
            if (itemFlag === 0) {
                setIsCart([
                    {
                        id: id,
                        qnt: 1
                    },
                    ...isCart
                ])
            }
            notifySuccess('Item Added to Cart');
            setCartLocalStorage();
        } else {
            navigate('/login')
            notifyWarn('Login to Add Item')
        }
    }

    return (
        <cartContext.Provider value={{ isCart, setIsCart, deleteItem, IncrementQnt, DecrementQnt, setCartLocalStorage, checkObjInArray, addToCart, totalPrice, calculateTotalPrice }}>
            {children}
        </cartContext.Provider>
    )
}

const useGlobalCart = () => useContext(cartContext);

export { CartProvider, useGlobalCart };