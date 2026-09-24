import { Brain, Code, Cpu, BarChart3 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-4 text-blue-600" />,
      title: "AI & ML Engineering",
      description: "Experienced in designing, training, and deploying machine learning models and predictive algorithms."
    },
    {
      icon: <BarChart3 className="h-6 w-4 text-purple-600" />,
      title: "Data Analytics",
      description: "Skilled in data exploration, predictive modeling, and transforming datasets into actionable insights."
    },
    {
      icon: <Code className="h-6 w-4 text-emerald-600" />,
      title: "Full-Stack Development",
      description: "Capable of architecting end-to-end web apps and database infrastructures to back intelligent systems."
    },
    {
      icon: <Cpu className="h-6 w-4 text-orange-600" />,
      title: "IoT & Smart Systems",
      description: "Hands-on experience building integrated, connected hardware solutions and real-time data pipelines."
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight mb-2">About Me</h2>
          <p className="text-lg md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A results-driven B.Tech Graduate specializing in Artificial Intelligence and Data Science, 
            focused on translating data insights into scalable production code.
          </p>
        </div>

        {/* Layout Grid */}
        {/* 🛠️ GAP CHANGED HERE: Changed lg:gap-5 to lg:gap-12 to push columns apart cleanly on desktop */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Bio Content Column (Occupies 5 out of 12 columns) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-gray-700 space-y-3 text-base leading-relaxed text-justify">
              <p>
                I am <span className="font-semibold text-gray-900">Yuva Sai Sruthi Kucharlapati</span>, 
                a recent Artificial Intelligence and Data Science graduate from Ramachandra College of Engineering. 
                Driven by curiosity about how machines interpret data, 
                I maintained a strong <span className="font-bold px-1.5 py-0.5 rounded text-base inline-block">CGPA of 8.36</span> while 
                actively pursuing professional internships and analytical projects.
              </p>
              <p>
                Beyond core academics, I specialize in architecting full-stack web platforms, training machine 
                learning models, and building connected IoT systems. I bridge the gap between intelligent algorithms 
                and scalable software infrastructure to deliver production-ready code.
              </p>
              <p>
                I thrive on working with real-world datasets, parsing unstructured telemetry, and designing analytical 
                pipelines. I am eager to contribute my technical toolkit to agile development teams building next-generation automation architectures.
              </p>
            </div>

            {/* Compact Languages Display Panel */}
            <div className="bg-slate-50/80 border border-slate-100 p-4 rounded-lg max-w-xs">
              <h3 className="text-[13px] font-bold text-black-500 mb-2 tracking-wider uppercase">Languages I Speak</h3>
              <div className="flex flex-wrap gap-2">
                {['English', 'Telugu'].map(language => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-white text-slate-600 border border-slate-200 rounded text-[11px] font-medium shadow-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Highlights Grid Column (Occupies 7 out of 12 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="border border-slate-100 shadow-sm rounded-lg bg-gradient-to-b from-white to-slate-50/20"
              >
                <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                  <div className="p-2 bg-slate-50 rounded-md mb-2 border border-slate-100">
                    {highlight.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1 tracking-tight">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-md leading-normal max-w-[220px] mx-auto">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
