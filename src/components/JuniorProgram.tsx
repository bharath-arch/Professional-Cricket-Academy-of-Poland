import React from 'react';
import { Target, Star, Shield, Brain } from 'lucide-react';

const JuniorProgram = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Fundamental Skills",
      description: "Learn cricket basics through fun, engaging activities"
    },
    {
      icon: <Star className="h-6 w-6 text-purple-600" />,
      title: "Age-Appropriate Training",
      description: "Programs tailored for different age groups and skill levels"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Safe Environment",
      description: "Professional supervision and safety-first approach"
    },
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Character Development",
      description: "Focus on sportsmanship, teamwork, and leadership"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Junior Cricket Program</h2>
          <p className="text-gray-600 max-w-3xl">
            Our professional coaching programs are designed to help players of all ages and skill levels improve their cricket abilities. 
            Our junior coaching focuses on fundamentals and fun learning experiences for young players.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-purple-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-purple-900">Age Groups & Training Schedule</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Under-12 Program</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Saturday: 9:00 AM - 10:30 AM
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Wednesday: 4:00 PM - 5:30 PM
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Under-16 Program</h4>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Saturday: 10:30 AM - 12:30 PM
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                  Wednesday: 5:30 PM - 7:30 PM
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-50 rounded-lg">
            <h4 className="font-semibold mb-4 text-lg">Program Highlights</h4>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Individual skill assessment
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Regular progress reports
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Tournament opportunities
              </li>
              <li className="flex items-center text-gray-600">
                <svg className="h-5 w-5 text-purple-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Video analysis sessions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JuniorProgram;