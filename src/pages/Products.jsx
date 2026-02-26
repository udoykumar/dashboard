import React from "react";
import { useAppContext } from "../context/AuthContext";
import ProductPlan from "../components/ProductPlan";

const Products = () => {
  const { dashboard, loading } = useAppContext();
  if (loading) {
    return <h1>loading...</h1>;
  }
  const data = dashboard?.products || [];

  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4
     gap-4 lg:ml-4 mt-3"
    >
      {data.map((product) => (
        <ProductPlan key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
