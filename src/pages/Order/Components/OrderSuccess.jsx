import { Link } from "react-router-dom";
const OrderSuccess = ({ data }) => {
  return (
    <main className="h-screen w-full mt-10">
      <div className="max-w-2xl text-center mx-auto border p-3">
        <p className="text-green-500 text-6xl mb-4">
          <i class="bi bi-check-circle"></i>
        </p>
        <p className="mb-4">
          Thank you {data.user.name} for the order!{" "}
          <p>Your Order ID: {data.id}</p>
        </p>
        <p className="mb-4">
          Your order is confirmed
          <p>Please check your email ({data.user.email}) for the eBook</p>
        </p>
        <p>Payment ID: xyz_123456789</p>
        <Link to="/products">
          <button className="bg-blue-700 rounded p-3 text-white mt-4 font-bold">
            Continue Shopping
          </button>
        </Link>
      </div>
    </main>
  );
};

export default OrderSuccess;
