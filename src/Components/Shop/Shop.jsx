import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const  [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCaert =(product)=>
  {
    // console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => {

          return <Product 
          key={product.id} 
          product={product} 
          handleAddToCaert={handleAddToCaert}
          />;

        })}
      </div>
      <div className="cart-container">
        {/* <h4>Order Summary</h4>
        <p>Selected Item: {cart.length}</p> */}
        <Cart  cart={cart}/>
      </div>
    </div>
  );
};

export default Shop;
