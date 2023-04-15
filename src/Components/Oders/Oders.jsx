import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItems/ReviewItem';
import './Oders.css'
import { removeFromDb } from '../../utilities/fakedb';

const Oders = () => {
            
    const saveCart = useLoaderData();
    const [cart,serCart] = useState(saveCart); 

    const handleRemove = (id)=>{
       const remaining = cart.filter(product => product.id !== id)
       serCart(remaining);
       removeFromDb(id)
    }
    // This code snippet defines a function called handleRemove that takes an id parameter and logs it to the console when called.
    // The function is passed to the ReviewItem component as a prop called handleRemove.
    // The ReviewItem component calls the function when the button is clicked.
    // The ReviewItem component passes the id of the product to the function when it is called.
    // The function logs the id to the console.
    // console.log(cart);
    
    // console.log(saveCart);

    return (
        <div className='shop-container'>
            <div className='review-container'>
                 {
                    cart.map(product => <ReviewItem

                        key={product.id}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                 }                       
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Oders;