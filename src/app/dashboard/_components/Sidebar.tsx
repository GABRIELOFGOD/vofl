"use client";

import { Bell, Book, LayoutDashboard, Settings, User, Users } from "lucide-react";
import Image from "next/image";
import SidebarButtons from "./SidebarButtons";

const Sidebar = () => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Applications", href: "/dashboard/application" },
    { icon: Book, label: "Surah", href: "/dashboard/surah" },
    { icon: User, label: "Profile", href: "/dashboard/profile" },
    // { icon: Bell, label: "Notification", href: "/dashboard/notification" },
  ];
  
  return (
    <div className="md:bg-white h-full w-72 flex flex-col py-4">
      <div className="flex gap-5 px-4">
        <Image
          src="/logo.jpg"
          alt="Logo"
          height={40}
          width={40}
        />
        <p className="text-xl font-bold text-primary my-auto">Verse of Light</p>
      </div>
      <hr className="w-full mt-3" />
      <div className="mt-10">
        {sidebarItems.map((item, index) => (
          <SidebarButtons
            key={index}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>

      <div className="mt-auto">
        <hr className="w-full mb-5" />
        <div className="flex justify-center items-center">
          <p className="text-gray-400 font-semibold">© {new Date().getFullYear()} Verse of Light</p>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;