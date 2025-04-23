import React from 'react';
import { BarChart, Target, Dumbbell, Brain, Binary, LineChart, Users } from 'lucide-react';

const CoachingModel = () => {
  const leftSideItems = [
    { icon: <BarChart className="h-6 w-6 text-white" />, label: 'Technical' },
    { icon: <Target className="h-6 w-6 text-white" />, label: 'Tactical' },
    { icon: <Dumbbell className="h-6 w-6 text-white" />, label: 'Physical' },
    { icon: <Brain className="h-6 w-6 text-white" />, label: 'Mental' }
  ];

  const rightSideItems = [
    { icon: <Binary className="h-6 w-6 text-white" />, label: 'Fixed' },
    { icon: <LineChart className="h-6 w-6 text-white" />, label: 'Variable' },
    { icon: <Users className="h-6 w-6 text-white" />, label: 'Game-based' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Coaching Model</h2>
          <p className="text-purple-200">Player-centric approach to cricket excellence</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Left Side */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-700/50 rounded-2xl p-6 backdrop-blur-sm w-64">
            {leftSideItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mb-6 last:mb-0">
                <div className="bg-purple-600/50 p-3 rounded-lg">
                  {item.icon}
                </div>
                <span className="text-white font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Center Circle */}
          <div className="mx-auto w-48 h-48 bg-purple-500/50 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-purple-400/30">
            <div className="text-center text-white">
              <p className="font-bold">PLAYER</p>
              <p className="font-bold">CENTRIC</p>
              <p className="text-sm text-purple-200">Process</p>
            </div>
          </div>

          {/* Right Side */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-700/50 rounded-2xl p-6 backdrop-blur-sm w-64">
            {rightSideItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 mb-6 last:mb-0">
                <div className="bg-purple-600/50 p-3 rounded-lg">
                  {item.icon}
                </div>
                <span className="text-white font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingModel;