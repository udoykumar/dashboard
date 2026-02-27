import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseUrl } from "../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}/api/products/${id}`);
      setProduct(response.data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <div className="bg-primary h-screen p-5 mt-3 rounded-2xl r">
        <div className="bg-white p-10  flex flex-col justify-center items-center md:justify-start md:items-start rounded-2xl space-y-3">
          <p className="text-gray-500 font-bold text-shadow-2xs text-2xl">
            {product.name}
          </p>
          <p className="text-gray-500 font-bold text-shadow-sm text-xl">
            Price: ${product.price}
          </p>
          <p className="mt-4 font-bold text-gray-500  ">
            Sales: {product.sales}
          </p>
          <button
            className={`text-sm font-semibold text-gray-500 uppercase px-5 py-2 text-center rounded-md cursor-pointer ${product.category === "subscription" ? "text-green-600 bg-green-200" : "text-yellow-600 bg-yellow-200"}`}
          >
            {product.category}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
