import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Smartphone, Star, Zap } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Zap className="h-4 w-4" />
            <span className="font-semibold">Skills & Technologies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            My Technical Arsenal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to
            life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-l-4 border-l-red-500 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <Code className="h-5 w-5" />
                Frontend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-red-50 text-red-700 border-red-200">
                  React
                </Badge>
                <Badge className="bg-red-50 text-red-700 border-red-200">
                  Next.js
                </Badge>
                <Badge className="bg-red-50 text-red-700 border-red-200">
                  TypeScript
                </Badge>
                <Badge className="bg-red-50 text-red-700 border-red-200">
                  Tailwind CSS
                </Badge>
                <Badge className="bg-red-50 text-red-700 border-red-200">
                  HTML/CSS
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Server className="h-5 w-5" />
                Backend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-50 text-green-700 border-green-200">
                  Php
                </Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200">
                  Laravel
                </Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200">
                  NextJs Server Action
                </Badge>
                <Badge className="bg-green-50 text-green-700 border-green-200">
                  REST APIs
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700">
                <Database className="h-5 w-5" />
                Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                  PostgreSQL
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                  MongoDB
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                  MySQL
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                  Redis
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                  Supabase
                </Badge>
                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                  Prisma
                </Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-orange-500 hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <Smartphone className="h-5 w-5" />
                Tools & Others
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                  AWS
                </Badge>
                <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                  Git
                </Badge>
                <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                  Vercel
                </Badge>
                <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                  Supabase
                </Badge>
                <Badge className="bg-orange-50 text-orange-700 border-orange-200">
                  Laravel Forge
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Skills;
