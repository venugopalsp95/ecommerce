import { useState } from "react";

import "./styles/index.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductContext";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <BrowserRouter>
      <ProductsProvider>
        <CartProvider>
          <div className={` body ${darkMode ? "dark" : "light"}`}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <AppRoutes />
          </div>
        </CartProvider>
      </ProductsProvider>
    </BrowserRouter>
  );
}

export default App;
