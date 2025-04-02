"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header
        className="relative h-fit w-full bg-cover bg-center bg-secondary-foreground/50 pt-24 text-black py-14 text-center"
      >
        <Image
          src="/about_bg.jpg"
          alt="bg-image"
          fill
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold">About Verses of Light</h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            An inspiring platform for Quranic competitions, connecting hearts and minds through the beauty of recitation.
          </p>
        </div>
      </header>

      <section className="max-w-6xl mx-auto p-6 text-center">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-green-700">Our Mission</h2>
          <p className="mt-4 text-gray-700">
            We aim to nurture a love for the Quran through engaging competitions that encourage memorization, recitation, and understanding of the Holy Book.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 text-center">Meet Our Scholars</h2>
        <p>Behind Verse of Light is a dedicated team of scholars, educators, and organizers committed to making this competition a success. Meet the faces behind this transformative initiative and learn about their passion for promoting Quranic excellence.</p>
      </section>

      <section className="max-w-6xl mx-auto p-6 mt-10">
        <h2 className="text-3xl font-semibold text-green-700 text-center">FAQs</h2>
        <div className="mt-6 space-y-4">
          {[{ question: "Who can participate?", answer: "Anyone passionate about the Quran, regardless of age, can join our competitions." },
            { question: "How do I register?", answer: "Simply visit our registration page and sign up with your details." },
            { question: "Are there rewards?", answer: "Yes! We offer exciting prizes for top contestants, including scholarships and recognition certificates." }].map((faq, index) => (
            <details key={index} className="bg-white p-4 shadow-lg rounded-lg cursor-pointer">
              <summary className="text-lg font-semibold">{faq.question}</summary>
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
