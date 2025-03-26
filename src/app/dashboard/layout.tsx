"use client";

import { useRouter } from "next/navigation";
import DashboardHeader from "./_components/DashboardHeader";
import Sidebar from "./_components/Sidebar";
import { useGlobalContext } from "@/context/GlobalContext";
import { useEffect } from "react";
import LoadingSCreen from "@/utils/LoadingSCreen";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const router = useRouter();
  const { isLoggedIn, loading } = useGlobalContext();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, loading]);

  if (loading) {
    return <LoadingSCreen />
  }

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