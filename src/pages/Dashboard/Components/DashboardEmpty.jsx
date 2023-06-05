import { Link } from "react-router-dom";

const DashboardEmpty = () => {
  return (
    <main className=" mt-10 h-screen border">
      <div className="max-w-2xl text-center mx-auto  p-3">
        <p className="text-green-700 text-6xl mb-4">
          <i class="bi bi-cart"></i>
        </p>
        <p className="">Your Order Dashboard looks empty!</p>
        <p className="mb-4">
          Add eBooks to your cart from our store collection.
        </p>
        <Link to="/products">
          <button className="bg-blue-700 rounded p-3 text-white mt-4 font-bold">
            Continue Shopping <i class="bi bi-cart"></i>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default DashboardEmpty;
