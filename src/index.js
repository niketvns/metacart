import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/products-context';
import { SearchProvider } from './context/search-context';
import { LoginProvider } from './context/login-context';
import { CartProvider } from './context/cart-context';
import { WishlistProvider } from './context/wishlist-context';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Router>
      <LoginProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <SearchProvider>
                <App />
              </SearchProvider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </LoginProvider>
    </Router>
  </>
);
