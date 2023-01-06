import React from 'react';
import { useGlobalLogin } from '../../context/login-context';
import './Account.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Account = () => {

    const { userDetail, loginToken } = useGlobalLogin();
    console.log(userDetail);

    return (
        <>
            {
                loginToken ?
                    <div className="my-account-detail">
                        <div className="img">
                            <img src={userDetail.image} alt="profile" />
                        </div>
                        <div className="details">
                            <p>Name: <b>{userDetail.firstName} {userDetail.lastName}</b></p>
                            <p>Username: <b>{userDetail.username}</b></p>
                            <p>Gender: <b>{userDetail.gender}</b></p>
                            <p>Email: <b>{userDetail.email}</b></p>
                        </div>
                    </div> :
                    <div className="my-account-detail">
                        <NavLink to='/login'>
                            <Button type='submit' variant="contained">
                                Login to View
                            </Button>
                        </NavLink>
                    </div>
            }

        </>
    )
}

export default Account;