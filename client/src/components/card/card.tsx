import "./card.css";

interface CardProps {
  image: string;
  title: string;
  price: number;
}
export const Card: React.FC<CardProps> = ({ image, title, price }) => {
  return (
    <div className="card">
      <div className="card-badge">1</div>
      <div className="card-container">
        <img
          className="card-img"
          height={200}
          width={200}
          src={image}
          alt={title}
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-price">
          {price.toLocaleString("ru-RU", {
            style: "currency",
            currency: "RUB",
          })}
        </div>
      </div>
    </div>
  );
};
