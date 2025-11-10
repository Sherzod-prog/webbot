import { useState } from "react";
import { CardItems } from "../components/cardItems";
import { getData } from "../constants/db";

import "../App.css";
import Modal from "../components/modal/modal";

const products = getData();
const categories = Array.from(new Set(products.map((p) => p.category.id)))
  .sort((a, b) => a - b)
  .map((id) => products.find((p) => p.category.id === id)!.category.name);

function Card() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<{
    id: number;
    name: string;
  } | null>(null);

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
        {filteredProducts.map((p) => (
          <CardItems
            key={p.id}
            {...({
              onClick: () => {
                const prod = getData().find((prod) => prod.id === p.id);
                setSelectedCard(prod ? { id: prod.id, name: prod.name } : null);
              },
              image: p.imageUrl,
              title: p.name,
              price: p.items[0].price,
            } as any)}
          />
        ))}
      </div>

      <Modal
        isOpen={selectedCard !== null}
        onClose={() => setSelectedCard(null)}
        children={
          selectedCard ? (
            <CardItems
              image={
                products.find((p) => p.id === selectedCard.id)?.imageUrl || ""
              }
              title={selectedCard.name}
              price={
                products.find((p) => p.id === selectedCard.id)?.items[0]
                  .price || 0
              }
            />
          ) : null
        }
      />
    </>
  );
}

export default Card;
