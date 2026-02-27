import React from "react";
import { useAppContext } from "../context/AuthContext";
import ProductPlan from "../components/ProductPlan";
import { motion } from "motion/react";

const Products = () => {
  const { dashboard, loading } = useAppContext();

  if (loading) {
    return <h1>loading...</h1>;
  }

  const data = dashboard?.products || [];

  return (
    <motion.div
      className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:ml-4 mt-3"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      {data.map((product) => (
        <div key={product.id}>
          <ProductPlan product={product} />
        </div>
      ))}
    </motion.div>
  );
};

export default Products;
