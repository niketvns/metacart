import React from 'react';
import './error.css';
import errorImg from '../../images/error404.svg'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

export default function Error() {
    return (
        <div className='error'>
            <img src={errorImg} alt="" />
            <p>Page Not Found</p>
            <NavLink className='home-icon' to='/'>
                <Button variant="contained" style={{ backgroundColor: '#232f3e' }}><HomeIcon />Home</Button >
            </NavLink>
        </div>
    )
}
