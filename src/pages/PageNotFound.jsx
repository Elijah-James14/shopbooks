import React, { useEffect } from "react";
import NotFound from "../Assets/notFound.png";
import { Link } from "react-router-dom";
import { title } from "../Hooks/UseTitle";

const PageNotFound = () => {
  useEffect(() => {
    title("Page Not Found");
  }, []);
  return (
    <section className="text-center h-screen">
      <h1 className="mb-10 font-extrabold text-6xl mt-10 text-slate-500">
        404, Oops!
      </h1>
      <div className="flex justify-center">
        <img className="w-1/3 h-1/3" src={NotFound} alt="Page Not Found" />
      </div>
      <Link to="/">
        <button className="mt-10 bg-red-600 text-white font-bold p-5 rounded">
          Back To Home
        </button>
      </Link>
    </section>
  );
};

export default PageNotFound;
