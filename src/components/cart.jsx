import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

const Cart = () => {

  let cart = useContext(StoreContext).cart;

  return (
    <div className="cart">
      <h1>Here are your wonderful products!</h1>

      <h2>You have a total of  {cart.length} products in your cart.</h2>

      <ul className="list">
          {cart.map(prod => <li key={prod._id}>{prod.title} - ${prod.price}</li>)}
      </ul>

      <h3>Are you ready to place your order?</h3>
    </div>
  );
};

export default Cart;
