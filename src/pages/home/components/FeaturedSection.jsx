import { useEffect } from "react";
import ProductCard from "../../products/Components/ProductCard";
import { useState } from "react";
import { getFeaturedList } from "../../../services/ProductService";
import { toast } from "react-toastify";

const FeaturedSection = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const data = await getFeaturedList();

        setProducts(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    getProducts();
  }, []);
  return (
    <section className="content ">
      <h1 className="mt-5 text-center dark:text-white text-4xl font-bold underline text-black">
        Featured eBooks
      </h1>
      <div className="flex flex-wrap gap-5 ml-10 mt-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
