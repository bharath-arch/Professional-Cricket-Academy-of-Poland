import React from 'react';
import { Target, Users, Trophy, Brain } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <Target className="h-12 w-12 text-purple-600" />,
      title: "Technical Skills",
      description: "Master batting, bowling, and fielding fundamentals through structured training modules."
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Team Development",
      description: "Join our U-12, U-16, and U-18 teams and compete at national level."
    },
    {
      icon: <Trophy className="h-12 w-12 text-purple-600" />,
      title: "Competitive Leagues",
      description: "Participate in Division 1, 2, and 3 leagues throughout the season."
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-600" />,
      title: "Mental Training",
      description: "Develop focus, resilience, and match-day preparation strategies."
    }
  ];

  return (
    <section id="programs" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-900">Our Programs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-900">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;