import { BookImage, LucideIcon, Mail, Pen, Share, Star, Trophy, Users2 } from "lucide-react"

export interface ApplicationCardProps {
  icon: LucideIcon;
  topic: string;
  content: string;
}

export const steps: ApplicationCardProps[] = [
  {
    icon: Pen,
    topic: "Register & Submit Documents",
    content: "Complete the online application form and upload the required documents, including a passport photo, birth certificate, and (for older participants) a Hafiz certification."
  },
  {
    icon: Mail,
    topic: "Receive Your Surah & Upload Your Recitation",
    content: "Once registered, you’ll receive a randomly assigned Surah. Record and upload a high-quality video of your recitation."
  },
  {
    icon: Share,
    topic: "Share & Engage",
    content: "Spread the light! Share your recitation on social media and tag the official Verse of Light handles."
  }
];

export const whyCompetition: ApplicationCardProps[] = [
  {
    icon: Star,
    topic: "A Prestigious Platform",
    content: "Showcase your Quranic skills on a national stage."
  },
  {
    icon: Trophy,
    topic: "Exciting Rewards",
    content: "Win incredible prizes and recognition."
  },
  {
    icon: BookImage,
    topic: "Spiritual Growth",
    content: "Strengthen your connection with the Quran."
  },
  {
    icon: Users2,
    topic: "A Supportive Community",
    content: "Be part of a network of young Quran enthusiasts."
  }
]