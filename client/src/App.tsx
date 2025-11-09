import { useState } from "react";
import { Card } from "./components/card/card";
import { getData } from "./constants/db";

import "./App.css";
import { Link } from "react-router";

const products = getData();
const categories = Array.from(new Set(products.map((p) => p.category.id)))
  .sort((a, b) => a - b)
  .map((id) => products.find((p) => p.category.id === id)!.category.name);

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category.name === selectedCategory)
    : products;

  return (
    <>
      <h1>Pizza</h1>
      <p>Welcome to the Pizza App!</p>
      <div className="category-filters">
        <button
          className={selectedCategory === null ? "active" : ""}
          onClick={() => setSelectedCategory(null)}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="card_container">
        {filteredProducts.map((p, i) => (
          <Link key={i} to={`/product/${p.id}`}>
            <Card image={p.imageUrl} title={p.name} price={p.items[0].price} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default App;
