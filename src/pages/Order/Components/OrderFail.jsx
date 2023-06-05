import { Link } from "react-router-dom";
const OrderFail = () => {
  return (
    <main className="h-screen w-full mt-10">
      <div className="max-w-2xl text-center mx-auto border p-3">
        <p className="text-red-700 text-6xl mb-4">
          <i class="bi bi-exclamation-circle"></i>{" "}
        </p>
        <p className="mb-4">Payment failed, please try again!</p>
        <p className="mb-4">
          Your order is not confirmed
          <p>Contact shopbooks@example.com for support</p>
        </p>
        <Link to="/cart">
          <button className="bg-blue-700 rounded p-3 text-white mt-4 font-bold">
            Check Cart Again <i class="bi bi-cart"></i>
          </button>
        </Link>
      </div>
    </main>
  );
};

export default OrderFail;
