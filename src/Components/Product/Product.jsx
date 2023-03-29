import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { img, name, price, quantity, seller, ratings } = props.product;
    const handleAddToCaert = props.handleAddToCaert;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <p>Price: ${price}</p>
        <p>Manufacture:{seller}</p>
        <p>Rating: {ratings} Star</p>
      </div>
      <button onClick={()=>handleAddToCaert(props.product)} className="btn-card">Add to Cart</button>
    </div>
  );
};

export default Product;
