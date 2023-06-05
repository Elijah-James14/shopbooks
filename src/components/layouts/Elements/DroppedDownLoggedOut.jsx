import { Link } from "react-router-dom";

const DroppedDownLoggedOut = ({ setDropDown }) => {
  return (
    <>
      <div
        id="dropdown"
        className="z-10 absolute right-4 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/products"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              All eBooks
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/login"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setDropDown(false)}
              to="/register"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DroppedDownLoggedOut;
