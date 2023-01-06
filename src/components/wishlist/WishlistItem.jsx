import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// import './wishlistDetails.css';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useGlobalWishlist } from '../../context/wishlist-context';

const WishlistItem = (props) => {

    const [wishlistItemDetail, setWishlistItemDetail] = useState();

    const { deleteItem } = useGlobalWishlist();

    let API_URL = `https://dummyjson.com/products/${props.id}`;

    const getWishlistItem = async () => {
        let res = await axios.get(API_URL)
        setWishlistItemDetail(res.data)
        console.log(res.data);
    }

    useEffect(() => {
        getWishlistItem();
    }, [])


    return (
        wishlistItemDetail
        &&
        <div className="item">
            <div className="img-title">
                <div className="img">
                    <img src={wishlistItemDetail.thumbnail} alt="" />
                </div>
                <div className="title">
                    <h3>{wishlistItemDetail.title}...</h3>
                    <div className="in-stock">In Stock</div>
                </div>
            </div>
            <div className="price">
                Rs. {(wishlistItemDetail.price * 40).toFixed(0)}/-
            </div>
            <div className="delete" onClick={() => deleteItem(wishlistItemDetail.id)}>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}

export default WishlistItem;