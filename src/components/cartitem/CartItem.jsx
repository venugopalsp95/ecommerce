import "./cartitem.css";
const CartItem = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
}) => {
  return (
    <div className="cart-item">
      <img className="cart-image" src={item.image} alt="" />
      <p className="cart-item-name">{item.name}</p>
      <p className="cart-item-price">$ {item.price}</p>
      <div className="cart-buttons">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <p className="cart-item-quantity">{item.quantity}</p>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button
          className="remove-button"
          onClick={() => removeItemFromCart(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
