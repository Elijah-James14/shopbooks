import { useEffect, useState } from "react";
import Filter from "../../components/layouts/Layouts/Filter";
import ProductCard from "./Components/ProductCard";
import { useLocation } from "react-router-dom";
import { useFilter } from "../../contexts/filterContext";
import { getProductList } from "../../services/ProductService";
import { toast } from "react-toastify";
const ProductPage = () => {
  const { productList, initialProductLists } = useFilter();
  const [filterOn, setFilter] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);

        initialProductLists(data);
      } catch (error) {
        toast.error(error.message);
      }
    }
    fetchProducts();
  }, [searchTerm]); //eslint-disable-line

  useEffect(() => {
    function changeTitle() {
      if (searchTerm) {
        document.title = `${searchTerm} in Products`;
      } else {
        document.title = "Products";
      }
    }
    changeTitle();
  }, [searchTerm]);
  return (
    <>
      <main className="content ">
        <div className="flex justify-between mt-4">
          <div className="text-2xl font-extrabold ml-4">{`All ebooks: ${productList.length}`}</div>
          <div
            onClick={() => setFilter(!filterOn)}
            className="bi bi-three-dots-vertical font-extrabold text-2xl mr-4 bg-slate-200 rounded-md p-1 cursor-pointer hover:bg-slate-400"
          ></div>
        </div>
        {filterOn ? <Filter setFilter={setFilter} filterOn={filterOn} /> : ""}
      </main>

      <section className="flex flex-wrap justify-center gap-5">
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </>
  );
};

export default ProductPage;
