import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { baseUrl } from "../context/AuthContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${baseUrl}api/products/${id}`);
      setProduct(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.sales}</p>
      <p>{product.category}</p>
    </div>
  );
};

export default ProductDetails;
