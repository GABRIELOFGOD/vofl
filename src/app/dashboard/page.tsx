import { LayoutDashboardIcon, User, Users } from "lucide-react";
import DashboardInfo from "./_components/DashboardInfo";

const Dashboard = () => {
  return (
    <div>
      <div className="flex gap-3">
        <DashboardInfo
          icon={LayoutDashboardIcon}
          title="Dashboard"
          content={<p className="text-slate-500">Welcome admin, You are in control of the application</p>}
        />
        <DashboardInfo
          icon={Users}
          title="Applications"
          content={
            <div className="flex flex-col gap-3">
              <p className="text-primary-foreground font-bold text-2xl">30</p>
              <p className="text-slate-500">View all applications</p>
            </div>
          }
        />
        <DashboardInfo
          icon={User}
          title="Profile"
          content={<p className="text-slate-500">View and update profile</p>}
        />
      </div>
    </div>
  )
}
export default Dashboard;