"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";

export const socials = [
  { icon: FaInstagram, label: "Instagram", link: "" },
  { icon: FaTiktok, label: "TikTok", link: "" },
  { icon: FaFacebookF, label: "Facebook", link: "" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const router = useRouter();
  const pathname = usePathname();

  const headerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const listTextStyle = cva("text-black font-medium text-lg hover:text-primary", {
    variants: {
      active: {
        true: "text-primary",
        false: "",
      },
    },
  });

  return (
    <div className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg z-50 flex justify-between items-center px-5 shadow-sm py-2">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={150} width={200} />
      </Link>
      <div className="my-auto flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu size={25} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <Image src="/logo.jpg" alt="Logo" height={40} width={40} />
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
                  <div className="flex gap-5 my-auto">
                    {socials.map(({ label, link, icon: Icon }) => (
                      <Link key={label} href={link}>
                        <Icon />
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
      <div className="md:flex hidden gap-5 flex-col md:justify-between md:flex-row">
        <div className="flex gap-5 flex-col md:flex-row my-auto text-xs">
          {headerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(listTextStyle({ active: activeLink === link.href }), "text-sm")}
              onClick={() => setActiveLink(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 my-auto">
          {socials.map(({ label, link, icon: Icon }) => (
            <Link key={label} href={link}>
              <Icon className="my-auto" />
            </Link>
          ))}
        </div>
      </div>
      <Button
        variant="ghost"
        className="font-semibold my-auto cursor-pointer hidden md:flex rounded-full shadow-sm bg-white/20 backdrop-blur-md"
        onClick={() => router.push("/apply")}
      >
        Apply Now
      </Button>
    </div>
  );
};

export default Header;
