import { Heart } from "lucide-react";
import React from "react";

function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div
          className="max-w-3xl mx-auto text-center space-y-6"
          data-aos="fade-up"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4">
            <Heart className="h-4 w-4" />
            <span className="font-semibold">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Passionate About Creating Amazing Experiences
          </h2>
          <p className="text-lg text-gray-600">
            I’m a Fullstack Web Developer with 5 years of hands-on experience
            building scalable and high-performance web applications using
            Laravel, Next.js, and modern backend solutions like Server Actions
            and Supabase. I specialize in creating seamless user experiences and
            robust backend systems.
          </p>
          <p className="text-lg text-gray-600">
            My goal is to leverage my deep understanding of fullstack
            development to deliver impactful digital products, solve real-world
            problems, and grow into a technical leadership role where I can
            contribute to building scalable engineering teams and systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
