import { scale } from "motion";
import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
const ProductPlan = ({ product }) => {
  const { name, sales, category, id } = product;

  return (
    <Link
      to={`product/${id}`}
      className="bg-white shadow-lg rounded-3xl p-6 hover:shadow-xl transition duration-300 flex flex-col space-y-9 active:scale-95"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>

      <div className="flex-1">
        <p className="text-gray-600">
          Sales: <span className="font-bold">{sales}</span>
        </p>
      </div>
      <motion.p
        className={`text-sm font-semibold text-gray-500 uppercase  py-2 text-center rounded-md cursor-pointer ${category === "subscription" ? "text-green-600 bg-green-200" : "text-yellow-600 bg-yellow-200"}`}
      >
        {category}
      </motion.p>
    </Link>
  );
};

export default ProductPlan;
