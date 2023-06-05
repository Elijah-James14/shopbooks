import { useEffect, useState } from "react";
import { CartUse } from "../../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { getUser, createOrder } from "../../../services/DataService";
import { toast } from "react-toastify";

const CartCheckout = () => {
  const { total, cartList, clearProducts } = CartUse();
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchUserData();
  }, []);

  async function handleOrderSubmit(event) {
    event.preventDefault();

    try {
      const data = await createOrder(cartList, total, user);
      clearProducts();
      navigate("/order-summary", { state: { status: true, data: data } });
    } catch (error) {
      navigate("/order-summary", { state: { status: false } });
    }
  }
  return (
    <main className="w-full fixed top-0 left-0 h-full bg-black bg-opacity-50">
      <form
        onSubmit={handleOrderSubmit}
        className="max-w-xl mx-auto bg-white mt-7 h-full rounded"
      >
        <div className="relative z-0 mb-6 group ">
          <input
            value={user.name || ""}
            disabled
            type="name"
            name="floating_name"
            id="floating_name"
            className="block mt-6 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required=""
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 mb-6 group">
          <input
            disabled
            value={user.email || ""}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required=""
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            disabled
            value="2345678518"
            type="text"
            name="card_number"
            id="card_number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="card_number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Card Number
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            disabled
            value="1234"
            type="text"
            name="security_code"
            id="security_code"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="security_code"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Security Code:
          </label>
        </div>

        <div className="text-center font-bold text-green-600 text-2xl">
          ${total}
        </div>
        <div className="text-center mt-7">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default CartCheckout;
