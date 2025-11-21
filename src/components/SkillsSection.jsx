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
      { name: 'Python', level: 90, description: 'AI/ML, Data Science, Data Analysis, Data Modelling' },
      { name: 'JavaScript', level: 85, description: 'Frontend, Backend' },
      { name: 'Java', level: 80, description: 'Object-Oriented Programming' },
      { name: 'HTML/CSS', level: 90, description: 'Web Development, Responsive Design' },
    ]
  },
  {
    key: 'frameworks',
    title: 'Frameworks & Libraries',
    icon: <Globe className="h-5 w-5" />,
    skills: [
      { name: 'React.js', level: 85, description: 'Frontend Development, UI Components' },
      { name: 'Node.js', level: 80, description: 'Backend Development, API Creation' },
      { name: 'Chart.js', level: 75, description: 'Data Visualization, Analytics' },
      { name: 'Express.js', level: 70, description: 'Web Framework, RESTful APIs' },
    ]
  },
  {
    key: 'databases',
    title: 'Databases & Storage',
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: 'MongoDB', level: 80, description: 'NoSQL Database, Document Storage' },
      { name: 'MySQL', level: 75, description: 'Relational Database, SQL Queries' },
    ]
  },
  {
    key: 'tools',
    title: 'Tools & Technologies',
    icon: <Wrench className="h-5 w-5" />,
    skills: [
      { name: 'GitHub', level: 85, description: 'Version Control, Collaboration' },
      { name: 'Postman', level: 80, description: 'API Testing, Development' },
      { name: 'VS Code', level: 90, description: 'Code Editor, Development Environment' },
      { name: 'Git', level: 85, description: 'Version Control System' },
    ]
  },
  {
    key: 'security',
    title: 'Security & Authentication',
    icon: <Shield className="h-5 w-5" />,
    skills: [
      { name: 'JWT', level: 80, description: 'Token-based Authentication' },
      { name: 'Bcrypt.js', level: 75, description: 'Password Hashing, Security' },
    ]
  },
  {
    key: 'softskills',
    title: 'Soft Skills',
    icon: <Users className="h-5 w-5" />,
    softSkills: [
      "Effective communication skills",
      "Goal Setting",
      "Group discussion",
      "Decision making",
      "Mock session"
    ]
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const currentCategory = skillCategories.find(cat => cat.key === activeCategory);

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different domains.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {skillCategories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-200 ${
                    activeCategory === category.key
                      ? 'bg-gradient-tech text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <span className="font-medium">{category.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3">
            <Card className="tech-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  {currentCategory.icon}
                  <h3 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h3>
                </div>
                {currentCategory.skills && (
                  <div className="space-y-6">
                    {currentCategory.skills.map((skill, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
                            <p className="text-sm text-gray-600">{skill.description}</p>
                          </div>
                          <span className="text-sm font-medium text-blue-600">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                )}
                {currentCategory.softSkills && (
                  <ul className="list-disc pl-6 space-y-2">
                    {currentCategory.softSkills.map((skill, idx) => (
                      <li key={idx} className="text-base text-gray-700">{skill}</li>
                    ))}
                  </ul>
                )}
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Continuous Learning</h4>
                  <p className="text-blue-700 text-sm">
                    I'm constantly updating my skills and learning new technologies.
                    These proficiency levels reflect my current experience and ongoing projects.
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
