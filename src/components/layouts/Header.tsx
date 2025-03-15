"use client";

import Link from "next/link"
import { useState } from "react";
import { Button } from "../ui/button"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();

  const headerLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ]

  const listTextStyle = cva(
    "text-black font-medium text-lg hover:text-primary",
    {
      variants: {
        active: {
          true: "text-primary",
          false: "",
        },
      },
    }
  )
  
  return (
    <div className="flex justify-between items-center px-5 shadow-sm z-50 sticky bg-background top-0 left-0 w-full">
      {/* <p className="font-bold text-2xl my-auto">Logo</p> */}
      <Link href="/">
        <Image
          src="/logo.jpg"
          alt="Logo"
          height={70}
          width={70}
        />
      </Link>
      <div className="my-auto flex md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu size={25} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                src="/logo.jpg"
                alt="Logo"
                height={40}
                width={40}
              />
            </SheetTitle>
            <SheetDescription>
            <div className="flex gap-5 md:gap-20 flex-col">
              <div className="flex gap-5 flex-col md:flex-row my-auto">
                {headerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(listTextStyle({ active: activeLink === link.href }))}
                    onClick={() => setActiveLink(link.href)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Button
                variant="primary"
                className="font-bold my-auto cursor-pointer"
                onClick={() => router.push("/apply")}
              >
                Apply Now
              </Button>
            </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      </div>
      <div className="md:flex hidden gap-5 md:gap-20 flex-col md:flex-row">
        <div className="flex gap-5 flex-col md:flex-row my-auto">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(listTextStyle({ active: activeLink === link.href }))}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <Button
          variant="primary"
          className="font-bold my-auto cursor-pointer"
          onClick={() => router.push("/apply")}
        >
          Apply Now
        </Button>
      </div>
    </div>
  )
}
export default Header