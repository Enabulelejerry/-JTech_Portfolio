import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="py-8 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Enabulele Jerry. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
