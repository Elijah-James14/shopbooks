import CartCard from "./CartCard";
import { CartUse } from "../../../contexts/CartContext";
import { useState } from "react";
import CartCheckout from "./CartCheckout";

const CartList = () => {
  const { cartList, total } = CartUse();
  const [cart, setCart] = useState(false);

  return (
    <>
      <section className="max-w-3xl mx-auto">
        <h1 className="text-center font-bold text-3xl underline underline-offset-8">
          My Cart (1)
        </h1>
        <div>
          {cartList.map((product) => (
            <CartCard product={product} />
          ))}
        </div>
        <div className="flex justify-between mt-10 mb-5 border-b-2">
          <p className="font-bold">Total Amount:</p>
          <p className="font-bold">${Number(total)}</p>
        </div>
        <div className="text-right mr-5">
          <button
            onClick={() => setCart(true)}
            className="bg-blue-700 text-white p-3 rounded font-bold justify-end"
          >
            Place Order <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </section>
      {cart ? <CartCheckout /> : ""}
    </>
  );
};

export default CartList;
