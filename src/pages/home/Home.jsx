import { useContext, useState } from "react";
import "./home.css";
import categoryList from "../../data/categoryList";
import ProductCard from "../../components/productcard/ProductCard";
import { ProductsContext } from "../../context/ProductContext";

const Home = () => {
  const { products, loading } = useContext(ProductsContext);
  const [searchItem, setSearchItem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  console.log(searchItem);
  console.log(selectedCategory);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchItem.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  console.log(filteredProducts);

  return (
    <div className="home-page">
      <div className="search-category">
        <div className="category">
          <label htmlFor="category">Category</label>
          <select
            className="category-select"
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categoryList.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input
          type="text"
          placeholder="search..."
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
        />
      </div>
      {loading ? (
        <p style={{ textAlign: "center", fontSize: "2rem" }}>loading....</p>
      ) : (
        <div className="product-item-list">
          {filteredProducts.length === 0 ? (
            <p style={{ textAlign: "center", fontSize: "2rem" }}>
              No such products found
            </p>
          ) : (
            ""
          )}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
