import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cartDetails.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useGlobalCart } from '../../context/cart-context';

const CartItem = (props) => {

    const [cartItemDetail, setCartItemDetail] = useState();

    const { deleteItem } = useGlobalCart()

    let API_URL = `https://dummyjson.com/products/${props.id}`

    const getCartItem = async () => {
        let res = await axios.get(API_URL)
        setCartItemDetail(res.data)
        // console.log(res.data);
    }

    useEffect(() => {
        getCartItem();
    }, [])

    return (
        cartItemDetail
        &&
        <div className="item">
            <div className="img">
                <img src={cartItemDetail.thumbnail} alt="" />
            </div>
            <div className="title">
                <h3>{cartItemDetail.title.slice(0, 14)}...</h3>
                <div className="in-stock">In Stock</div>
            </div>
            <div className="qnt-btn">
                <IconButton aria-label="delete" size="large">
                    <RemoveIcon />
                </IconButton>
                <input type="text" value={props.item.qnt} disabled />
                <IconButton aria-label="delete" size="large">
                    <AddIcon />
                </IconButton>
            </div>
            <div className="price">
                Rs. {(cartItemDetail.price * 40).toFixed(0)}/-
            </div>
            <div className="delete" onClick={() => deleteItem(cartItemDetail.id)}>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}

export default CartItem;