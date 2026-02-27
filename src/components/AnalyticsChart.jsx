import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "motion/react";
import { useAppContext } from "../context/AuthContext";

const AnalyticsBarChart = () => {
  const { dashboard } = useAppContext();
  const data = dashboard.analytics;
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="w-full lg:w-1/2 h-65 bg-white p-2 rounded-2xl shadow mt-3"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8} barCategoryGap="20%">
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="date" />
          <YAxis axisLine={false} />
          <Tooltip />
          <Legend />

          <Bar dataKey="conversions" fill="#f59e0b" radius={[8, 8, 0, 0]} />
          <Bar dataKey="views" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="clicks" fill="#10b981" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default AnalyticsBarChart;
