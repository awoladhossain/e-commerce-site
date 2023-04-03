import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const  [cart, setCart] = useState([]);


  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


   useEffect(()=>{
      const storeCart =  getShoppingCart();
      const saveCart =[];

      // step 1:get id of the addProduct 
       for(const id in storeCart)
       {
        //step: 2 get prodcut from products state by using id
        const addedProduct = products.find(product => product.id === id); 
        if(addedProduct){
          // step 3: add quantity
          const quantity = storeCart[id];
          addedProduct.quantity = quantity;
          // step 4: add product to saveCart
          saveCart.push(addedProduct);
        }
        // console.log("addedProdcut",addedProduct);
       }
      //  step 5: setCart
       setCart(saveCart)
   },[products])


  const handleAddToCaert =(product)=>
  {
    // console.log(product);
    // const newCart = [...cart, product];
    let newCart = [];

    // if product doesn't exist in the cart , then set quantity 1
    // if product exist in the cart, then increase the quantity
    const exists = cart.find(pd => pd.id === product.id);
    if(!exists){
      product.quantity = 1;
      newCart =[...cart,product];
    }
    else
    {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(pd => pd.id !== product.id);
      newCart =[...remaining,exists];
    }

    setCart(newCart);
    addToDb(product.id)
  }

  // https://makeshift-ice.surge.sh/



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
