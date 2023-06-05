import { useEffect } from "react";
import { CartUse } from "../../contexts/CartContext";
import CartEmpty from "./Components/CartEmpty";
import CartList from "./Components/CartList";
import { title } from "../../Hooks/UseTitle";

const CartPage = () => {
  useEffect(() => {
    title("Cart");
  }, []);
  const { cartList } = CartUse();
  return <div>{cartList.length ? <CartList /> : <CartEmpty />}</div>;
};

export default CartPage;
