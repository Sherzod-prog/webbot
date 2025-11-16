import { CardItems } from "../components/cardItems";
import { getData } from "../constants/db";

import "../App.css";
import { useEffect, useState } from "react";

const products = getData().sort((a, b) => a.categoryId - b.categoryId);

function Card({ onCheckout }) {
  const [prodQuantity, setProdQuantity] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    setProdQuantity(newQuantity);
  };

  useEffect(() => {
    console.log("Product quantity changed:", prodQuantity);
  }, [prodQuantity]);
  return (
    <>
      <h1>Pizza</h1>
      <p>Welcome to the Pizza App!</p>
      <div>
        Umumiy narx: <button className="cart">Buyurtma berish</button>
      </div>
      <div className="card_container">
        {products.map((p) => (
          <CardItems
            key={p.id}
            image={p.imageUrl}
            title={p.name}
            price={p.items[0].price}
            quantity={prodQuantity}
            onClick={() => handleQuantityChange(prodQuantity)}
          />
        ))}
      </div>
    </>
  );
}

export default Card;
