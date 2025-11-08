import "./card.css";

interface CardProps {
  title: string;
  content: string;
}
export const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
};
