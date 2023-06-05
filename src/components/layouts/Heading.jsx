import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg.svg";
import { useEffect, useState } from "react";
import Search from "./Layouts/Search";
import DroppedDownLoggedOut from "./Elements/DroppedDownLoggedOut";
import DropDownLoggedIn from "./Elements/DropDownLoggedIn";
import { CartUse } from "../../contexts/CartContext";

const Heading = () => {
  const { cartList } = CartUse();
  const [darkMode, setDarkMode] = useState(false);
  const [searchMode, setSearchMode] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-8 mr-1" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ShopBooks
            </span>
          </Link>
          <div className="flex items-center">
            <span
              onClick={() => setDarkMode(!darkMode)}
              className="bi bi-gear-wide-connected mr-5 cursor-pointer text-2xl dark:text-white"
            ></span>
            <span
              onClick={() => setSearchMode(!searchMode)}
              className="bi bi-search mr-5 cursor-pointer text-2xl dark:text-white"
            ></span>
            <Link to="/cart">
              <span className="bi bi-cart mr-5 cursor-pointer relative text-2xl dark:text-white">
                <span className="absolute bg-rose-500 rounded-full text-white text-sm -top-1 left-2.5 px-1">
                  {cartList.length}
                </span>
              </span>
            </Link>

            <span
              onClick={() => setDropDown(!dropDown)}
              className="bi relative bi-person-circle cursor-pointer text-2xl dark:text-white"
            ></span>
          </div>
        </div>
      </nav>

      {dropDown &&
        (token ? (
          <DropDownLoggedIn setDropDown={setDropDown} />
        ) : (
          <DroppedDownLoggedOut setDropDown={setDropDown} />
        ))}

      {searchMode ? <Search setSearchMode={setSearchMode} /> : ""}
    </header>
  );
};

export default Heading;
