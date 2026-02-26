import React from "react";
import { Link } from "react-router";

const ProductPlan = ({ product }) => {
  const { name, price, sales, category, id } = product;
  console.log(product);
  return (
    <Link
      to={`product/${id}`}
      className="bg-white shadow-lg rounded-3xl p-6 hover:shadow-xl transition duration-300 flex flex-col"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>

      <div className="flex-1">
        <p className="text-gray-600 mb-2">
          Price: <span className="font-bold">${price}</span>
        </p>
        <p className="text-gray-600">
          Sales: <span className="font-bold">{sales}</span>
        </p>
      </div>
      <p
        className={`text-sm font-semibold text-gray-500 uppercase  py-2 text-center rounded-md cursor-pointer ${category === "subscription" ? "text-green-600 bg-green-200" : "text-yellow-600 bg-yellow-200"}`}
      >
        {category}
      </p>
    </Link>
  );
};

export default ProductPlan;
