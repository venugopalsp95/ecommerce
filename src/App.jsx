import { useState } from "react";

import "./styles/index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter basename="/ecommerce">
      <ProductsProvider>
        <CartProvider>
          <div className={` body ${darkMode ? "dark" : "light"}`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <AppRoutes />
          </div>
        </CartProvider>
      </ProductsProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

export default App;
