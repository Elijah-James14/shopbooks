import { Link } from "react-router-dom";
import Rating from "../../../components/layouts/Elements/Rating";
import { CartUse } from "../../../contexts/CartContext";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, cartList } = CartUse();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const isInCart = cartList.find((item) => item.id === product.id);

    if (isInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  function handleAdd(product) {
    addToCart(product);
  }
  const { poster, name, rating, overview, price, id, in_Stock } = product;
  return (
    <section className="content mb-6">
      <div className="max-w-sm h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative">
          <img className="rounded-t-lg h-64 w-full" src={poster} alt="" />
          {product.best_seller ? (
            <span className="bg-orange-500 text-white rounded p-1 absolute top-1 left-1 font-semibold">
              Best Seller
            </span>
          ) : (
            ""
          )}
        </Link>
        <div className="p-5">
          <Link to={`/products/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-16">
              {name}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-40">
            {overview}
          </p>
          <div className="mb-3">{<Rating rating={rating} />}</div>

          <div className="flex justify-between">
            <div className="text-2xl font-semibold dark:text-white">
              ${price}
            </div>
            <div>
              {inCart ? (
                <button
                  disabled={`${product.in_stock ? "" : "disabled"}`}
                  onClick={() => removeFromCart(product)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  disabled={`${product.in_stock ? "" : "disabled"}`}
                  onClick={() => handleAdd(product)}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 
                  ${product.in_stock ? "" : "cursor-not-allowed"}`}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
