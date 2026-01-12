import { Link } from "react-router-dom";
import "./productcard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="img">
        <img src={product.image} alt="" />
      </div>
      <div className="product-card-details">
        <p className="product-title">{product.name}</p>
        <p className="product-description">{product.description}</p>
        <div className="product-price">
          <p className="product-price-amount">$ {product.price}</p>
          <Link to={`/product/${product.id}`} className="view-details">
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
