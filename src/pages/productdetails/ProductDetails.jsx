import { useContext, useEffect, useState } from "react";
import "./productdetails.css";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductContext";

const ProductDetails = () => {
  const { addToCart } = useContext(CartContext);
  const { products, loading } = useContext(ProductsContext);

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  return (
    <>
      <Link to={"/"}>
        {" "}
        <button style={{ marginTop: "1rem" }}> back</button>
      </Link>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="product-detail-container">
          <div className="product-details">
            <div className="product-image">
              <img src={product.image} alt="" />
            </div>
            <div className="product-detail">
              <p className="name">{product.name}</p>
              <p className="category">{product.category}</p>

              <p className="decription">{product.description}</p>
              <p className="price">$ {product.price}</p>
              <button
                style={{ width: "100%" }}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <Link to={"/cart"}>
                {" "}
                <button style={{ width: "100%" }}> Go to cart</button>
              </Link>
            </div>
          </div>
          <div className="review-content">
            <p>
              <strong>Reviews</strong>
            </p>
            {product.reviews?.map((review, index) => (
              <div className="review" key={index}>
                <p>
                  <strong>Name:</strong> {review.reviewerName}
                </p>
                <p>
                  <strong>Comment:</strong> {review.comment}
                </p>
                <p>
                  <strong>Date:</strong> {review.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
