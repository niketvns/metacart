import React, { useEffect, useState } from 'react';
import { useGlobalCart } from '../../context/cart-context';
import './cartDetails.css';
import CartItem from './CartItem2';
import Button from '@mui/material/Button';
import PayPal from '../payment/PayPal';
import { useGlobalLogin } from '../../context/login-context';
import { useNavigate } from 'react-router-dom';


const CartDetails = () => {

    const [checkout, setCheckout] = useState(false)

    const { isCart, totalPrice } = useGlobalCart();
    const { loginToken, notifyWarn } = useGlobalLogin();

    const navigate = useNavigate();

    const proceedToPaymeny = () => {
        if (loginToken) {
            setCheckout(true);
        } else {
            notifyWarn('Login To Buy')
            navigate('/login')
        }
    }

    return (
        <div className='cart-items-main'>
            <div className="heading">
                <h2>Shopping Cart</h2>
                <p>You Have {isCart.length} Items in Shopping Cart</p>
            </div>
            <div className="items">
                <div className="item-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th></th>
                            </tr>
                        </thead>
                        {
                            isCart.map((val) => {
                                return <CartItem
                                    key={val.id}
                                    id={val.id}
                                    item={val}
                                />
                            })
                        }
                    </table>
                </div>
            </div>
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div className="subtotal">
                    <p>Subtotal</p>
                    <p>&#8377;{totalPrice}/-</p>
                </div>
                <div className="shipping">
                    <p>Shipping</p>
                    <p>&#8377;40/-</p>
                </div>
                <div className="tax">
                    <p>Tax</p>
                    <p>&#8377;0/-</p>
                </div><hr />
                <div className="total">
                    <h3>Total</h3>
                    <p>&#8377;{3389 + 40}/-</p>
                </div>
                <div className="proceed-to-payment">
                    {
                        checkout ?
                            <PayPal payingAmount={1} /> :
                            <Button variant="contained" onClick={proceedToPaymeny}>Proceed To Payment</Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CartDetails;