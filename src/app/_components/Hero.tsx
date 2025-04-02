"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-fit py-52 md:h-screen flex flex-col justify-center items-center bg-gradient-to-b from- bg-black/10 to-black/90">
      <Image
        src="/image_fx_.jpg"
        alt="bg-image"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
      <div className="flex flex-col gap-5 w-full md:w-[700px] justify-center items-center text-center p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          <span className="text-primary">VERSES OF LIGHT</span> QURANIC COMPETITION
        </h1>
        <p className="text-white text-lg md:text-xl">
          Join thousands of talented participants as they showcase their memorization, recitation, and Tajweed skills while deepening their connection with the Holy Quran.
        </p>
        <Button
          variant="primary"
          size="lg"
          className="font-semibold"
        >
          Join Competition
        </Button>
      </div>
    </div>
  );
};

export default Hero;
