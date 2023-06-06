import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useParams } from "react-router-dom";
import Rating from "../../components/layouts/Elements/Rating";
import { CartUse } from "../../contexts/CartContext";
import { title } from "../../Hooks/UseTitle";

import { getProduct } from "../../services/ProductService";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { addToCart, cartList, removeFromCart } = CartUse();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    const isInCart = cartList.find((item) => item.id === product.id);

    if (isInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProductDetails();
  }, [id]);

  useEffect(() => {
    title(`${product.name}`);
  }, [product.name]);
  return (
    <main>
      <h1 className="text-center text-4xl font-extrabold mb-2">
        {product.name}
      </h1>
      <p className="text-center text-xl mb-3">{product.overview}</p>
      <div className="flex">
        <div className="w-1/2">
          <img className="mx-auto" src={product.poster} alt={product.name} />
        </div>
        <div className="w-1/2 mr-3">
          <h2 className="text-3xl font-bold">${product.price}</h2>
          <span>{<Rating rating={product.rating} />}</span>
          <div className="flex mt-3">
            <div>
              {product.best_seller ? (
                <span className="bg-gray-300 p-2 text-orange-700 rounded mr-1 font-bold">
                  BEST SELLER
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              {product.in_stock ? (
                <span className="bg-gray-300 p-2 text-orange-700 rounded mr-1 font-bold">
                  IN STOCK
                </span>
              ) : (
                ""
              )}
            </div>
            <div>
              <span className="bg-gray-300 p-2 text-orange-700 rounded mr-1 font-bold">
                {product.price}
              </span>
            </div>
          </div>

          {inCart ? (
            <button
              disabled={`${product.in_stock ? "" : "disabled"}`}
              onClick={() => removeFromCart(product)}
              className={`bg-red-700 p-2 font-semibold text-white rounded mt-4 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
            >
              Remove From Cart
            </button>
          ) : (
            <button
              disabled={`${product.in_stock ? "" : "disabled"}`}
              onClick={() => addToCart(product)}
              className={`bg-blue-700 p-2 font-semibold text-white rounded mt-4 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
            >
              Add To Cart
            </button>
          )}

          <p>{product.long_description}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
