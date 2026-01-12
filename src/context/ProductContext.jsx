import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
  products: [],
  loading: true,
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=150"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        const data = () => {
          const normalized = result.products.map((p) => ({
            id: p.id,
            name: p.title,
            price: p.price,
            image: p.thumbnail,
            description: p.description,
            category: p.category,
            reviews: p.reviews,
          }));
          return normalized;
        };
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};
