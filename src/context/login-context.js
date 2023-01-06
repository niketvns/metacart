import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const loginContext = createContext();

const LoginProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);
    const [loginToken, setLoginToken] = useState('');
    const [userDetail, setUserDetail] = useState([]);
    const [input, setInput] = useState({
        userId: '',
        password: ''
    });

    const tostifyObj = {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
        theme: "light",
    }

    const notifyInfo = (content) => toast.info(content, tostifyObj);

    const notifyWarn = (content) => toast.warn(content, tostifyObj);

    const notifySuccess = (content) => toast.success(content, tostifyObj);
    const notifyError = (content) => toast.error(content, tostifyObj);

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("metacartUserToken"));
        if (token) {
            setIsLogin(true);
            setLoginToken(token);
            singleUserData();
        }
    }, [loginToken]);

    const userLogin = async () => {
        try {
            let res = await fetch(`${process.env.REACT_APP_BASE_URL}auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: input.userId,
                    password: input.password
                })
            });
            let data = await res.json();
            localStorage.setItem("metacartUserToken", JSON.stringify(data.token));
            setLoginToken(data.token);
            notifySuccess('Login Successfully');
            localStorage.setItem("metacartUserId", JSON.stringify(data.id));
        } catch (err) {
            notifyError("err:) " + err)
        }
    };

    const singleUserData = async () => {
        try {
            let userRes = await fetch(`${process.env.REACT_APP_BASE_URL}users/15`);
            let data = await userRes.json();
            setUserDetail(data);
        } catch (err) {
            console.log(err);
        }
    }

    const loginAction = (event) => {
        event.preventDefault();

        if (input.userId && input.password) {
            userLogin();
            setInput(
                {
                    userId: '',
                    password: ''
                })
        } else {
            notifyWarn('Enter Login Details');
        }
    };

    const dummyUserData = () => {
        setInput(
            {
                userId: 'kminchelle',
                password: '0lelplR'
            })
    }

    const logoutAction = () => {
        localStorage.removeItem("metacartUserToken");
        localStorage.removeItem("metacartUserId");
        setLoginToken('');
        notifyInfo('Logout Successfully');
    }

    return (
        <loginContext.Provider value={{ isLogin, setIsLogin, loginToken, setLoginToken, loginAction, logoutAction, notifyWarn, notifySuccess, notifyInfo, input, setInput, dummyUserData, userDetail }}>
            {children}
        </loginContext.Provider>
    )
}

const useGlobalLogin = () => useContext(loginContext);

export { LoginProvider, useGlobalLogin };