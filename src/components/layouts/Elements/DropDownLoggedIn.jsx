import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../../../services/DataService";

const DropDownLoggedIn = ({ setDropDown }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  function handleLogOut() {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("sbid");
    navigate("/");
  }
  useEffect(() => {
    async function getUserEmail() {
      const data = await getUser();
      setUser(data);
    }
    getUserEmail();
  }, []);
  return (
    <>
      <div
        id="dropdownInformation"
        className="z-10 absolute right-4 top-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div className="font-medium truncate">{user.email}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownInformationButton"
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
              to="/dashboard"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </Link>
          </li>
        </ul>
        <div className="py-2" onClick={handleLogOut}>
          <Link
            onClick={() => setDropDown(false)}
            to="/"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Log out
          </Link>
        </div>
      </div>
    </>
  );
};

export default DropDownLoggedIn;
