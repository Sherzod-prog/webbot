import { useParams } from "react-router";
import { getData } from "../constants/db";

const CardDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = getData().filter((p) => p.id === Number(id))[0];
  return (
    <>
      <div>{product.name}</div>
      <img src={product.imageUrl} alt={product.name} height={400} width={400} />
      <div>
        {product.items.map((p) => (
          <div>
            <div>{p.size} см</div>
            <div>
              {p.price.toLocaleString("ru-RU", {
                style: "currency",
                currency: "RUB",
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardDetail;
