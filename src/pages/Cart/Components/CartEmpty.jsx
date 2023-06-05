import { Link } from "react-router-dom";
const CartEmpty = () => {
  return (
    <main className="text-center h-screen ">
      <div className="border max-w-4xl mx-auto max-h-96 p-5 my-10">
        <div className=" text-6xl text-green-500 mb-5 ">
          <i className="bi bi-cart"></i>
        </div>
        <p>Oops! Your Cart looks empty!</p>
        <p>Add eBooks to your cart from our store collection</p>
        <Link to="/products">
          <button className="mt-5 bg-blue-700 rounded-md p-3 text-white font-bold">
            Continue Shopping <i className="bi bi-cart"></i>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default CartEmpty;
