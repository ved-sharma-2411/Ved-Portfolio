import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Mail, 
  Github, 
  Linkedin,
  Terminal,
  Layers,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Coffee
} from 'lucide-react';

function App() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentTech, setCurrentTech] = useState(0);

  const techStack = [
    "React & TypeScript",
    "Node.js & Express.js",
    "React Native & Mobile",
    "MySQL & MongoDB",
    "PHP & Backend APIs",
    "SQLite & Data Management"
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 38) {
          clearInterval(progressInterval);
          return 38;
        }
        return prev + 1;
      });
    }, 40);

    const techInterval = setInterval(() => {
      setCurrentTech(prev => (prev + 1) % techStack.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(techInterval);
    };
  }, []);

  const expertise = [
    { 
      icon: Code2, 
      label: "Frontend Development", 
      desc: "React, React Native, TypeScript",
      delay: "delay-100" 
    },
    { 
      icon: Server, 
      label: "Backend Development", 
      desc: "Node.js, Express.js, PHP",
      delay: "delay-200" 
    },
    { 
      icon: Database, 
      label: "Database Management", 
      desc: "MySQL, SQLite, MongoDB",
      delay: "delay-300" 
    },
    { 
      icon: Globe, 
      label: "Cloud & DevOps", 
      desc: "AWS, Docker, K8s",
      delay: "delay-400" 
    },
  ];

  const features = [
    { icon: CheckCircle, text: "Responsive Web Applications" },
    { icon: CheckCircle, text: "RESTful API Development" },
    { icon: CheckCircle, text: "Database Architecture" },
    { icon: CheckCircle, text: "Cloud Infrastructure" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Code Snippets Floating */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-8 text-blue-400/20 font-mono text-sm transform rotate-12 animate-pulse">
          const developer = "Ved Sharma";
        </div>
        <div className="absolute top-1/3 right-12 text-green-400/20 font-mono text-sm transform -rotate-12 animate-pulse animation-delay-2000">
          npm run build
        </div>
        <div className="absolute bottom-1/3 left-16 text-purple-400/20 font-mono text-sm transform rotate-6 animate-pulse animation-delay-4000">
          git commit -m "awesome"
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Header */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {/* Professional Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Terminal className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">Full-Stack Developer</span>
          </div>

          {/* Name and Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Ved
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Sharma
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 font-light mb-4">
              Building Digital Solutions with
            </div>
            <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text h-12">
              {techStack[currentTech]}
            </div>
          </div>

          {/* Professional Status */}
          <div className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-3">
                <Coffee className="w-5 h-5 text-amber-400 mr-3 animate-pulse" />
                <span className="text-amber-400 font-medium">Currently Crafting Something Amazing</span>
                <Zap className="w-5 h-5 text-amber-400 ml-3" />
              </div>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Welcome to my digital workspace. This portfolio site is currently under development as I craft 
              an immersive experience to showcase my expertise in full-stack development. You're at the right place 
              to witness innovative solutions built with modern technologies including React, Node.js, and advanced database systems.
            </p>
          </div>

          {/* Progress Section */}
          <div className="mb-12 max-w-lg mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-gray-400 font-medium">Development Progress</span>
              <span className="text-blue-400 font-bold text-lg">{progress}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden border border-gray-700">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full transition-all duration-500 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <div className="absolute right-0 top-0 h-full w-2 bg-white/40 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Planning</span>
              <span>Development</span>
              <span>Testing</span>
              <span>Launch</span>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center">
              <Layers className="w-6 h-6 mr-3 text-blue-400" />
              Technical Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {expertise.map((skill, index) => (
                <div
                  key={skill.label}
                  className={`group transform transition-all duration-700 hover:scale-105 ${skill.delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                >
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 h-full">
                    <skill.icon className="w-10 h-10 text-blue-400 mx-auto mb-4 group-hover:text-purple-400 transition-colors group-hover:scale-110 transform duration-300" />
                    <h4 className="text-white text-lg font-semibold mb-2">{skill.label}</h4>
                    <p className="text-gray-400 text-sm">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What I Build */}
          <div className="mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">What I Build</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300 bg-white/5 rounded-lg p-4 border border-white/10">
                  <feature.icon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="flex items-center justify-center mb-8">
              <Clock className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-400 text-lg">Expected Launch: </span>
              <span className="text-blue-400 font-bold text-lg ml-2">November 2025</span>
            </div>
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Currently focused on other professional projects. Portfolio development will resume shortly with enhanced features and comprehensive project showcases.
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-6">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 text-lg">
                <span className="flex items-center">
                  Get Notified When Live
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <p className="text-gray-500 text-sm">
                Be the first to explore my latest projects and technical innovations
              </p>
            </div>

            {/* Professional Links */}
            <div className="flex justify-center space-x-8 mt-12 mb-16">
              <a 
                href="mailto:vedsh24y4@gmail.com" 
                className="group flex flex-col items-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-xs mt-2">Email</span>
              </a>
              <a 
                href="https://github.com/ved-sharma-2411/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-xs mt-2">GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/ved-sharma-24y4" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
              >
                <div className="bg-white/10 p-3 rounded-full group-hover:bg-blue-600/20 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-xs mt-2">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <p className="text-gray-600 text-sm">
            © 2025 Ved Sharma • Full-Stack Developer • Building the Future
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;