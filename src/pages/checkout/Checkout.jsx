import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./checkout.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  localStorage.setItem("data", JSON.stringify(formData));
  const { cart } = useContext(CartContext);
  return (
    <>
      <div className="checkout-item">
        <div className="checkout-details">
          <form>
            <div className="detail">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Fullname"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="detail">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="detail">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="Number"
                name="phoneNumber"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="detail">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="cart-details">
          <p className="review-item">Review your items</p>
          {cart.map((item) => (
            <div className="cart-detail-item" key={item.id}>
              <img src={item.image} alt="" />
              <p className="cart-item-name">{item.name}</p>
              <p className="cart-item-quantity">x {item.quantity}</p>
              <p className="cart-item-price">$: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="place-order-button">
        <Link to={"/orderconfirm"}>
          <button className="place-order">Place Order</button>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
