import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Oders = () => {
            
    const cart = useLoaderData();
    console.log(cart);

    return (
        <div className='shop-container'>
            <div className='product-container'>
            <h1>this is oder page: {cart.length}</h1>
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Oders;