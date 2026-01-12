import "./cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";

import CartItem from "../../components/cartitem/CartItem";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useContext(CartContext);

  const total =
    cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0;

  return (
    <>
      <Link to={"/"}>
        {" "}
        <button style={{ marginTop: "1rem" }}>back to home</button>{" "}
      </Link>
      <div className="cart">
        <div className="cartitem">
          <h1>Cart</h1>
          {cart.length === 0 && <p>Your cart is empty</p>}
          {cart?.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItemFromCart={removeItemFromCart}
            />
          ))}
        </div>
        <div className="checkout">
          <p className="total-price">Total Price: ${total.toFixed(2)}</p>
          <div className="">
            <Link to={"/checkout"}>
              <button className="checkout-button">checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
