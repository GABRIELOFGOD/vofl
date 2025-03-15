"use client"

import { usePathname } from "next/navigation";
import Header from "./Header";

const HeaderSeparator = () => {
  const path = usePathname();

  const adminPaths = path.startsWith("/dashboard");
  
  return (
    <div>
      {adminPaths ? null : <Header />}
    </div>
  )
}
export default HeaderSeparator;