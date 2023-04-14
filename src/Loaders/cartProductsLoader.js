import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async ()=>
{                                                           
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    // if cart data is in database then  you have to use async await 
    const storedCart = getShoppingCart();
    const saveCart =[];

    for(const id in storedCart) {
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct)
        {
            const quantity  = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);
        }
    }

    // if you want to return some thing from the js 
    // return [product, saveCart];
    // another option is to return
    // return {product, cart: saveCart}
    
    return saveCart;
}

export default cartProductsLoader;