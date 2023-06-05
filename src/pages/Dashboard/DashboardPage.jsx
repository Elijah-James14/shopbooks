import { useEffect, useState } from "react";
import DashboardEmpty from "./Components/DashboardEmpty";
import DashboardFull from "./Components/DashboardFull";
import { getUserOrders } from "../../services/DataService";
import { title } from "../../Hooks/UseTitle";
import { toast } from "react-toastify";

const DashboardPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    title("Dashboard");
  }, []);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchOrder();
  }, []);
  return (
    <>
      <section className="w-1/2 mx-auto h-full">
        <h1 className="text-center font-bold underline underline-offset-8 text-2xl">
          My Dashboard
        </h1>

        <div className=" mt-10">
          {orders.length ? (
            orders.map((order) => <DashboardFull order={order} />)
          ) : (
            <DashboardEmpty />
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
