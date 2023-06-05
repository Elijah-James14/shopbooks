import { Link } from "react-router-dom";

const DashboardCard = ({ product }) => {
  return (
    <>
      <div className="flex w-2/3 ml-5 mt-10 mb-10 ">
        <Link to={`/products/${product.id}`}>
          <img
            className="rounded w-24 h-24"
            src={product.poster}
            alt={product.name}
          />
        </Link>
        <span className="ml-2 font-semibold">
          <Link to={`/products/${product.id}`}>
            <p>{product.name}</p>
          </Link>
          <p className="mt-3">${product.price}</p>
        </span>
      </div>
    </>
  );
};

export default DashboardCard;
