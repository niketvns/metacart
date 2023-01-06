import React, { useEffect } from 'react';
import './Wishlist.css';
import wishlist from '../../images/wishlist.svg';
import { useGlobalLogin } from '../../context/login-context';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { useGlobalCart } from '../../context/cart-context';
import WishlistDetails from './WishlistDetails';

export default function Wishlist() {

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
                        <WishlistDetails /> :
                        <div className='wishlist-main'>
                            <div className="empty-wishlist">
                                <img src={wishlist} alt="empty-wishlist" />
                                <p>Nothing in the Wishlist</p>
                            </div>
                        </div>
                }
            </> :
            <div className='wishlist-main'>
                <div className='login-btn'>
                    <NavLink to='/login'>
                        <Button type='submit' variant="contained">
                            Login to View Wishlist
                        </Button>
                    </NavLink>
                </div>
            </div>
    )
}
