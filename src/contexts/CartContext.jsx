import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/CartReducer";

const initialItems = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialItems);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialItems);

  function addToCart(product) {
    const updatedProducts = state.cartList.concat(product);
    const updated_total = state.total + product.price;

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProducts,
        total: updated_total,
      },
    });
  }

  function removeFromCart(product) {
    const updatedProducts = state.cartList.filter(
      (item) => item.id !== product.id
    );
    const updated_total = state.total - product.prcie;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedProducts,
        total: updated_total,
      },
    });
  }

  function clearProducts() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
    clearProducts,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const CartUse = () => {
  const context = useContext(CartContext);
  return context;
};
