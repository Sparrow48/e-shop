import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Product from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import Cart from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';


const CommonRoute = () => {
    return (
        <div>
            <Routes>
                <Route exact path={'/'} element={<Home />} />
                <Route exact path={'/about'} element={<AboutUs />} />
                <Route exact path={'/products'} element={<Product />} />
                <Route exact path={'/productDetails/:_id'} element={<ProductDetails />} />
                <Route exact path={'/cart'} element={<Cart />} />
                <Route exact path={'/checkout'} element={<Checkout />} />
            </Routes>
        </div>
    )
}

export default CommonRoute