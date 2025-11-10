import "./carditems.css";

interface CardProps {
  image: string;
  title: string;
  price: number;
  onClick?: () => void;
}

export const CardItems: React.FC<CardProps> = ({
  image,
  title,
  price,
  onClick,
}) => {
  return (
    <div
      className="card"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (!onClick) return;
        if (e.key === "Enter" || e.key === " ") onClick();
      }}
    >
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
