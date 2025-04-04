"use client";

import { Menu, Settings, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { useRouter } from "next/navigation";

const DashboardHeader = () => {
  const router = useRouter();
  
  return (
    <div className="bg-[var(--extra)] w-full py-2 rounded-lg px-6 flex justify-between">
      <div className="flex md:hidden">
        <Sheet>
          <SheetTrigger><Menu className="text-primary-foreground my-auto" /></SheetTrigger>
          <SheetContent side="left">
            <Sidebar />
          </SheetContent>
        </Sheet>
        
      </div>

      <div className="w-full justify-end flex gap-5 my-auto">
        <button
          className="flex p-2 justify-center h-fit items-center rounded-md my-auto bg-primary-foreground/20 cursor-pointer"
          onClick={() => router.push("/dashboard/settings")}
        >
          <Settings className="text-primary" />
        </button>
        <button
          className="flex p-2 justify-center h-fit items-center my-auto rounded-md bg-blue-500/20 cursor-pointer"
          onClick={() => router.push("/dashboard/profile")}
        >
          <User className="text-blue-500" />
        </button>
      </div>
    </div>
  )
}
export default DashboardHeader