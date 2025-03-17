import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options }: {
  data: any;
  options: any;
}) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
