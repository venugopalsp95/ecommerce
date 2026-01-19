import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import "./confirmation.css";
import { Link } from "react-router-dom";

const Confirmation = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const { cart, clearCart } = useContext(CartContext);
  const total =
    cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0;

  return (
    <div className="order-confirm">
      <h1>Order Placed Successfully</h1>
      <div className="order-confirm-details">
        <div className="order-placer-details">
          <h2>Order details: </h2>
          <p>
            Name: <strong>{data.fullName}</strong>
          </p>
          <p>
            Email: <strong>{data.email}</strong>
          </p>
          <p>
            Phone Number: <strong>{data.phoneNumber}</strong>
          </p>
          <p>
            Address: <strong>{data.address}</strong>
          </p>
        </div>
        <div className="order-placed-items">
          <h2>Items ordered: </h2>
          <ol>
            {cart.map((item) => (
              <li>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p style={{ textAlign: "end" }}>
                  <strong>${item.price}</strong>
                </p>
                <p style={{ textAlign: "start" }}>x {item.quantity} </p>
              </li>
            ))}
          </ol>
          <p className="total-product-price">
            Total Price: ${total.toFixed(2)}
          </p>
        </div>
        <Link to={"/"}>
          <button onClick={() => clearCart()} style={{ marginTop: "1rem" }}>
            Back to Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
