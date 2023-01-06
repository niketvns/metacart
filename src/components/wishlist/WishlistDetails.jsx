import React from 'react';
import { useGlobalCart } from '../../context/cart-context';
import './wishlistDetails.css';
import WishlistItem from './WishlistItem';


const WishlistDetails = () => {

    const { isCart } = useGlobalCart();

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Your Wishlist</h2>
                <p>You Have {isCart.length} Items in Wishlist</p>
            </div>
            <div className="items">
                {
                    isCart.map((val) => {
                        return <WishlistItem
                            key={val.id}
                            item={val}
                        />
                    })
                }
            </div>
            <div className="subtotal">

            </div>
        </div>
    )
}

export default WishlistDetails;