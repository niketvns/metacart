import React from 'react';
import { useGlobalCart } from '../../context/cart-context';
import './cartDetails.css';
import CartItem from './CartItem';


const CartDetails = () => {

    const { isCart } = useGlobalCart();

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Shopping Cart</h2>
                <p>You Have {isCart.length} Items in Shopping Cart</p>
            </div>
            <div className="items">
                {
                    isCart.map((val) => {
                        return <CartItem
                            key={val.id}
                            id={val.id}
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

export default CartDetails;

// {
//     isCart.map(({ id, qnt }) => {
//         return (
//             <>
//                 <h1>{id}</h1>
//                 <h1>{qnt}</h1>
//             </>
//         )
//     })
// }