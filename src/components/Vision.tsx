import React from 'react';
import { Trophy, Heart, Users, Cloud } from 'lucide-react';

const Vision = () => {
  const visionItems = [
    {
      icon: <Trophy className="h-8 w-8 text-purple-600" />,
      text: "To build a world-class Cricket academy in Poland and create a team to compete at international level."
    },
    {
      icon: <Heart className="h-8 w-8 text-purple-600" />,
      text: "To bring up a passionate generation and develop a life long love for this incredible sport."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      text: "Through Cricket, build robust human values and make this planet a better place to live."
    },
    {
      icon: <Cloud className="h-8 w-8 text-purple-600" />,
      text: "Innovate and bring in the best of technologies and inventions to this wonderful sport."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.1) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Cricket ball seam lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform -rotate-12"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent transform rotate-12"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Our Vision & Values</h2>
          <p className="text-purple-700">Building the future of cricket in Poland</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-purple-100"
            >
              <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md">
                {item.icon}
              </div>
              <p className="text-purple-900 text-lg leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-300/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Vision;