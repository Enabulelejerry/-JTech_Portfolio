import Hw from "@/public/portImages/hw.png";
import Vn from "@/public/portImages/venioe.png";
import Hm from "@/public/portImages/doctor.png";
import Vy from "@/public/portImages/vys.png";
import blog from "@/public/portImages/blog.png";
import zodel from "@/public/portImages/zodelStore.png";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function Project() {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Rocket className="h-4 w-4" />
            <span className="font-semibold">Featured Projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Things I&#39;ve Built
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-pink-400 to-rose-500 overflow-hidden relative">
              <Image
                src={Hw}
                alt="E-commerce Platform"
                width={350}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gray-900">
                E-commerce Platform
              </CardTitle>
              <CardDescription className="text-gray-600">
                A full-stack e-commerce solution with payment integration, admin
                dashboard, and real-time inventory management.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">NextJs</Badge>
                <Badge variant="secondary">NextJs Server Actions</Badge>
                <Badge variant="secondary">Supabase</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind</Badge>
                <Badge variant="secondary">Paystack</Badge>
              </div>
              <div className="flex gap-2">
                <Link href="https://github.com/Enabulelejerry/nextjs_ecommerce">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-pink-300 text-pink-600 hover:bg-pink-50"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>

                <Link href="https://hwroyals.vercel.app/">
                  <Button size="sm" className="bg-pink-600 hover:bg-pink-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-500 overflow-hidden relative">
              <Image
                src={Vn}
                alt="E-commerce Platform"
                width={350}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gray-900">Venue Platform</CardTitle>
              <CardDescription className="text-gray-600">
                Full-featured system for venue onboarding, bookings, and
                logistics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">Stripe</Badge>
              </div>
              <div className="flex gap-2">
                <Link href="#">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>

                <Link href="https://app.venioe.com/">
                  <Button
                    size="sm"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-500 overflow-hidden relative">
              <Image
                src={Hm}
                alt="Task Management App"
                width={350}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gray-900">Tricent Osteo</CardTitle>
              <CardDescription className="text-gray-600">
                Comprehensive hospital system for managing appointments and
                patient records.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">MySql</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Link href="https://app.tricentosteopedic.com/">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-indigo-500 overflow-hidden relative">
              <Image
                src={Vy}
                alt="Task Management App"
                width={350}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gray-900">
                VYS Legal Advisory
              </CardTitle>
              <CardDescription className="text-gray-600">
                Corporate site for a legal firm empowering wellness
                entrepreneurs in Nigeria.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-green-300 text-green-600 hover:bg-green-50"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Link href="https://vyslegaladvisory.com/">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-500 overflow-hidden relative">
              <Image
                src={blog}
                alt="Task Management App"
                width={350}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gray-900">Blog Platform</CardTitle>
              <CardDescription className="text-gray-600">
                Admin-managed blogging platform integrated with the
                organization’s brand site.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">MySql</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Link href="https://blogtest.standardlife.org.ng/">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-blue-400 to-indigo-500 overflow-hidden relative">
              <Image
                src={zodel}
                alt="Task Management App"
                width={350}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-gray-900">
                {" "}
                Zodel E-commerce Platform
              </CardTitle>
              <CardDescription className="text-gray-600">
                An E-commerce Platform to get lab equipments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Laravel</Badge>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">MySql</Badge>
                <Badge variant="secondary">Tailwind</Badge>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Link href="https://store.zodelbiotec.com/">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Project;
