import Hero from "./_components/Hero";
import { steps, whyCompetition } from "@/data/step";
import ApplicationCard from "@/components/layouts/home/ApplicationCard";
import WhyVoLCard from "@/components/layouts/home/WhyVoLCard";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="container mx-auto py-10 flex flex-col gap-10 px-3">

        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold">Welcome to <b>Verses of Light</b></p>
          <div className="flex flex-col gap-3">
            <p className="text-lg">Experience the beauty of the Quran like never before! The Verse of Light Quranic Competition is the largest platform in Nigeria dedicated to inspiring, nurturing, and celebrating Quranic excellence among young reciters.</p>
            <p className="text-lg">Join thousands of talented participants as they showcase their memorization, recitation, and Tajweed skills while deepening their connection with the Holy Quran.</p>
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold">How to apply</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            {steps.map((step) => (
              <ApplicationCard
                key={step.topic}
                icon={step.icon}
                topic={step.topic}
                content={step.content}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-2xl font-semibold">Why Join the Verse of Light Competition?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5">
            {whyCompetition.map((step) => (
              <WhyVoLCard
                key={step.topic}
                icon={step.icon}
                topic={step.topic}
                content={step.content}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
