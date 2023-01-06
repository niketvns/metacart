import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './context/products-context';
import { SearchProvider } from './context/search-context';
import { LoginProvider } from './context/login-context';
import { CartProvider } from './context/cart-context';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <LoginProvider>
      <CartProvider>
        <ProductProvider>
          <SearchProvider>
            <Router>
              <App />
            </Router>
          </SearchProvider>
        </ProductProvider>
      </CartProvider>
    </LoginProvider>
  </>
);
