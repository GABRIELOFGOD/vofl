"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarButtons = ({
  icon: Icon,
  label,
  href,
}: SidebarItemProps) => {
  const pathName = usePathname();
  const router = useRouter();

  const isActive = pathName === href;

  const onClick = () => {
    router.push(href);
  }
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex gap-3 items-center text-sm text-secondary-foreground font-[500] pl-6 transition-all cursor-pointer w-full",
        isActive ? "bg-secondary-foreground text-primary-foreground font-bold" : "text-primary font-semibold hover:bg-[var(--extra)]"
      )}
    >
      <div className="flex item-center gap-x-2 w-full py-4">
        <Icon
          size={22}
        />
        <p>{label}</p>
      </div>
      <div className={cn(
        "ml-auto border-2 opacity-0 border-primary h-full transition-all",
        isActive && "opacity-100"
      )}></div>
    </button>
  )
}
export default SidebarButtons