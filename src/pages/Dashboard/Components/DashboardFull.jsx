import DashboardCard from "./DashboardCard";

const DashboardFull = ({ order }) => {
  return (
    <>
      <section className="border mb-5">
        <div className="flex justify-between font-semibold mt-5 ">
          <p className="ml-3">Order Id: {order.id}</p>
          <p className="mr-3">Total: {order.amount_paid}</p>
        </div>
        <div>
          {order.products.map((product) => (
            <DashboardCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default DashboardFull;
