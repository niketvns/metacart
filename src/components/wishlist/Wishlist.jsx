import React, { useEffect } from 'react';
import './Wishlist.css';
import wishlist from '../../images/wishlist.svg';
import { useGlobalLogin } from '../../context/login-context';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import WishlistDetails from './WishlistDetails';
import { useGlobalWishlist } from '../../context/wishlist-context';

export default function Wishlist() {

    const { loginToken } = useGlobalLogin();

    const { isWishlist } = useGlobalWishlist();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        loginToken ?
            <>
                {
                    isWishlist.length !== 0 ?
                        <WishlistDetails /> :
                        <div className='wishlist-main'>
                            <div className="empty-wishlist">
                                <img src={wishlist} alt="empty-wishlist" />
                                <p>Nothing in the Wishlist</p>
                            </div>
                        </div>
                }
            </> :
            <div className='wishlist-login-main'>
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
