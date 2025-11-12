import "./carditems.css";
import { useState } from "react";

interface CardProps {
  image: string;
  title: string;
  price: number;
  quantity?: number;
  onClick?: () => void;
}

export const CardItems: React.FC<CardProps> = ({
  image,
  title,
  price,
  quantity = 0,
}) => {
  const [qty, setQty] = useState(quantity);
  return (
    <div className="card">
      <div className="card-badge">1</div>
      <div className="card-container">
        <img className="card-img" width={150} src={image} alt={title} />
      </div>
      <div className="card-body">
        <span className="card-title">{title}</span>
        <div className="card-price">
          {price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
          <div>
            <button disabled={qty === 15} onClick={() => setQty(qty + 1)}>
              +
            </button>
            {qty}
            <button disabled={qty === 0} onClick={() => setQty(qty - 1)}>
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
