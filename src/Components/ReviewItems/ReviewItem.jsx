import React from 'react';
import './ReviewItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const ReviewItem = ({product,handleRemove}) => {
    const {id, img, price, name, quantity}= product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-tittle'>{name}</p>
                <p>Price: <span className='org-texxt'>${price}</span></p>
                <p>Oder Quantity: <span className='org-texxt'>${quantity}</span></p>
            </div>
            <button onClick={()=>handleRemove(id)} className='btn-delete'>

                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}/>
             </button>
             
             {/* Then, this handleRemove function is passed as a prop to a button component with a class name of 'btn-delete'. The button also has an onClick event listener that calls the handleRemove function with the id parameter when clicked.
                When the button is clicked, the handleRemove function is called with the id of the product as a parameter.
                The handleRemove function is defined in the Oders component.
                The Oders component passes the handleRemove function to the ReviewItem component as a prop.
                The ReviewItem component calls the handleRemove function when the button is clicked.  
             */}
        </div>
    );
};

export default ReviewItem;