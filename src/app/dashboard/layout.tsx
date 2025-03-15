import DashboardHeader from "./_components/DashboardHeader"
import Sidebar from "./_components/Sidebar"

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="flex h-screen w-full">
      <div className="hidden md:flex h-full w-fit"><Sidebar /></div>
      <div className="p-3 md:p-10 h-full flex flex-col gap-5 w-full overflow-y-auto">
        <DashboardHeader />
        {children}
      </div>
    </div>
  )
}
export default DashboardLayout