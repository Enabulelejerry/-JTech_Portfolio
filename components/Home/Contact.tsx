import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import Link from "next/link";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white"
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-4">
            <Mail className="h-4 w-4" />
            <span className="font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&#39;s Create Something Amazing Together
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            I&#39;m always interested in new opportunities and interesting
            projects. Let&#39;s discuss how we can work together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Let&#39;s start a conversation
            </h3>
            <p className="text-blue-100">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I&#39;d love to hear from you. Drop me a
              message and I&#39;ll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <span>jerryenabulele@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <span>Lagos Nigeria</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://github.com/Enabulelejerry"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jerry-enabulele-0109ba10a/"
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <a
                href="mailto:jerryenabulele@gmail.com?subject=Let's%20Connect&body=Hi%2C%20I%20would%20love%20to%20talk%20about..."
                className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Send me a message</CardTitle>
              <CardDescription className="text-blue-100">
                Fill out the form below and I'll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium text-white"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium text-white"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium text-white"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Project Collaboration"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Contact;
