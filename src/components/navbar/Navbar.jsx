import "./navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import carticondark from "../../assets/cartDark.png";
import carticonlight from "../../assets/cartLight.png";
const Navbar = ({ darkMode, setDarkMode }) => {
  const { cart } = useContext(CartContext);

  const count = cart?.reduce((sum, item) => sum + item.quantity, 0) ?? 0;
  return (
    <nav>
      <p className="logo">SHOPPING</p>
      <div className="option">
        <p className="theme" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "light" : "dark"}
        </p>
        <Link to={"/cart"} className="cart-logo">
          <div className="carticon">
            <img src={darkMode ? carticondark : carticonlight} alt="" />
            <span style={{ color: "#db4444" }}>{count}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
