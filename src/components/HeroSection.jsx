import Image from '../assets/im.jpg';
import { Github, Linkedin, Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const handleDownloadResume = () => {
  window.open(
    "https://drive.google.com/file/d/189CcKife36ar5N8kRz58qOHasgP-y8M2/view?usp=drive_link",
    "_blank"
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="section-padding pt-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <p className="text-lg text-blue-600 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Yuva Sai Sruthi <span className="text-gradient">Kucharlapati</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                AI & Data Science Student
              </h2>
            </div>
            {/* Contact Info */}
            <div className="space-y-3 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>Eluru, Andhra Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>+91-8978481189</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                <span>kucharlapatisaisruthi@gmail.com</span>
              </div>
            </div>
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Passionate B.Tech student specializing in Artificial Intelligence and Data Science, with hands-on experience in machine learning, full-stack development, and innovative IoT solutions.
            </p>
            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-gradient-tech hover:opacity-90 transition-opacity"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button
  variant="outline"
  size="lg"
  asChild
  className="border-blue-600 text-blue-700 hover:bg-blue-50"
>
  <a
    href="https://www.linkedin.com/in/sruthi-kucharlapati-8a309427b/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <Linkedin className="mr-2 h-5 w-5 text-blue-600" />
    LinkedIn
  </a>
</Button>
<Button
  variant="outline"
  size="lg"
  asChild
  className="border-gray-800 text-gray-800 hover:bg-gray-50"
>
  <a
    href="https://github.com/sruthi172630"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <Github className="mr-2 h-5 w-5 text-gray-800" />
    GitHub
  </a>
</Button>

            </div>
          </div>

          {/* Right Image & Icons */}
          <div className="relative animate-float">
            <div className="w-80 h-80 mx-auto relative">
              {/* Glowing gradient background */}
              <div className="absolute inset-0 bg-gradient-tech rounded-full animate-glow opacity-20"></div>
              {/* Profile Image Container */}
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="absolute inset-0 bg-white rounded-full shadow-2xl overflow-hidden flex items-center justify-center">
                  <span className="text-9xl font-extrabold text-gray-800 select-none">AI</span>
                </div>
              </div>
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center animate-pulse delay-1000">
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center animate-pulse delay-500">
                <span className="text-xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;