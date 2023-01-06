import React from 'react';
import { useGlobalCart } from '../../context/cart-context';
import { useGlobalWishlist } from '../../context/wishlist-context';
// import './wishlistDetails.css';
import WishlistItem from './WishlistItem';


const WishlistDetails = () => {

    const { isWishlist, setIsWishlist } = useGlobalWishlist();

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Your Wishlist</h2>
                <p>You Have {isWishlist.length} Items in Wishlist</p>
            </div>
            <div className="items">
                {
                    isWishlist.map((val) => {
                        return <WishlistItem
                            key={val}
                            id={val}
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