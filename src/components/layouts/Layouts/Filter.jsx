import React from "react";
import { useFilter } from "../../../contexts/filterContext";

const Filter = ({ filterOn, setFilter }) => {
  const { state, dispatch } = useFilter();
  return (
    <section className="filter">
      <div className="content w-72  h-screen fixed z-40 overflow-y-auto left-0 top-0 bg-white dark:bg-gray-800 transition-transhtmlForm">
        <div className="flex justify-between border-b-2">
          <div className="text-xl text-slate-400 my-3">FILTERS</div>
          <div
            onClick={() => setFilter(!filterOn)}
            className="bi bi-x-lg text-xl text-slate-400 cursor-pointer my-3"
          ></div>
        </div>

        <div>
          <h1 className="font-bold my-3 dark:text-white">Sort by</h1>

          <div className="flex items-center mb-4">
            <input
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: { sortBy: "lowtohigh" } })
              }
              checked={state.sortBy === "lowtohigh" || false}
              id="price-sort-1"
              type="radio"
              value=""
              name="price-sort"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="price-sort-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price - Low to High
            </label>
          </div>
          <div className="flex items-center">
            <input
              onChange={() =>
                dispatch({ type: "SORT_BY", payload: { sortBy: "hightolow" } })
              }
              checked={state.sortBy === "hightolow" || false}
              id="price-sort-2"
              type="radio"
              value=""
              name="price-sort"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="price-sort-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Price - High to Low
            </label>
          </div>
        </div>
        <div>
          <h1 className="font-bold my-3 dark:text-white">Rating</h1>

          <div className="flex items-center mb-4">
            <input
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "4STARSABOVE" },
                })
              }
              checked={state.ratings === "4STARSABOVE" || false}
              id="rating-sort-1"
              type="radio"
              value=""
              name="rating-sort"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="rating-sort-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              4 Stars & Above
            </label>
          </div>
          <div className="flex items-center">
            <input
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "3STARSABOVE" },
                })
              }
              checked={state.ratings === "3STARSABOVE" || false}
              id="rating-sort-2"
              type="radio"
              value=""
              name="rating-sort"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="rating-sort-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              3 Stars & Above
            </label>
          </div>

          <div className="flex items-center mt-3">
            <input
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "2STARSABOVE" },
                })
              }
              checked={state.ratings === "2STARSABOVE" || false}
              id="rating-sort-3"
              type="radio"
              value=""
              name="rating-sort"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="rating-sort-3"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              2 Stars & Above
            </label>
          </div>

          <div className="flex items-center mt-3">
            <input
              onChange={() =>
                dispatch({
                  type: "RATINGS",
                  payload: { ratings: "1STARSABOVE" },
                })
              }
              checked={state.ratings === "1STARSABOVE" || false}
              id="rating-sort-4"
              type="radio"
              value=""
              name="rating-sort"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="rating-sort-4"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              1 Stars & Above
            </label>
          </div>
        </div>
        <div>
          <h1 className="font-bold my-3 dark:text-white">Other Filters</h1>

          <div className="flex items-center mb-4">
            <input
              onChange={() =>
                dispatch({
                  type: "BEST_SELLER_ONLY",
                  payload: { bestSellerOnly: !state.bestSellerOnly },
                })
              }
              checked={state.bestSellerOnly || false}
              id="best-seller"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="best-seller"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Best Seller Only
            </label>
          </div>
          <div className="flex items-center">
            <input
              onChange={() =>
                dispatch({
                  type: "ONLY_IN_STOCK",
                  payload: { onlyInStock: !state.onlyInStock },
                })
              }
              checked={state.onlyInStock || false}
              id="only-instock"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="only-instock"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              INSTOCK Only
            </label>
          </div>
        </div>

        <button
          onClick={() => dispatch({ type: "CLEAR_FILTER" })}
          className="bg-white text-black rounded-lg border mt-5 ml-3 p-2"
        >
          Clear Filter
        </button>
      </div>
    </section>
  );
};

export default Filter;
