import React from 'react';
import { useGlobalLogin } from '../../context/login-context';
import './Account.css';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import AccountDetails from './AccountDetails';

const Account = () => {

    const { userDetail, loginToken } = useGlobalLogin();

    return (
        <>
            {
                loginToken ?
                    <AccountDetails
                        userDetail={userDetail}
                    /> :
                    <div className="my-account-login">
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