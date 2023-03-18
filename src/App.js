import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import Signin from './components/authentication/login/Singin';
import Signup from './components/authentication/signup/Signup';
import AllProducts from './components/allProducts/AllProducts';
import Cart from './components/cart/Cart';
import Wishlist from './components/wishlist/Wishlist';
import Women from './components/collection/women/Women';
import Kid from './components/collection/kid/Kid';
import Men from './components/collection/men/Men';
import Technology from './components/collection/technology/Technology'
import Beauty from './components/collection/beautyandHealth/Beauty';
import ForgetPassword from './components/authentication/forgetPassword/ForgetPassword';
import Error from './components/error/Error';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Search from './pages/search/Search';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Account from './pages/account-detail/Account';
import Success from './pages/success/Success';
import CustomerSupport from './pages/customer-support/CustomerSupport';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/recover-password' element={<ForgetPassword />} />
        <Route path='/shop' element={<AllProducts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/kid' element={<Kid />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/tech' element={<Technology />} />
        <Route path='/beauty' element={<Beauty />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/search/:id' element={<Search />} />
        <Route path='/my-account' element={<Account />} />
        <Route path='/success' element={<Success />} />
        <Route path='/customer-support' element={<CustomerSupport />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
