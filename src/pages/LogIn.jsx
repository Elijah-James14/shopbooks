import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/AuthService";
import { useEffect } from "react";
import { title } from "../Hooks/UseTitle";

const LogIn = () => {
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const details = {
        email: event.target.email.value,
        password: event.target.password.value,
      };
      const data = await login(details);
      data.accessToken
        ? toast.success("You're logged in") && navigate("/products")
        : toast.error(data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    title("LogIn");
  }, []);

  async function handleLoginAsGuest() {
    try {
      const details = {
        email: process.env.REACT_APP_GUEST_LOGIN,
        password: process.env.REACT_APP_GUEST_PASSWORD,
      };
      const data = await login(details);
      data.accessToken
        ? toast.success("You're logged in") && navigate("/products")
        : toast.error(data);
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <>
      <h1 className="text-center mt-3 mb-3 font-bold text-3xl underline underline-offset-8">
        Log In
      </h1>
      <form onSubmit={handleLogin} className="ml-3 mt-3">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Log In
        </button>
      </form>
      <button
        onClick={handleLoginAsGuest}
        className="mt-5 ml-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Log In As Guest
      </button>
    </>
  );
};

export default LogIn;
