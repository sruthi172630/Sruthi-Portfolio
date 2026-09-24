import { useState } from 'react';
import { Code, Database, Globe, Shield, Wrench, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    key: 'languages',
    title: 'Programming Languages',
    icon: <Code className="h-5 w-5" />,
    skills: [
      { name: 'Python', level: 95, description: 'AI/ML Engineering, Vector Embeddings, Data Pipelines, Core Scripting' },
      { name: 'Java', level: 85, description: 'Object-Oriented Programming, Logic Building, Algorithm Design' },
      { name: 'SQL / JavaScript', level: 85, description: 'Relational Database Queries, Frontend/Backend Project Logic' },
      { name: 'HTML / CSS', level: 90, description: 'Responsive Interface Design, Layout Alignment, Styling UI' },
      { name: 'R Language', level: 75, description: 'Statistical Modelling, Experimental Analytics' }
    ]
  },
  {
    key: 'ai-frameworks',
    title: 'AI & ML Frameworks',
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: 'Scikit-learn', level: 90, description: 'Supervised/Unsupervised Learning, Preprocessing, Pipeline Design' },
      { name: 'TensorFlow / Keras', level: 80, description: 'Neural Network Architectures, Computer Vision Foundations' },
      { name: 'PyTorch', level: 80, description: 'Deep Learning Models, Dynamic Graph Tensors' },
      { name: 'XGBoost / LightGBM', level: 85, description: 'Advanced Classification Algorithms, Performance Optimization' },
      { name: 'GenAI & OpenAI APIs', level: 85, description: 'Prompt Engineering, Vector Database Queries, ChromaDB Embeddings' }
    ]
  },
  {
    key: 'analytics',
    title: 'Data Science & Analytics',
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: 'Pandas & NumPy', level: 95, description: 'Feature Engineering, Matrix Computations, Missing Data Imputation' },
      { name: 'Statistical Methods', level: 85, description: 'Hypothesis Testing, Regression Frameworks, Time Series Telemetry' },
      { name: 'Power BI / Plotly', level: 85, description: 'Business Intelligence Dashboards, High-Fidelity Data Visualization' },
      { name: 'Matplotlib & Seaborn', level: 90, description: 'Static Data Plotting, Statistical Distribution Graphing' }
    ]
  },
  {
    key: 'frameworks',
    title: 'Web Dev & APIs',
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: 'React.js', level: 85, description: 'Dynamic Component State Management, Single-Page Architecture' },
      { name: 'FastAPI', level: 80, description: 'Asynchronous Python Endpoint Backends, AI Agent Service Engines' },
      { name: 'Node.js & Express.js', level: 80, description: 'RESTful Application Programming Interfaces, MERN Routing' }
    ]
  },
  {
    key: 'security',
    title: 'Databases & Security',
    icon: <Shield className="h-5 w-5" />,
    skills: [
      { name: 'MongoDB / MySQL', level: 80, description: 'Document Object Storage, Relational Schema Queries' },
      { name: 'JWT & Bcrypt.js', level: 85, description: 'Role-Based Authentication Protocols, Private Hashed Passwords' }
    ]
  },
  {
    key: 'softskills',
    title: 'Core Competencies',
    icon: <Users className="h-5 w-5" />,
    softSkills: [
      "Technical Team Leadership (Led group of 4 software engineers)",
      "Analytical Problem Solving",
      "Effective Professional Communication",
      "Time Management & Sprint Agility",
      "Continuous Professional Aptitude"
    ]
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  const currentCategory = skillCategories.find(cat => cat.key === activeCategory);

  return (
    <section id="skills" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Technical Core Competencies</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A strategic breakdown of my technical proficiencies, engineering capabilities, and programmatic tools across the lifecycle of software applications and machine learning operations.
          </p>
        </div>
        
        {/* Main Grid Wrapper Layout */}
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Navigation Sidebar Panel */}
          <div className="lg:col-span-1">
            <div className="space-y-2 text-left">
              {skillCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-200 shadow-sm border ${
                    activeCategory === category.key
                      ? 'bg-slate-900 border-slate-900 text-white font-medium'
                      : 'bg-gray-50 border-gray-100 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <span className="text-sm font-semibold tracking-wide">{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Display Analytics Card Workspace */}
          <div className="lg:col-span-3 text-left">
            <Card className="border border-gray-200/80 shadow-xl rounded-2xl bg-white overflow-hidden">
              <CardContent className="p-8 sm:p-10">
                
                {/* Active Category Heading Title Block */}
                <div className="flex items-center gap-3 mb-8 border-b border-gray-100 pb-5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    {currentCategory.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-950 tracking-tight">
                    {currentCategory.title}
                  </h3>
                </div>

                {/* Progress Indicators Render Loops */}
                {currentCategory.skills && (
                  <div className="space-y-6">
                    {currentCategory.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 tracking-tight">{skill.name}</h4>
                            <p className="text-xs text-gray-500 font-normal leading-relaxed mt-0.5">{skill.description}</p>
                          </div>
                          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2 bg-slate-100 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-indigo-600" />
                      </div>
                    ))}
                  </div>
                )}

                {/* Soft Skills Categorized List Render Blocks */}
                {currentCategory.softSkills && (
                  <ul className="space-y-3 pl-1">
                    {currentCategory.softSkills.map((skill, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Constant Technical Update Ribbon Notification */}
                <div className="mt-8 p-5 bg-slate-50 border border-slate-100 rounded-xl">
                  <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase mb-1">Continuous Skill Calibration</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    I proactively expand my engineering capabilities as new frameworks evolve. These metrics reflect active project architectures, algorithmic usage frequency, and baseline workflow competencies.
                  </p>
                </div>

              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};  
export default SkillsSection;
