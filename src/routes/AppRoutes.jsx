import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import ProductDetails from "../pages/productdetails/ProductDetails";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Confirmation from "../pages/confirmation/Confirmation";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/orderconfirm" element={<Confirmation />} />
    </Routes>
  );
};

export default AppRoutes;
