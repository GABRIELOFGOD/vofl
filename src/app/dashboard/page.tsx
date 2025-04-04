"use client";

import { Book, Users } from "lucide-react";
import DashboardInfo from "./_components/DashboardInfo";
import { formatNumber } from "@/lib/services";
// import surahData from "@/data/surah-data";
// import applicants from "@/data/user-data";
import { useEffect, useState } from "react";
import PieChart from "./_components/PieChart";
// import { ApplicationStatus } from "@/types/user";
import { ChartData, ChartOptions, TooltipItem } from "chart.js";

const Dashboard = () => {
  const [chartData, setChartData] = useState<ChartData<"pie">>({
    labels: ["Approved Applications", "Pending Applications", "Denied Applications"],
    datasets: [
      {
        label: "Applications",
        data: [0, 0, 0],
        backgroundColor: ["green", "yellow", "red"],
        hoverOffset: 12, // Expands on hover
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: ["Approved Applications", "Pending Applications", "Denied Applications"],
      datasets: [
        {
          label: "Applications",
          data: [
            30,10,11
            // applicants.filter(applicant => applicant.status === ApplicationStatus.APPROVED).length,
            // applicants.filter(applicant => applicant.status === ApplicationStatus.PENDING).length,
            // applicants.filter(applicant => applicant.status === ApplicationStatus.DENIED).length
          ],
          backgroundColor: ["green", "yellow", "red"],
          hoverOffset: 12,
        }
      ]
    });
  }, []);

  const chartOptions: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 14,
          },
          padding: 20,
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem: TooltipItem<"pie">) {
            const valueVa = tooltipItem.raw;
            return `Value: ${valueVa}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="flex gap-3 flex-col md:flex-row">
        <DashboardInfo
          icon={Users}
          title="Total Applications"
          content={
            <div className="flex flex-col gap-2">
              <p className="text-primary-foreground font-bold text-2xl">
                {formatNumber(3000)}
              </p>
              <p className="text-slate-500 text-sm">
                All Applications since the competition began
              </p>
            </div>
          }
        />
        <DashboardInfo
          icon={Users}
          title="Current Applications"
          content={
            <div className="flex flex-col gap-2">
              <p className="text-primary-foreground font-bold text-2xl">
                {/* {formatNumber(applicants.length)} */}
                {formatNumber(34561)}
              </p>
              <p className="text-slate-500 text-sm">
                Applications for the current cohort
              </p>
            </div>
          }
        />
        <DashboardInfo
          icon={Book}
          title="Surahs"
          content={
            <div className="flex flex-col gap-3">
              <p className="text-primary-foreground font-bold text-2xl">
                {/* {formatNumber(surahData.length)} */}
                {formatNumber(1929)}
              </p>
              <p className="text-slate-500 text-sm">
                Total Surahs currently available for the competition
              </p>
            </div>
          }
        />
      </div>
      <div className="flex flex-col gap-3">
        <p>Students Data</p>
        <div style={{ width: "50%", height: "400px", margin: "auto" }}>
          <PieChart data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
