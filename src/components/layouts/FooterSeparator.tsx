"use client"

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterSeparator = () => {
  const path = usePathname();

  const adminPaths = path.startsWith("/dashboard") || path === "/login";
  
  return (
    <div className="w-full">
      {adminPaths ? null : <Footer />}
    </div>
  )
}
export default FooterSeparator;