import React, { useEffect } from 'react';
import './sign-up.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Person2Icon from '@mui/icons-material/Person2';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

export default function Signup() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className="sign-up">
                <div className="signup-card">
                    <span className='close-icon'>
                        <CloseIcon />
                    </span>
                    <h2>SignUp</h2>
                    <form action="">
                        <div className="full-name">
                            <AccountCircleIcon className='user-icon' />
                            <input type="text" name="fullname" id="" placeholder='Full Name' required />
                        </div>
                        <div className="email">
                            <EmailIcon className='user-icon' />
                            <input type="email" name="email" id="" placeholder='Email' required />
                        </div>
                        <div className="username">
                            <Person2Icon className='user-icon' />
                            <input type="text" name="username" id="" placeholder='UserID' required />
                        </div>
                        <div className="password">
                            <LockOpenIcon className='lock-icon' />
                            <input type="password" name="password" id="" placeholder='Password' required />
                        </div>
                        <button type="submit">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>Register</Button>
                        </button>
                    </form>
                    <p>Already Registered ? <NavLink to="/login">Login</NavLink></p>
                    <div className="other-accounts">
                        <div className="google">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>
                                <GoogleIcon /> Login With Google
                            </Button>
                        </div>
                        <div className="facebook">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>
                                <FacebookIcon /> Login With Facebook
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
