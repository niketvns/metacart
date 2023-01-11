import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './cartDetails.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useGlobalCart } from '../../context/cart-context';
import { useNavigate } from 'react-router-dom';

const CartItem = (props) => {

    const [cartItemDetail, setCartItemDetail] = useState();

    const { deleteItem, IncrementQnt, DecrementQnt } = useGlobalCart()

    const navigate = useNavigate();

    let API_URL = `https://dummyjson.com/products/${props.id}`

    const getCartItem = async () => {
        let res = await axios.get(API_URL)
        setCartItemDetail(res.data);
    }

    useEffect(() => {
        getCartItem();
    }, [])

    return (
        cartItemDetail
        &&
        <div className="item">
            <div className="img" onClick={() => navigate(`/product/${cartItemDetail.id}`)}>
                <img src={cartItemDetail.thumbnail} alt="" />
            </div>
            <div className="title" onClick={() => navigate(`/product/${cartItemDetail.id}`)}>
                <h3>{cartItemDetail.title}</h3>
                {
                    cartItemDetail.stock >= 0 ?
                        <div className="in-stock">In Stock</div> :
                        <div className="out-stock">Out Of Stock</div>
                }
            </div>
            <div className="qnt-btn">
                <IconButton aria-label="delete" size="large" onClick={() => DecrementQnt(props.item.id)}>
                    <RemoveIcon />
                </IconButton>
                <input type="text" value={props.item.qnt} disabled />
                <IconButton aria-label="delete" size="large" onClick={() => IncrementQnt(props.item.id)}>
                    <AddIcon />
                </IconButton>
            </div>
            <div className="price">
                &#8377;{(cartItemDetail.price * 40 * props.item.qnt).toFixed(0)}/-
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