import { Book, Users } from "lucide-react";
import DashboardInfo from "./_components/DashboardInfo";
import { formatNumber } from "@/lib/services";
import surahData from "@/data/surah-data";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-3">
        <DashboardInfo
          icon={Users}
          title="Total Applications"
          content={<div className="flex flex-col gap-2">
            <p className="text-primary-foreground font-bold text-2xl">{formatNumber(3000)}</p>
            <p className="text-slate-500 text-sm">All Application since the competition begins</p>
          </div>}
        />
        <DashboardInfo
          icon={Users}
          title="Current Applications"
          content={
            <div className="flex flex-col gap-2">
              <p className="text-primary-foreground font-bold text-2xl">{formatNumber(300)}</p>
              <p className="text-slate-500 text-sm">View all applications</p>
            </div>
          }
        />
        <DashboardInfo
          icon={Book}
          title="Surahs"
          content={
            <div className="flex flex-col gap-3">
              <p className="text-primary-foreground font-bold text-2xl">{formatNumber(surahData.length)}</p>
              <p className="text-slate-500 text-sm">Total surah Currently available for the competition</p>
            </div>
          }
        />
      </div>
    </div>
  )
}
export default Dashboard;