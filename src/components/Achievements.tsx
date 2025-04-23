import React from 'react';
import { Trophy, Target } from 'lucide-react';

const Achievements = () => {
  const international = [
    "Champions in T15 tournament in Brno",
    "Runners-up in T10 tournament",
    "Poland's FIRST EVER Juniors participation in International tournaments across Germany and Czech Republic",
    "Professional Coaching to International Clubs - FICA Germany"
  ];

  const domestic = [
    "Professional Coaching & Team Building for Corporates - ING HUBS",
    "PCAP Premier League - Our first-ever home tournament",
    "WEEKDAY Coaching Sessions - Coaching sessions for juniors during weekdays in Krakow",
    "THE BIG LEAP - From 2 players in July 2023 to 100+ players in Sep 2024"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-800 text-sm font-medium px-4 py-1 rounded-full">Success</span>
          <h2 className="text-4xl font-bold text-purple-900 mt-4">Our Achievements</h2>
          <p className="text-gray-600 mt-2">Building cricket excellence in Poland through consistent growth and development</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-purple-50 rounded-lg p-8">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Trophy className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">International Success</h3>
            <ul className="space-y-3">
              {international.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-200 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-8">
            <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <Target className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold text-purple-900 mb-4">Domestic Growth</h3>
            <ul className="space-y-3">
              {domestic.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-200 flex items-center justify-center mt-1">
                    <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;