import React, { useEffect } from 'react';
import './Cart.css';
import emptyCart from '../../images/empty_cart.svg';
import { useGlobalLogin } from '../../context/login-context';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useGlobalCart } from '../../context/cart-context';
import CartDetails from './CartDetails';

export default function Cart() {

    const { loginToken } = useGlobalLogin();

    const { isCart } = useGlobalCart();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        loginToken ?
            <>
                {
                    isCart ?
                        <CartDetails /> :
                        <div className='cart-main'>
                            <div className="empty-cart">
                                <img src={emptyCart} alt="empty-cart" />
                                <p>Cart is Empty</p>
                            </div>
                        </div>
                }
            </> :
            <div className='cart-main'>
                <div className='login-btn'>
                    <NavLink to='/login'>
                        <Button type='submit' variant="contained">
                            Login to View Cart
                        </Button>
                    </NavLink>
                </div>
            </div>
    )
}
