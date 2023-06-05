import OrderSuccess from "./Components/OrderSuccess";
import OrderFail from "./Components/OrderFail";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { title } from "../../Hooks/UseTitle";
const OrderPage = () => {
  useEffect(() => {
    title("My Orders");
  }, []);
  const { state } = useLocation();
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};

export default OrderPage;
