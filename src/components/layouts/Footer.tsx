"use client";

import Image from "next/image"
import { socials } from "./Header"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-secondary to-secondary-foreground flex flex-col gap-5 text-white text-center py-10 items-center px-3 md:px-28 mt-10">
      <Image
        src={"/logo.png"}
        alt="Logo"
        height={250}
        width={250}
      />
      {/* <p className="font-bold text-primary text-4xl md:text-6xl">VERSES OF LIGHT</p> */}
      <p className="text-white/80 text-lg md:text-xl text-center">Join thousands of talented participants as they showcase their memorization, recitation, and Tajweed skills while deepening their connection with the Holy Quran</p>
      <div className="flex gap-5 my-auto">
        {socials.map(({ label, link, icon: Icon }) => (
          <Link key={label} href={link}>
            <Icon className="my-auto" />
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-200 font-semibold">© {new Date().getFullYear()} Verse of Light. All rights reserved.</p>
      </div>
    </footer>
  )
}
export default Footer