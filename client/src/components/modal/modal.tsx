import { useParams } from "react-router";

const Modal = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div>Modal</div>
      <div>Product ID: {id}</div>
    </>
  );
};

export default Modal;
