import React, { useEffect, useState } from 'react';
import './sign-in.css';
import Button from '@mui/material/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useGlobalLogin } from '../../../context/login-context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {

    const { loginToken, logoutAction, input, setInput, dummyUserData, loginAction } = useGlobalLogin();

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        if (loginToken) {
            navigate(-1)
        }
    }, [loginToken]);

    const setUserId = (event) => {
        setInput({ userId: event.target.value })
    }

    const setPassword = (event) => {
        setInput({ password: event.target.value })
    }

    return (
        <>
            <div className="sign-in">
                {
                    !loginToken ?
                        <div className="signin-card">
                            <h2>Login</h2>
                            <div className="form">
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                    onSubmit={loginAction}
                                >
                                    <TextField
                                        required
                                        id="outlined-basic"
                                        label="username"
                                        variant="outlined"
                                        value={input.userId}
                                        onChange={setUserId}
                                    />
                                    <TextField
                                        type='password'
                                        required
                                        id="outlined-basic-2"
                                        label="password"
                                        variant="outlined"
                                        value={input.password}
                                        onChange={setPassword}
                                    />
                                    <Button type='submit' variant="contained">
                                        Submit
                                    </Button>
                                    <Button onClick={dummyUserData} variant="contained">
                                        Login as Dummy User
                                    </Button>
                                </Box>
                            </div>
                            <p><NavLink to="/recover-password">forget password</NavLink></p>
                            <p>Not Register ? <NavLink to="/signup">Sign Up</NavLink></p>
                        </div> :
                        <div className="loggedin-card">
                            <h2>Logged In</h2>
                            <Button variant="contained" onClick={logoutAction}>
                                Log Out
                            </Button>
                        </div>
                }
            </div>
            <ToastContainer />
        </>
    )
}



{/* <form action="" onSubmit={formSubmit}>
                        <div className="username">
                            <Person2Icon className='user-icon' />
                            <input type="text" name="username" id="" placeholder='UserID' required value={input.userId} />
                        </div>
                        <div className="password">
                            <LockOpenIcon className='lock-icon' />
                            <input type="password" name="password" id="" placeholder='Password' required value={input.password} />
                        </div>
                        <button type="submit">
                            <Button variant="contained" style={{ backgroundColor: '#232f3e' }}>Continue</Button>
                        </button>
                    </form> */}

{/* <div className="other-accounts">
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
                    </div> */}