import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import Product from '../components/product/Products';
// import ProductDetails from '../components/product/ProductDetails';
// import Cart from '../components/cart/Cart';
// import Checkout from '../components/checkout/Checkout';
// import AboutUs from '../components/AboutUs';
import LogIn from '../components/auth/LogIn';
// import SignUp from '../components/auth/SignUp';


const Navigation = () => {


    return (
        <>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/login'} element={<LogIn />} />
                {/* <Route exact path={'/product'} element={<Product />} />
                <Route exact path={'/productdetails/:productId"'} element={<ProductDetails />} />
                <Route exact path={'/cart'} element={<Cart />} />
                <Route exact path={'/checkout'} element={<Checkout />} />
                <Route exact path={'/about'} element={<AboutUs />} />
                <Route exact path={'/login'} element={<LogIn />} />
                <Route exact path={'/signUp'} element={<SignUp />} /> */}

            </Routes>
        </>
    );
};

export default Navigation;