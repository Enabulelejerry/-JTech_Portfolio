import { Calendar, MapPin, Star } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Experince() {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4" />
            <span className="font-semibold">Work Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            My Professional Journey
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The companies I've had the pleasure to work with and grow alongside
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-gray-900">
                    Full Stack Developer
                  </CardTitle>
                  <CardDescription className="text-base text-purple-600 font-semibold">
                    Standard Life Organization
                  </CardDescription>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2022 - Present
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    Edo State Nigeria
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Built REST APIs for InsureTech, an advanced insurance
                  software.
                </li>
                <li>Kick Started a core banking system for the organization</li>
                <li>
                  Served as liaison between Standard Life and Musoni core
                  banking platform translating business needs into technical
                  solutions.
                </li>
                <li>
                  Delivered onboarding, training, and technical support for the
                  Insuretech platform
                </li>
                <li>
                  Mentored junior developers and established coding standards
                </li>
                <li>
                  Rebranded and redeveloped the company website and redesigned
                  their blog
                </li>
                <li>
                  Implemented Laravel forge reducing deployment time by 60%
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-gray-900">
                    Backend Developer
                  </CardTitle>
                  <CardDescription className="text-base text-blue-600 font-semibold">
                    Launch Code
                  </CardDescription>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2024 - 2024
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Built APIs for Venioe, a venue management platform.</li>
                <li>
                  Implemented secure authentication, booking logic, and
                  real-time features.
                </li>
                <li>Collaborated with design team to implement API's</li>
                <li>
                  Integrated third-party APIs and payment processing systems
                </li>
                <li>
                  Participated in agile development processes and code reviews
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300 bg-white">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-gray-900">
                    Backend Developer
                  </CardTitle>
                  <CardDescription className="text-base text-green-600 font-semibold">
                    Zodel hub
                  </CardDescription>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    2024 - 2025
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    Remote
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>
                  Developed the Api a community app for biotech researchers with
                  gated content.
                </li>
                <li>Built backend Api for Zodel Biotech eCommerce platform.</li>
                <li>Maintained and updated existing client websites</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Experince;
