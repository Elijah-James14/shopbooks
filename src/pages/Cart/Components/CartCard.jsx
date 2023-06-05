import { Link } from "react-router-dom";
import { CartUse } from "../../../contexts/CartContext";
const CartCard = ({ product }) => {
  const { removeFromCart } = CartUse();
  function handleRemove(product) {
    removeFromCart(product);
  }
  return (
    <main className="flex justify-between max-w-3xl mx-auto border-b-2 mt-5">
      <div className="flex">
        <img className="w-20 rounded h-20" src={product.poster} alt="Book" />
        <span className="ml-3">
          <Link to={`/products/${product.id}`}>
            <p>{product.name}</p>
          </Link>

          <p
            className="text-red-400 cursor-pointer"
            onClick={() => handleRemove(product)}
          >
            Remove
          </p>
        </span>
      </div>
      <div>${product.price}</div>
    </main>
  );
};

export default CartCard;
