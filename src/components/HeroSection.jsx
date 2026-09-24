import { Github, Linkedin, Download, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  // Pre-compiled email draft link that handles automatic resume requests safely
  const requestResumeEmailLink = 
    "mailto:kucharlapatisaisruthi@gmail.com" +
    "?subject=" + encodeURIComponent("Resume Request - Yuva Sai Sruthi Kucharlapati") +
    "&body=" + encodeURIComponent("Hello Sruthi,\n\nI visited your portfolio and would like to review your complete resume for potential career opportunities. Please reply to this email with your updated CV attached.\n\nBest regards,");

  // Pre-compiled safe email link that allows visitors to request a phone call professionally
  const requestPhoneEmailLink = 
    "mailto:kucharlapatisaisruthi@gmail.com" +
    "?subject=" + encodeURIComponent("Phone Number Request - Portfolio Discovery") +
    "&body=" + encodeURIComponent("Hello Sruthi,\n\nI visited your portfolio site and would love to connect with you regarding professional opportunities. Could you please share your contact number for an introductory call?\n\nBest regards,");

  return (
    <section id="home" className="section-padding pt-24 min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Layout Information Content Column */}
          <div className="space-y-6 text-left">
            <div>
              <p className="text-lg text-blue-600 font-medium mb-1">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-2">
                Yuva Sai Sruthi <br />
                <span className="text-gray-900">Kucharlapati</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6">
                AI & Data Science Graduate
              </h2>
            </div>

            {/* Privacy Shielded Professional Contact Blocks */}
            <div className="flex flex-wrap items-start gap-x-8 gap-y-4 text-sm text-gray-600">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span>Eluru, Andhra Pradesh</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a 
                    href="mailto:kucharlapatisaisruthi@gmail.com" 
                    className="hover:text-blue-600 transition-colors underline decoration-gray-200 underline-offset-4"
                  >
                    kucharlapatisaisruthi@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-gray-900 block tracking-wide uppercase">Contact Info</span>
                <a 
                  href={requestPhoneEmailLink}
                  className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg shadow-sm bg-gray-50 hover:bg-gray-100 hover:border-blue-400 text-xs font-medium text-gray-700 transition-all duration-200"
                >
                  <Phone className="h-3.5 w-3.5 text-blue-600" />
                  <span>Contact Number</span>
                  <span className="text-gray-400 ml-1">@</span>
                </a>
              </div>
            </div>

            {/* Core Executive Summary Profile Statement */}
            <p className="text-base text-gray-600 max-w-xl leading-relaxed pt-2">
              Passionate Artificial Intelligence & Data Science Graduate with hands-on experience training machine learning models, engineering full-stack platforms, and building connected IoT systems. I bridge the gap between intelligent algorithms and scalable software infrastructure to deliver production-ready code. Actively seeking full-time roles in Data Science, ML Engineering, and Software Development.
            </p>

            {/* External Social Profiles Action Buttons Trigger Layout */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="default"
                className="bg-slate-900 hover:bg-slate-800 text-white rounded-md px-5 py-2 flex items-center text-sm shadow-sm transition-all"
                asChild
              >
                <a href={requestResumeEmailLink}>
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="default"
                asChild
                className="border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 text-sm transition-all"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Linkedin className="mr-2 h-4 w-4 text-blue-600 fill-blue-600" />
                  LinkedIn
                </a>
              </Button>

              <Button
                variant="outline"
                size="default"
                asChild
                className="border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md px-5 py-2 text-sm transition-all"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Github className="mr-2 h-4 w-4 text-slate-900 fill-slate-900" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right Visual Graphical Interface Panel (100% Background Transparent Layout) */}
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
