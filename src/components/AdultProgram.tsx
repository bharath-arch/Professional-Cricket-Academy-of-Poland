import React from 'react';
import { Award, Clock, Users, Target } from 'lucide-react';

const AdultProgram = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-purple-600" />,
      title: "Advanced Techniques",
      description: "Master advanced batting, bowling, and fielding techniques"
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: "Team Strategy",
      description: "Learn tactical gameplay and match strategies"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Flexible Scheduling",
      description: "Evening and weekend sessions for working professionals"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Competition Focus",
      description: "Preparation for league matches and tournaments"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-purple-900 mb-4">Adult Cricket Program</h2>
          <p className="text-gray-600 max-w-3xl">
            Our professional coaching programs are designed to help players of all skill levels improve their cricket abilities. 
            Our adult coaching helps players refine their skills and develop advanced techniques.
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

        <div className="bg-purple-100 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-900">Training Schedule</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Krakow</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Tuesday & Thursday: 6:00 PM - 8:00 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Saturday: 2:00 PM - 4:00 PM</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Warsaw</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Monday & Wednesday: 6:30 PM - 8:30 PM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <span>Sunday: 10:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdultProgram;