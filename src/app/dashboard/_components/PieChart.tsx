import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

// Register required chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options }: {
  data: ChartData<"pie">;
  options: ChartOptions<"pie">;
}) => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
