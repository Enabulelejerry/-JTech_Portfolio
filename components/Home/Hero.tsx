import { Button } from "@/components/ui/button";
import {
  Code,
  Download,
  Github,
  Heart,
  Linkedin,
  LucideGitBranchPlus,
  Mail,
  Star,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProfileImg from "@/public/images/profile-b.png";

function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-600 font-semibold">
                  Available for new opportunities
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                Hi, I'm <span className="text-blue-600">Enabulele Jerry</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-600 font-semibold">
                Full Stack Web Developer & Software Engineer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                I'm a passionate full stack developer with 5+ years of
                experience building scalable web applications. I specialize in
                Laravel, React, Next.js Next.js Server Actions, and cloud
                technologies, creating digital solutions that make a difference.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/Jerry_Enabulele_cv.pdf" download>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="mailto:jerryenabulele@gmail.com?subject=Let's%20Connect&body=Hi%2C%20I%20would%20love%20to%20talk%20about...">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </a>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/Enabulelejerry"
                className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <LucideGitBranchPlus className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jerry-enabulele-0109ba10a/"
                className="text-gray-500 hover:text-blue-600 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <a
                href="mailto:jerryenabulele@gmail.com?subject=Let's%20Connect&body=Hi%2C%20I%20would%20love%20to%20talk%20about..."
                className="text-gray-500 hover:text-purple-600 transition-colors transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center" data-aos="fade-left">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl">
                <Image
                  src={ProfileImg}
                  alt="John Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <Code className="h-6 w-6" />
              </div>
              <div className="absolute -top-4 -left-4 bg-purple-600 text-white p-2 rounded-full shadow-lg">
                <Star className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
