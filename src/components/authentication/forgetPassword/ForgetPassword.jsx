import React, { useEffect } from 'react';
import './ForgetPassword.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Person2Icon from '@mui/icons-material/Person2';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function ForgetPassword() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className="forget-password">
                <div className="forgetPassword-card">
                    <span className='close-icon'>
                        <CloseIcon />
                    </span>
                    <h2>Recover Password</h2>
                    <form action="">
                        <div className="email">
                            <EmailIcon className='email-icon' />
                            <input type="text" name="email" id="" placeholder='Email' required />
                        </div>
                        <button type="submit">
                            <Button variant="contained">Submit</Button>
                        </button>
                    </form>
                    <p>Not Register ? <NavLink to="/signup">Sign Up</NavLink></p>
                    <p>Back to <NavLink to='/login'>Login</NavLink></p>
                </div>
            </div>
        </>
    )
}
