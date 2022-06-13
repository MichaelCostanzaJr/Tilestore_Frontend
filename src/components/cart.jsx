import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {
  
  let cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0;
    for(let i=0; i < cart.length; i++){
      let prod = cart[i];
      total += prod.price * prod.quantity;
    }

    return total.toFixed(2);
  };

  const getNumItems = () => {
    let total = 0;
    for(let i=0; i < cart.length; i++){
      total += cart[i].quantity;
    }

    return total;

  };

  return (
    <div className="cart">
      <h1>Here are your wonderful products!</h1>

      <h2>You have a total of  {getNumItems()} products in your cart.</h2>
    <div className="cart-header">
      <h4>Product</h4>
      <h4>Product</h4>
      <h4>Product</h4>
      <h4>Product</h4>
      </div>  
      
    <div className="parent">

      <div className="products">
        {cart.map((prod) => (
          <ProductInCart key={prod._id} data={prod}></ProductInCart>
        ))}
      </div>

      <div className="total-panel">
          <h2>Your total:</h2>
          <h3>${getTotal()}</h3>
          <h2>Add Coupon?</h2>
          

      </div>
     </div> 
    </div>
  );
};

export default Cart;
